import React, { useState, useEffect } from 'react';

const SemiCircleProgressBar = () => {
    const [completedTasks, setCompletedTasks] = useState(7);
    const totalTasks = 15;

    const progressPercentage = (completedTasks / totalTasks) * 100;

    const radius = 80; // Reduced radius for better responsiveness on smaller screens
    const strokeWidth = 12; // Reduced stroke thickness
    const circumference = Math.PI * (radius * 2); 
    const progress = (progressPercentage / 100) * (circumference / 2); 

    const centerX = radius + strokeWidth / 2; 
    const centerY = radius + strokeWidth / 2; 

    const needleWidth = 5; 
    const needleHeight = 60; 

    const [needleAngle, setNeedleAngle] = useState(-90); 

    useEffect(() => {
        const targetAngle = (progressPercentage / 100) * 180 - 90;
        setTimeout(() => {
            setNeedleAngle(targetAngle);
        }, 100); 
    }, [progressPercentage]);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-base sm:text-lg text-white pt-2 sm:pt-4 font-bold mb-1 sm:mb-2">Task Progress</h3>
            <p className="text-xs sm:text-sm text-white mb-3 sm:mb-5">
                {completedTasks} out of {totalTasks} tasks completed
            </p>
            <svg
                width={radius * 2 + strokeWidth}
                height={radius + strokeWidth}
                viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
                className="w-48 sm:w-56 md:w-64" // Responsive width for different screen sizes
            >
                {/* Background semi-circle */}
                <path
                    d={`
                        M ${centerX - radius}, ${centerY}
                        A ${radius}, ${radius} 0 0 1 ${centerX + radius}, ${centerY}
                    `}
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />

                {/* Foreground semi-circle (progress) */}
                <path
                    d={`
                        M ${centerX - radius}, ${centerY}
                        A ${radius}, ${radius} 0 0 1 ${centerX + radius}, ${centerY}
                    `}
                    fill="none"
                    stroke="#5bc95f"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progress}, ${circumference / 2}`}
                    strokeLinecap="round"
                />

                {/* Needle */}
                <g
                    style={{
                        transition: 'transform 1s ease-out',
                        transform: `rotate(${needleAngle}deg)`,
                        transformOrigin: `${centerX}px ${centerY}px`,
                    }}
                >
                    <rect
                        x={centerX - needleWidth / 2}
                        y={centerY - needleHeight}
                        width={needleWidth}
                        height={needleHeight}
                        fill="red"
                        rx="4" 
                    />
                    <circle
                        cx={centerX}
                        cy={centerY}
                        r={5}
                        fill="red"
                    />
                </g>
            </svg>
            <div className="text-lg sm:text-xl text-white font-bold mt-2">{Math.round(progressPercentage)}%</div>
        </div>
    );
};

export default SemiCircleProgressBar;

