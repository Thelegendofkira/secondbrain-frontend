import { useState } from "react";
import CreateContentModel from "../components/createcontentmodel";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRef } from "react";
import Button from "../components/button";
import PlusIcon from "../Icons/plusIcon";
import SideBar from "../components/sidebar";
import ShareIcon from "../Icons/shareicon";
import usecontent from "../hooks/usecontent";
import Card from "../components/card";
export default function Dashboard() {
    const checktoken = localStorage.getItem("token");
    if (!checktoken) {
        window.location.href = "/";
    }
    const [type, settype] = useState("all");
    const [open, setopen] = useState(false);
    const { content, refresh } = usecontent();
    useEffect(() => {
        refresh();
    }, []);
    return (
        <div className="w-screen h-screen flex">
            <SideBar selected={type} setSelected={settype} />
            <div className="p-8 ml-72 min-h-screen w-full bg-gray-50 ">

                <CreateContentModel isOpen={open} onClose={() => setopen(false)} />
                <div className="flex items-center justify-between"><div ><h1 className="text-2xl font-bold">Notes</h1></div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center justify-center"><Button variant="primary" Content="Add Content" Icon={<PlusIcon />} onClick={() => setopen(true)} /></div>
                        <div className="flex items-center justify-center">
                            <Button variant="secondary" Content="Share" Icon={<ShareIcon />} onClick={() => setopen(true)} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {type === "all" ? content.map((item: any, index: number) => (
                        <Card key={index} id={item._id} title={item.title} link={item.link} type={item.type} description={item.description} tags={item.tags} />
                    )) : content.filter((item: any) => item.type === type).map((item: any, index: number) => (
                        <Card key={index} id={item._id} title={item.title} link={item.link} type={item.type} description={item.description} tags={item.tags} />
                    ))}
                </div>






            </div>

        </div>

    )
}