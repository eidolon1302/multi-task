"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

function Header() {
    const {user}= useUserContext();
    const {name} = user;
    const userId = user._id;

    return(
        <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
            <div>
                <h1 className="text-lg font-medium">
                    <span role="img" aria-label="wave">🙌</span>
                    {userId? `Welcome, ${name}!` : 'welcome to Multi Taskf'}
                </h1>
                <p className="text-sm">
                    {userId ? (
                        <>
                        You have <span className="font-bold text-[#3aafae]">5</span>&nbsp;active tasks
                        </>
                    ): (
                        "Please login or register to view your tasks"
                    )}
                </p>
            </div>
            <div className="h-[50px] flex items-center gap-[10.4rem]">
                <button className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px] hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out">
                    Create a new Task
                </button>
            </div>
        </header>
    )
}

export default Header;