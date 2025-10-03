export default function Cards({ title, icons, numberdes, description }) {
    return (

        <>
            <div className="card card-border bg-base-100 border-zinc-300 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center justify-between">
                        <h2 className="card-title">{title}</h2>
                        <span>{icons}</span>
                    </div>
                    <article className="space-y-2">
                        <p className="font-bold">{numberdes}</p>
                        <p>{description}</p>
                    </article>
                </div>
            </div>
        </>
    );
}
