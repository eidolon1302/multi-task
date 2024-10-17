import React from "react";
import IconGrid from "@/public/icons/IconGrid";
import IconFileCheck from "@/public/icons/IconFileCheck";
import IconCheck from "@/public/icons/IconCheck";
import IconStopwatch from "@/public/icons/IconStopwatch";

function MiniSidebar() {

    const navItems = [
        {
            icon: <IconGrid/>,
            title: "All",
            link: "/"
        },
        {
            icon: <IconFileCheck strokeColor= {getStrokeColor("/Completed")} />,
            title: "Completed",
            link: "/completed"
        },
        {
            icon: <IconCheck strokeColor= {getStrokeColor("/pending")} />,
            title: "Pending",
            link: "/pending"
        },
        {
            icon: <IconStopWatch strokeColor= {getStrokeColor("/overdue")} />,
            title: "Overdue",
            link: "/overdue"
        }
    ]
    return(
        <div>MiniSidebar</div>
    )
}

export default MiniSidebar;