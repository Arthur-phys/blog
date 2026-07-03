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
                <div className='post-title'>
                    <div className='title-marker'></div>
                    <h1>{content?.post.title}</h1>
                </div>
                <div className='keywords'>
                    <span className='keyword-title'>Keywords:</span>
                    {content?.post.keywords.map(k => {
                        return <span className='keyword' style={{
                            backgroundColor: `var(--${selectRandomColor()})`
                        }}>{k}</span>
                    })}
                </div>
                {
                    content?.post.sections.map(s => (
                        <div key={s.title}>
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

const selectRandomColor = (): string => {
    const colors = ["red-shade-light", "orange-shade-light", "yellow-shade-light", "green-shade-light", "blue-shade-light", "deep-blue-shade-light", "purple-shade-light", "pink-shade-light"];
    return colors[Math.floor(Math.random()*colors.length)]
}

