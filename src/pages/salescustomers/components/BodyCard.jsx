export default function BodyCard({ title, child }) {
    return (
        <div className="border-1 border-zinc-300 rounded-xl p-6 min-h-96 flex flex-col gap-6">
            {title}
            {child}
        </div>
    );
}
