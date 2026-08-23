import "./SearchBar.css";
import { useEffect, useState } from "react";
import Button from "./Button";
import Query from "../../Icons/Query";
import { SearchService } from "../../../services/searchService";
import { ReverseIndexService } from "../../../services/postService";
import type { ReverseIndex } from "../../../interfaces/postIndex";

export default function SearchBar() {

    const [reverseIndex, setReverseIndex] = useState<ReverseIndex>({});
    // const [debounce, setDebouce] = useState()
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
        if (query && query != "") {
            setMatches(SearchService(query,5,reverseIndex))
        }
    },[reverseIndex,query])

    return (
        <>
            <input className='search-bar' placeholder='Search Posts' type="text" 
                value={query} onChange={e => setQuery(e.target.value)}>
            </input>
            <ul>
                { matches ? matches.map(entry => {
                    return (<li className="match-entry">
                        <Button text={entry[0]} goTo={`/?post=${entry[0]}`} 
                        icon={<Query size='2rem' padding='0rem' stroke='var(--white)'/>}/>
                    </li>)
                }) : <></> }
            </ul>
        </>
    )
}