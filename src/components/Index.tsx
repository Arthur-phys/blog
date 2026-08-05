import "./Index.css"
import type { PostIndex } from "../interfaces/postIndex"
import { IndexService } from "../services/postService";
import FileIcon from "./FileIcon";
import { useEffect, useState } from "react"
import MainContainer from "./shared/MainContainer";
import AngleLeft from "./AngleLeft";
import AngleRight from "./AngleRight";

export default function Index() {

    const [index, setIndex] = useState<PostIndex>();
    const [page, _] = useState<number>(1);

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
                { index ?
                <>
                        <MainContainer
                            children={
                                <>
                                    <ul>
                                        {index.slice((page-1)* 10, page*10)?.map((entry) => {
                                            return (
                                                <li className="index-list-item">
                                                <div className="index-entry">
                                                    <FileIcon size="2.5rem" padding="0" stroke="var(--white)"/>
                                                    {entry.title} - {(new Date(entry.lastModified as unknown as number * 1000)).toLocaleDateString("en-US")}
                                                </div>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                    <div className="pagination">
                                        { page > 0 ?
                                                <div className="go hover-left">
                                                    <AngleLeft stroke="var(--white)" size='4rem' padding='0.1rem'/>
                                                    <p>&hellip;</p>
                                                </div> :
                                                <div></div>
                                        }
                                        <div className="numbers">
                                            {
                                                Array.from({length: index.length / 3 + 1}, (_, index) => index)
                                                    .map((i) => {
                                                        return (<span>
                                                            {i+1}
                                                        </span>)
                                                }
                                            )}
                                        </div>
                                        { page < (index.length / 3 ) ?
                                            <div className="go hover-right">
                                                <p>&hellip;</p>
                                                <AngleRight stroke="var(--white)" size='4rem' padding='0.1rem'/>
                                            </div> :
                                            <div></div>
                                        }
                                    </div>
                                </>
                            }
                        >
                        </MainContainer>
                </>

                : <></>}
        </>
    )
}