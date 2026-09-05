import "./SearchBar.css";
import { useEffect, useState } from "react";
import Button from "./Button";
import Query from "../../Icons/Query";
import { SearchService } from "../../../services/searchService";
import { ReverseIndexService } from "../../../services/postService";
import type { ReverseIndex } from "../../../interfaces/postIndex";

export default function SearchBar() {

    const [reverseIndex, setReverseIndex] = useState<ReverseIndex>({});
    const [matches, setMatches] = useState<Array<[string,string]>>();
    const [loader, setLoader] = useState<boolean>(false);
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
            setLoader(true)
            const debounce = setTimeout(() => {
                let matches = SearchService(query,5,reverseIndex)
                let humanMatches = matches.sort((x,y) => y[1] - x[1]).map(([name, _]): [string,string] => {
                    const humanName = window.localStorage.getItem(name)
                    return [humanName ? humanName : name, name]
                });
                setMatches(humanMatches)
                setLoader(false)
            },1000)
            return () => clearTimeout(debounce)
        } else if (query == "") {
            setLoader(false);
            setMatches([])
        }
    },[reverseIndex,query])

    return (
        <>
            <div className="search-joiner">
                <input placeholder='Search Posts' type="text" onChange={e => {setQuery(e.target.value)}}>
                </input>
                <div className="loader-container">
                    {
                        loader ? 
                        <span className="loader"></span>
                        : 
                        <></>
                    }
                </div>
            </div>
            <ul>
                { matches ? matches.map((entry,i) => {
                    return (<li key={i} className="match-entry">
                        <Button text={entry[0]} goTo={`/?post=${entry[1]}`} 
                        icon={<Query size='2rem' padding='0rem' stroke='var(--white)'/>}/>
                    </li>)
                }) : <></> }
            </ul>
        </>
    )
}