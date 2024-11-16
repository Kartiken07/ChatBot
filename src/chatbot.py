import openai
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import os
from dotenv import load_dotenv # type: ignore

load_dotenv()  # Load environment variables from .env file
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

# Data model to receive the request body
class FormData(BaseModel):
    about_you: str
    project_length: str
    service: str
    content_type: str
    template: str
    length_of_video: Optional[str] = None  # Optional for non-video services

@app.post("/generate_spec_sheet")
async def generate_spec_sheet(data: FormData):
    # Define the function call structure dynamically based on service type
    function_call = {
        "name": "generate_spec_sheet",
        "description": f"Generates a spec sheet for a {data.service} project.",
        "parameters": {
            "type": "object",
            "properties": {
                "Prompt": {"type": "string"},
                "Project Type": {"type": "string"},
                "Content Details": {"type": "string"},
                "Frequency": {"type": "string"},
                "Length": {"type": "string"},
            },
            "required": ["Prompt", "Project Type", "Content Details"]
        }
    }

    # Customize parameters based on the service type
    if data.service.lower() == "video editing":
        function_call["parameters"]["properties"] = {
            "Prompt": {"type": "string"},
            "Type of video": {"type": "string"},
            "Subtype of video": {"type": "string"},
            "Frequency of video": {"type": "string"},
            "Length of video": {"type": "string"},
        }
    elif data.service.lower() == "graphic design":
        function_call["parameters"]["properties"] = {
            "Prompt": {"type": "string"},
            "Design type": {"type": "string"},
            "Color scheme": {"type": "string"},
            "Dimensions": {"type": "string"},
            "File format": {"type": "string"},
        }

    # Prepare a content message based on the service type
    service_description = (
        f"The user has chosen to create a {data.service} for {data.content_type}. "
        f"The project length is {data.project_length}. Template chosen is {data.template}."
    )

    if data.length_of_video:
        service_description += f" Length of video: {data.length_of_video}."

    try:
        # Call the OpenAI API with function calling
        response = openai.ChatCompletion.create(
            model="gpt-4-0613",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant that helps generate a detailed spec sheet based on form input."
                },
                {
                    "role": "user",
                    "content": service_description
                }
            ],
            functions=[function_call],
            function_call="auto"
        )

        # Extract and return the response
        if "choices" in response and response.choices[0].message.get("function_call"):
            result = response.choices[0].message["function_call"]["arguments"]
            return result
        else:
            return {"error": "Unexpected response format from OpenAI"}
    except Exception as e:
        return {"error": str(e)}
