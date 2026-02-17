import BrainIconlogo from "../Icons/logobrainicon";
import {
    Twitter,
    Youtube,
    FileText,
    Link2,
    Hash,
    LogOut
} from "lucide-react";
import SideItem from "./sideitem";

export default function SideBar({ selected, setSelected }: { selected: string, setSelected: (value: string) => void }) {
    return (
        <div className="h-screen bg-white border-r w-72 fixed top-0 left-0 pt-6 pl-6">

            <div className="flex items-center gap-3 mb-8 cursor-pointer">
                <div className="text-purple-600">
                    <BrainIconlogo />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Second Brain
                </h1>
            </div>


            <div className="flex flex-col gap-4">
                <SideItem icon={<Twitter />} title="Tweets" onClick={() => setSelected("twitter")} />
                <SideItem icon={<Youtube />} title="Videos" onClick={() => setSelected("youtube")} />
                <SideItem icon={<FileText />} title="Documents" onClick={() => setSelected("all")} />
                <SideItem icon={<Link2 />} title="Links" />
                <SideItem icon={<Hash />} title="Tags" />
                <SideItem icon={<LogOut />} title="Logout" onClick={() => localStorage.removeItem("token")} />
            </div>
        </div>
    )
}