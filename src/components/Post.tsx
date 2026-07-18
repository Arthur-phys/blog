import './Post.css'
import type { PostObject } from '../interfaces/post'
import { useSearchParams } from 'react-router'
import { useEffect, useState } from 'react';
import { PostService } from '../services/postService';
import { randomColorPick } from '../utils/utils';
import NextPost from './NextPost';

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
            <div className='post-container'>
                <div className='post-content'>
                    <div className='post-title'>
                        <div className='title-marker'></div>
                        <h1>{content?.post.title}</h1>
                    </div>
                    <div className='keywords'>
                        <span className='keyword-title'>Keywords:</span>
                        {content?.post.keywords.map((k, i) => {
                            return (
                                <span
                                    key={i}
                                    className='keyword'
                                    style={{
                                        backgroundColor: `var(--${randomColorPick()})`
                                    }}
                                >
                                    {k}
                                </span>
                            )
                        })}
                    </div>
                    {
                        content?.post.sections.map((s, i) => (
                            <div key={`${s.title}+${i}`}>
                                <h2>{s.title}</h2>
                                <p>{s.text}</p>
                                {s.image ?
                                <div className='image'>
                                    <img src={s.image.path} alt={s.image.text}
                                        style={setImageSize(s.image.scale)}
                                    />
                                    <p>{s.image.text}</p>
                                </div>
                                    : 
                                    <></>
                                }
                            </div>
                        ))
                        
                    }
                    <div className='end-bar'></div>
                </div>
                <NextPost postSlug={content?.slug}/>
            </div>
        </>
    )
}

const setImageSize = (scale: string | null) => {
    const scaleMultiplier = scale ? scale : "100%"
    return {
        maxWidth: `${scaleMultiplier}`,
        height: "auto",
    }
}

