import "./Index.css"
import type { PostIndex } from "../../interfaces/postIndex"
import { IndexService } from "../../services/postService";
import FileIcon from "../Icons/FileIcon";
import { useEffect, useState } from "react"
import MainContainer from "../layout/MainContainer";
import AngleLeft from "../Icons/AngleLeft";
import AngleRight from "../Icons/AngleRight";
import { useNavigate } from "react-router";
import { randomColorPick } from "../../utils/utils";

export default function Index() {

    const [index, setIndex] = useState<PostIndex>();
    const navigate = useNavigate();
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
                { index ?
                <>
                        <MainContainer
                            children={
                                <>
                                    <ul>
                                        {index.slice((page-1)* 10, page*10)?.map((entry) => {
                                            return (
                                                <li className="index-list-item">
                                                <div className="index-entry" onClick={() => {
                                                    navigate(`/?post=${entry.slug}`);
                                                }}>
                                                    <FileIcon size="2.5rem" padding="0" stroke="var(--white)"/>
                                                    {entry.title} - {(new Date(entry.lastModified as unknown as number * 1000)).toLocaleDateString("en-US")}
                                                </div>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </>
                            }
                        >
                        </MainContainer>
                            <div className="pagination">
                                <div
                                    style={ page > 1 ? {} : {visibility: "hidden"}}
                                    onClick={() => {setPage((page) => {
                                        return page > 1 ? page - 1 : page;
                                    })}}
                                    className="go"
                                >
                                    <AngleLeft stroke="var(--white)" size='4rem' padding='0.1rem'/>
                                </div>
                                <div className="numbers">
                                    <p className="ellipsis">&hellip;</p>
                                    {
                                        Array.from({length: (index.length / 10) + (index.length % 10 == 0 ? 0 : 1)}, (_, index) => index)
                                            .map((i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        onClick={() => setPage(i+1)}
                                                        style={page == i + 1 ? {color: `var(--${randomColorPick()})`} : {}}
                                                        className={`page-index ${page == i + 1 ? "page-index-selected" : ""}`}>
                                                            {i+1}
                                                    </span>
                                                )
                                        }
                                    )}
                                <p className="ellipsis">&hellip;</p>
                                </div>
                                    <div style={ page < (index.length / 10 ) ? {} : {visibility: "hidden"} } 
                                        onClick={() => {setPage((page) => {
                                                return page < (index.length / 10) + 1 ? page + 1 : page;
                                            })}}
                                        className="go">
                                        <AngleRight stroke="var(--white)" size='4rem' padding='0.1rem'/>
                                    </div>
                            </div>
                </>

                : <></>}
        </>
    )
}