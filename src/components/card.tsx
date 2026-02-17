
import BrainIcon from "../Icons/brainicon"
import ShareIcon from "../Icons/shareicon"
import TextIcon from "../Icons/texticon"
import { DeleteIcon } from "lucide-react"
import toast from "react-hot-toast"
import axios from "axios"
interface CardProps {
    title: string,
    type: 'youtube' | 'twitter' | 'article',
    link: string,
    tags: string[],
    description: string,
    id: string


}
const getEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1] || url.split('youtu.be/')[1];
    const cleanVideoId = videoId ? videoId.split('?')[0] : null;
    return `https://www.youtube.com/embed/${cleanVideoId}`;
};
function Card({ id, title, type, link, tags, description }: CardProps) {
    return (
        <div className="max-w-72 bg-grey-200 rounded-md p-4 shadow-md rounded-lg">
            <div className="flex items-center justify-between"><BrainIcon /> {title}
                <div className="flex gap-2">
                    <button onClick={() => { alert(link) }}><ShareIcon /></button>
                    <button onClick={async () => {
                        try {
                            await axios.delete("https://secondbrain-backend-1-4etv.onrender.com/api/content", {
                                headers: {
                                    token: localStorage.getItem("token") || ""
                                },
                                data: {
                                    _id: id
                                }
                            })
                            toast.success("Content deleted successfully");

                        }
                        catch (err) {
                            toast.error("unnable to delete some thing went wrong")


                        }
                    }}><DeleteIcon className="size-4" /></button>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && (

                    <iframe
                        className="w-full"
                        src={getEmbedUrl(link)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
            </div>
            <div className="pt-2 flex justify-start items-center">
                <TextIcon /> <p className="ml-2 text-left">{`${description}`}</p>
            </div>
            <span className="flex items-center justify-start space-x-2 pt-2 ">
                {tags.map((tag) => {
                    return <div className="bg-purple-200 text-purple-600 rounded-md p-1">{`#${tag}`}</div>
                })}
            </span>
        </div>

    )
}
export default Card