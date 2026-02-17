import Input from "./input";
import CloseIcon from "../Icons/crsooIcon";
import axios from "axios";
import { useRef, useState } from "react";

interface CreateContentModelProps {
    isOpen: boolean,
    onClose: () => void
}

export default function CreateContentModel({ isOpen, onClose }: CreateContentModelProps) {
    const linkref = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);
    const [type, settype] = useState<"youtube" | "twitter">("youtube");

    async function addcontent() {
        try {
            const response = await axios.post("https://secondbrain-backend-1-4etv.onrender.com/api/content", {
                title: titleRef.current?.value,
                link: linkref.current?.value,
                type: type,
                description: descriptionRef.current?.value,
                tags: tagRef.current?.value.split(",").map((tag) => tag.trim()),
            }, {
                headers: {
                    token: localStorage.getItem("token") || ""
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-slate-500 flex justify-center backdrop-blur-sm opacity-97 items-center">
                    <div className="w-[400px] h-[400px] rounded-md bg-white flex flex-col justify-center items-center">
                        <div className="flex items-center justify-between w-full relative bottom-8 right-0"> <p className="text-2xl ml-28">Create Content</p><button onClick={onClose} className="mr-3"><CloseIcon /></button></div>
                        <div className="flex flex-col gap-2 pt-2">
                            <Input placeholder="Title" reference={titleRef} />
                            <Input placeholder="Link" reference={linkref} />
                            <Input placeholder="Description" reference={descriptionRef} />
                            <Input placeholder="Tags" reference={tagRef} />
                        </div>
                        <div className="flex items-center justify-start pt-2">
                            <select value={type} onChange={(e) => settype(e.target.value as "youtube" | "twitter")}>
                                <option value="youtube">Youtube</option>
                                <option value="twitter">Twitter</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-start pt-2 ">
                            <button onClick={addcontent} className="bg-purple-600 text-white rounded-md p-2 cursor-pointer">Add Content</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )



} 