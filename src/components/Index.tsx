import "./Index.css"
import { useEffect, useState } from "react"
import type { PostIndex } from "../interfaces/postIndex"
import { IndexService } from "../services/postService";
import FileIcon from "./FileIcon";

export default function Index() {

    
    const [index, setIndex] = useState<PostIndex>();
    useEffect(() => {
        const indexGetter = async () => {
            const indexBody = await IndexService();
            setIndex(indexBody)
        }
        indexGetter()
    },
    [])

    return (
        <>
            <div className="post-content">
                { index ? index?.map((entry) => {
                    console.log(entry.lastModified)
                    return (
                        <div className="index-entry">
                            <FileIcon size="2.5rem" padding="0" stroke="var(--white)"/>
                            {entry.title} - {(new Date(entry.lastModified as unknown as number * 1000)).toLocaleDateString("en-US")}
                        </div>
                    )
                }) : <></>}
            </div>
        </>
    )
}