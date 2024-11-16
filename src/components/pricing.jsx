// import React from 'react'

// const Pricing = () => {
//   return (
//     <div className='flex flex-col w-screen bg-elliptical-gradient '>
//     <div className='text-white text-center flex flex-col  justify-center items-center gap-4'>
//         <span className='block text-center max-w-[600px] leading-normal text-5xl font-sans font-semibold'>Simple and Affordable Pricing Plans</span>
//         <span>Start tracking and improving  your finance management</span>
//     </div>
// <div className='flex justify-around sm:flex-col md:flex-row  m-10 gap-4'>
// <div class="w-full max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8 ">
// <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free</h5>
// <div class="flex items-baseline m-3 text-gray-900 dark:text-white">
// <span class="text-3xl font-semibold">$</span>
// <span class="text-5xl font-extrabold tracking-tight">0,00</span>
// <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
// </div>
// <div className='m-4 mb-5'>
// <span className='text-white'> Great for trying out Finament and for tiny teams</span>
// </div>
// <button type="button" class="text-white bg-Green-300 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-500 dark:hover:bg-Green-700 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start for free</button>
// <ul role="list" class="space-y-5 my-7">
// <li class="flex items-center">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Account Aggregation</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Expense Tracking</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Budgeting Tools</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Transaction Insights</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Basic Security</span>
// </li>


// </ul>

// </div>
// <div class="w-full max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8">
// <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Professional</h5>
// <div class="flex items-baseline m-3 text-gray-900 dark:text-white">
// <span class="text-3xl font-semibold">$</span>
// <span class="text-5xl font-extrabold tracking-tight">98,00</span>
// <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
// </div>
// <div className='m-4 mb-5'>
// <span className='text-white'> Best for growing startups and growth companies</span>
// </div>
// <button type="button" class="text-white bg-Green-300 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-500 dark:hover:bg-Green-700 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Sign Up with Professional</button>
// <ul role="list" class="space-y-5 my-7">
// <li class="flex items-center">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Everything in free</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Customizable Dashboards</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Advanced Budgeting</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Investment Tracking</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Enhanced Securiy</span>
// </li>


// </ul>

// </div>
// <div class="w-full max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8 ">
// <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Enterprise</h5>
// <div class="flex items-baseline m-3 text-gray-900 dark:text-white">
// <span class="text-3xl font-semibold">$</span>
// <span class="text-5xl font-extrabold tracking-tight">160,00</span>
// <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
// </div>
// <div className='m-4 mb-5'>
// <span className='text-white'>Best for large companies and teams requring high security</span>
// </div>
// <button type="button" class="text-white bg-Green-300 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:bg-green-500 dark:hover:bg-Green-700 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Sign up with Enterprise</button>
// <ul role="list" class="space-y-5 my-7">
// <li class="flex items-center">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Financial Planning Tools</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Priority Support</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Premium Support</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Advanced Security</span>
// </li>
// <li class="flex">
// <svg class="flex-shrink-0 w-4 h-4 text-green-700 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
// </svg>
// <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration with 3rd-Party Services</span>
// </li>


// </ul>

