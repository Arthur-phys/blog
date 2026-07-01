import './Post.css'
import type { PostObject } from '../interfaces/post'
import { useSearchParams } from 'react-router'
import { useEffect, useState } from 'react';
import { PostService } from '../services/postService';

export default function Post() {

    const [searchParams] = useSearchParams();
    let [content, setContent] = useState<PostObject>();

    useEffect(() => {
        let postToRetrieve: string;
        const postParam = searchParams.get("post");
        if (postParam == null || postParam == "") {
            postToRetrieve = "welcome";
        } else {
            postToRetrieve = postParam
        }

        const getContent = async () => {
            const postContent = PostService(postToRetrieve);
            const data = await postContent;
            setContent(data);
        }
        getContent();
    },[searchParams]);

    return (
        <>
            <div className='post-content'>
                <h1>{content?.post.title}</h1>
                {
                    content?.post.sections.map(s => (
                        <div key={s.title}>
                            <h2>{s.title}</h2>
                            <p>{s.text}</p>
                            {s.image ? <img src={s.image}/> : <></>}
                        </div>
                    ))
                }
            </div>
        </>
    )
}