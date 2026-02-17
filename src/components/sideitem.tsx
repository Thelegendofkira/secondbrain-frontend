
export default function SideItem({ icon, title, onClick }: { icon: React.ReactNode, title: string, onClick?: () => void }) {
    return (
        <div className=" w-full flex items-center gap-2 hover:bg-purple-200 p-2 rounded-md cursor-pointer" onClick={onClick}>
            <div className="size-4 flex items-center justify-center">
                {icon}
            </div>
            <div className="text-sm">
                {title}
            </div>
        </div>
    )
}