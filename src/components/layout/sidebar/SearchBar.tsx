import { useEffect, useState } from "react";
import "./SearchBar.css";
import { SearchService } from "../../../services/searchService";
import { ReverseIndexService } from "../../../services/postService";
import type { ReverseIndex } from "../../../interfaces/postIndex";

export default function SearchBar() {

    const [reverseIndex, setReverseIndex] = useState<ReverseIndex>({});
    const [matches, setMatches] = useState<Array<[string,number]>>();
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        async function obtainSearch() {
            let revIndex = await ReverseIndexService()
            setReverseIndex(revIndex)
        }
        obtainSearch()
    },[])

    useEffect(() => {
        setMatches(SearchService(query,5,reverseIndex))
    },[reverseIndex,query])

    return (
        <>
            <input className='search-bar' placeholder='Search Posts' type="text" 
                value={query} onChange={e => setQuery(e.target.value)}>
            </input>
            <ul>
                { matches ? matches.map(entry => {
                    return (<li>
                        {entry[0]}
                    </li>)
                }) : <></> }
            </ul>
        </>
    )
}