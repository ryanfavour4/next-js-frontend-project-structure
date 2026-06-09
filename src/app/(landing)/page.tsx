import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <button>Click Me!</button>
            {/* <Icon icon={lineMdDownloadingLoop} /> */}
            <Icon icon={"line-md:align-left"} />
            <Icon icon={"line-md:at"} />
            <Link href={"/login"}>Go To Login</Link>
        </div>
    );
}

