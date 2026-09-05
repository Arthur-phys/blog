import './Post.css'
import type { PostObject } from '../../interfaces/post'
import { useSearchParams } from 'react-router'
import { useEffect, useState } from 'react';
import { PostService } from '../../services/postService';
import { randomColorPick } from '../../utils/utils';
import NextPost from '../layout/NextPost';
import MainContainer from '../layout/MainContainer';
import PaperPlane from '../Icons/PaperPlane';
import sanitize from 'sanitize-html';

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
                <MainContainer
                    children={
                    <>
                        <div className='post-title'>
                            <div className='title-marker'></div>
                            <h1>{content?.post.title}</h1>
                        </div>
                        <div className='keywords'>
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
                                    {s.title ? 
                                        <h2>{s.title}</h2>
                                    : 
                                    <></>}
                                    {
                                        s.text.map((t,i) => {return (
                                            <p className='post-paragraph' key={`${i}`}
                                                dangerouslySetInnerHTML={{ __html: sanitize(t, {
                                                allowedTags:['b','i','em','strong','a'],
                                                allowedAttributes: {
                                                    'a': ['href']
                                                }
                                            })}}></p>
                                        )})
                                    }
                                    {s.list ? 
                                    
                                    <ul className='simple-list'>
                                    {
                                        s.list.map((l,i) => {
                                            return (
                                                    <li className='list-point' key={i}>
                                                        <div className='icon-container'>
                                                            <PaperPlane size='1rem' padding='0' stroke="var(--white)"/>
                                                        </div>
                                                        {l}
                                                    </li>
                                            )})
                                    }
                                    </ul>
                                    : <></>}
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
                    </>
                    }
                >
                </MainContainer>
                <NextPost nextPost={content?.next} prevPost={content?.previous}/>
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

