import './NextPost.css'
import AngleLeft from './AngleLeft'
import AngleRight from './AngleRight'
import { useSearchParams } from 'react-router'
import type { PostOverview } from '../interfaces/post';


export default function NextPost({ prevPost, nextPost }: {prevPost?: PostOverview, nextPost?: PostOverview}) {

    const [_, setSearchParams] = useSearchParams();

    return (
        <>
            <div className='post-navigator'>
                {
                    prevPost ? 
                    <div className="prev-post"
                        onClick={(_) => {
                                const newParams = new URLSearchParams();
                                newParams.set("post", prevPost.slug);
                                setSearchParams(newParams);
                            }}
                        >
                            <AngleLeft stroke="var(--white)" size='4rem' padding='0.1rem'/>
                            <p>{prevPost.title}</p>
                        </div> : 
                        <div></div>
                }
                {
                    nextPost ? 
                    <div className='next-post'
                        onClick={(_) => {
                            const newParams = new URLSearchParams();
                            newParams.set("post", nextPost.slug);
                            setSearchParams(newParams);
                        }}
                    >
                        <AngleRight stroke='var(--white)' size='4rem' padding='0.1rem'/>
                        <p>{nextPost.title}</p>
                    </div> :
                    <div></div>
                }
            </div>
        </>
    )
}