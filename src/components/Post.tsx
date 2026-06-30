import './Post.css'
import type { PostObject } from '../interfaces/post'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { PostService } from '../services/postService';

// "Upss!! I did not find that ( ˶°ㅁ°) !!"

export default function Post(optionalPostName: {post?: string}) {

    const params = useParams<{postName: string}>();
    let [content, setContent] = useState<PostObject>();

    useEffect(() => {
        const postToRetrieve = optionalPostName.post ? optionalPostName.post : params.postName;
        const getContent = async () => {
            const postContent = PostService(postToRetrieve? postToRetrieve : "");
            const data = await postContent;
            setContent(data);
        }
        getContent();
    },[]);

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