import './Post.css'
import type { PostDetails } from '../interfaces/post'



export default function Post(content: PostDetails) {
    return (
        <>
            <div className='post-content'>
                <h1>{content.title}</h1>
                {
                    content.sections.map(s => (
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