import React from "react";

function IconStopWatch({ strokeColor = "black" }: {strokeColor?: string}) {
    return (
        <svg 
            className="w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
        >
            <path 
                stroke={strokeColor}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>

    )
}