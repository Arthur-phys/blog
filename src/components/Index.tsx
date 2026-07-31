import "./Index.css"
import { useEffect, useState } from "react"
import type { PostIndex } from "../interfaces/postIndex"
import { IndexService } from "../services/postService";
import FileIcon from "./FileIcon";

export default function Index() {

    const [index, setIndex] = useState<PostIndex>();
    const [page, setPage] = useState<number>(1);

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
            <ul className="post-content">
                { index ? index.slice((page-1)* 10, page*10)?.map((entry) => {
                    return (
                        <li className="index-entry">
                            <FileIcon size="2.5rem" padding="0" stroke="var(--white)"/>
                            {entry.title} - {(new Date(entry.lastModified as unknown as number * 1000)).toLocaleDateString("en-US")}
                        </li>
                    )
                }) : <></>}
            </ul>
        </>
    )
}