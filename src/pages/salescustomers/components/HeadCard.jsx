export default function HeadCard({ title, amount, greenText, description, icon }) {
    return (
        <div className="border-1 border-zinc-300 rounded-xl p-6 flex flex-col justify-center gap-6">
            {title && (
                <div className="text-sm text-zinc-500 flex justify-between items-center gap-2 w-full">
                    {title}
                    {icon}
                </div>
            )}
            <div className="flex flex-col gap-2">
                {amount}
                <div className="text-zinc-500 text-sm">
                    <span className="text-green-500">{greenText}</span> {description}
                </div>
            </div>
        </div>
    );
}
