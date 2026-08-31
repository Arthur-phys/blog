import "./SearchBar.css";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Query from "../../Icons/Query";
import { SearchService } from "../../../services/searchService";
import { ReverseIndexService } from "../../../services/postService";
import type { ReverseIndex } from "../../../interfaces/postIndex";

export default function SearchBar() {

    const [reverseIndex, setReverseIndex] = useState<ReverseIndex>({});
    const [matches, setMatches] = useState<Array<[string,string]>>();
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
            const debounce = setTimeout(() => {
                let matches = SearchService(query,5,reverseIndex)
                let humanMatches = matches.sort((x,y) => y[1] - x[1]).map(([name, _]): [string,string] => {
                    const humanName = window.localStorage.getItem(name)
                    return [humanName ? humanName : name, name]
                });
                setMatches(humanMatches)
            },1500)
            return () => clearTimeout(debounce)
        }
    },[reverseIndex,query])

    return (
        <>
            <input className='search-bar' placeholder='Search Posts' type="text" onChange={e => {setQuery(e.target.value)}}>
            </input>
            <ul>
                { matches ? matches.map(entry => {
                    return (<li className="match-entry">
                        <Button text={entry[0]} goTo={`/?post=${entry[1]}`} 
                        icon={<Query size='2rem' padding='0rem' stroke='var(--white)'/>}/>
                    </li>)
                }) : <></> }
            </ul>
        </>
    )
}