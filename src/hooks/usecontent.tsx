import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import toast from "react-hot-toast";
export default function usecontent() {
    const [content, setcontent] = useState([]);
    const refresh = async () => {
        try {
            await axios.get("https://secondbrain-backend-1-4etv.onrender.com/api/content", {
                headers: {
                    token: localStorage.getItem("token") || ""
                }
            }).then((res) => {
                setcontent(res.data.content);
                toast.success("Content fetched successfully");
            })
        } catch (error) {
            toast.error("Something went wrong");

        }
    }
    useEffect(() => {
        let interval = setInterval(async () => {
            await refresh();
        }, 10 * 1000);
        return () => clearInterval(interval);
    }, [])
    return { content, refresh }
}