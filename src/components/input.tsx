interface Inputprops {
    placeholder: string,
    reference: React.RefObject<HTMLInputElement | null>
}
export default function Input({ placeholder, reference }: Inputprops) {
    return (
        <div>
            <input ref={reference} placeholder={placeholder} className="border border-gray-300 rounded-md p-2" />
        </div>
    )
}