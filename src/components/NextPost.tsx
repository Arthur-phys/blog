import './NextPost.css'
import AngleLeft from './AngleLeft'
import AngleRight from './AngleRight'


export default function NextPost() {
    return (
        <>
            <div className='post-navigator'>
                <div className="prev-post">
                    <AngleLeft stroke="var(--white)" size='4rem' padding='0.1rem'/>
                    <span>placeholder 1</span>
                </div>
                <div className='next-post'>
                    <AngleRight stroke='white' size='4rem' padding='0.1rem'/>
                    <span>placeholder 2</span>
                    </div>
            </div>
        </>
    )
}