// </div>
// </div>
// {/* Specsheet */}
// {/* <div className=' flex flex-col w-[30%] p-5 bg-transparent border-2 text-white justify-center rounded-xl m-10 '>
//     <div className='flex flex-col justify-center items-center m-5'>
//     <span  className='text-3xl tracking-wider font-semibold mb-3'>SPECSHEET</span>
//     <span className='text-xs leading-normal block max-w-[90%] text-center'>This sheet has all the scope of work listedd below based on the questions you answered</span>
//     </div>
//     <div className='flex flex-col'>
//         <div className=' flex flex-col m-3 mb-4 mt-0 p-3 pl-0 pr-0 border-b-2 border-dotted'>
//             <span className='text-xl font-serif pb-3'>Scope of Work</span>
//         <div className='flex flex-col text-sm'>
//             <span>Prompt                :  </span>
//             <span>Type of video         :  </span>
//             <span>Subtype of video      :  </span>
//             <span>Frequency of video    :  </span>
//             <span>Lenght of video       :  </span>
//         </div>
//         </div>
//         <div className='flex flex-col m-3 mb-4 mt-0 p-3 pl-0 pr-0 border-b-2 border-dotted'>
//             <span className='text-xl font-serif pb-3'>Descriptive</span>
//             <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod voluptates cum praesentium alias laudantium, debitis unde enim beatae neque, error pariatur dolorem sapiente rerum distinctio dicta nam? Debitis, dignissimos.</span>
//         </div>
//         <div className='flex flex-col m-3 mb-4 mt-0 p-3 pl-0 pr-0 border-b-2 border-dotted'>
//             <span className='text-xl font-serif pb-3'>Tags</span>
//             <div className=' text-xs'> 
//                 <button className='bg-gray-600 p-1 rounded-lg m-1 mx-3'>Motion Graphics</button>
//                 <button className='bg-gray-600 p-1 rounded-lg m-1 mx-3'>Motion Graphics</button>
//                 <button className='bg-gray-600 p-1 rounded-lg m-1 mx-3'>Motion Graphics</button>
//                 <button className='bg-gray-600 p-1 rounded-lg m-1 mx-3 '>Motion Graphics</button>
//                 <button className='bg-gray-600 p-1 rounded-lg m-1 mx-3'>Motion Graphics</button>
//             </div>
//         </div>
//         <div className='flex flex-col m-3 mb-0 pb-0 mt-0 p-3 pl-0 pr-0  '>
//             <span className='text-xl font-serif pb-3'>Order Details</span>
//             <div className='flex flex-col text-sm'>
//                 <span>Order Number  :</span>
//                 <span>Order Date    :</span>
//                 <span>Invoice Details :</span>
//             </div>
//         </div>
       
//     </div>
// </div> */}
// </div>
//   )
// }

// export default Pricing

import React from 'react';

const Pricing = () => {
  return (
    <div className="flex flex-col w-screen bg-elliptical-gradient px-4 py-4 sm:py-16">
      <div className="text-white text-center flex flex-col justify-center items-center gap-4 mb-8">
        <span className="block text-center max-w-[600px] leading-normal text-3xl sm:text-4xl md:text-5xl font-sans font-bold">
          Simple and Affordable Pricing Plans
        </span>
        <span className="text-sm sm:text-base">
          Start tracking and improving your finance management
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-6 sm:gap-10 m-5">
        {/* Free Plan */}
        <div className="w-full sm:w-80 max-w-sm p-6 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free</h5>
          <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">0.00</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <div className="mb-5">
            <span className="text-white">Great for trying out Finament and for tiny teams</span>
          </div>
          <button
            type="button"
            className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Start for free
          </button>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Account Aggregation</span>
            </li>
            
          </ul>
        </div>
        {/* Professional Plan */}
        <div className="w-full sm:w-80 max-w-sm p-6 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Professional</h5>
          <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">98.00</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <div className="mb-5">
            <span className="text-white">Best for growing startups and growth companies</span>
          </div>
          <button
            type="button"
            className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Sign Up with Professional
          </button>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-700 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Everything in free</span>
            </li>
          </ul>
        </div>
        {/* Enterprise Plan */}
        <div className="w-full sm:w-80 max-w-sm p-6 bg-transparent border border-gray-200 rounded-lg shadow sm:p-8">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Enterprise</h5>
          <div className="flex items-baseline mb-3 text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">160.00</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <div className="mb-5">
            <span className="text-white">Best for large companies and teams requiring high security</span>
          </div>
          <button
            type="button"
            className="text-white bg-Green-500 hover:bg-Green-600 focus:ring-4 focus:outline-none focus:ring-Green-200 dark:bg-Green-700 dark:hover:bg-Green-800 dark:focus:ring-Green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Sign up with Enterprise
          </button>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-Green-600 dark:text-Green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ml-3">Financial Planning Tools</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
