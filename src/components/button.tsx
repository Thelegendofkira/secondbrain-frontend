interface ButtonProps {
    variant: "primary" | "secondary",
    onClick: () => void,
    Icon?: React.ReactNode,
    Content: string

}
const variants = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-600"
}
const defaultstyles = "px-4 py-2 rounded-md flex items-center"

function Button({ variant, onClick, Icon, Content }: ButtonProps) {
    return (
        <>
            <button className={defaultstyles + " " + variants[variant]} onClick={onClick}>
                {Icon}
                {Content}</button>
        </>
    )
}
export default Button
