import './Post.css'

interface Section {
    title: string,
    text: string,
    image: string,
}

interface PostDetails {
    title: string,
    sections: Section[],
}


export default function Post(content: PostDetails) {
    return (
        <>
            <div>
                <h1>{content.title}</h1>
                {
                    content.sections.map(s => (
                        <div>
                            <h2>{s.title}</h2>
                            <p>{s.text}</p>
                            <img src={s.image}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}