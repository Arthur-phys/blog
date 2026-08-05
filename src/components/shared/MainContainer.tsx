import type { ReactNode } from "react"
import "./MainContainer.css"

export default function MainContainer({children}: {children: ReactNode}) {
    return (<div className="main-content">
        {children}
        <div className='end-bar'></div>
    </div>)
}