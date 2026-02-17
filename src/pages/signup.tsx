import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function signup() {
        try {

            const response = await axios.post("https://secondbrain-backend-1-4etv.onrender.com/api/signup", {
                username: nameRef.current?.value,
                password: passwordRef.current?.value
            });
            navigate("/signin");
            toast.success("Signup successful");
        } catch (error) {
            toast.error("Signup failed");
        }

    }
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
            <div className="w-[400px] h-[250px] relative  bg-grey-200 rounded-md flex flex-col items-center justify-center space-y-4 border border-gray-300 shadow-lg rounded-md">
                <h1 className="text-2xl ">Signup</h1>
                <input ref={nameRef} placeholder="Name" className="border border-gray-300 rounded-md p-2" />
                <input ref={passwordRef} placeholder="Password" className="border border-gray-300 rounded-md p-2" />
                <button onClick={signup} className="bg-purple-600 text-white rounded-md p-2 cursor-pointer hover:bg-purple-700" >Signup</button>
            </div>
        </div>
    )
}