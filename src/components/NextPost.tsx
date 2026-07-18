import './NextPost.css'
import AngleLeft from './AngleLeft'
import AngleRight from './AngleRight'
import { useEffect, useState } from 'react'
import { GetLinkedPosts } from '../services/LinkedPostsService'
import type { LinkedPosts } from '../interfaces/post'
import { useSearchParams } from 'react-router'


export default function NextPost({ postSlug }: {postSlug: string | undefined}) {

    const [linkedPosts, setLinkedPosts]= useState<LinkedPosts>();
    const [_, setSearchParams] = useSearchParams();


    useEffect(() => {
        async function getLinkedPosts() {
            if (postSlug != undefined) {
                const retrievedPosts = await GetLinkedPosts(postSlug)
                setLinkedPosts(retrievedPosts)
            }
        }
        getLinkedPosts()
    },[postSlug])

    return (
        <>
            <div className='post-navigator'>
                <div className="prev-post"
                onClick={(_) => {
                        if (linkedPosts) {
                            const newParams = new URLSearchParams();
                            newParams.set("post", linkedPosts.previous);
                            setSearchParams(newParams);
                        }
                    }}
                >
                    <AngleLeft stroke="var(--white)" size='4rem' padding='0.1rem'/>
                    <span>{linkedPosts?.previous}</span>
                </div>
                <div className='next-post'
                    onClick={(_) => {
                        if (linkedPosts) {
                            const newParams = new URLSearchParams();
                            newParams.set("post", linkedPosts.next);
                            setSearchParams(newParams);
                        }
                    }}
                >
                    <AngleRight stroke='var(--white)' size='4rem' padding='0.1rem'/>
                    <span>{linkedPosts?.next}</span>
                </div>
            </div>
        </>
    )
}