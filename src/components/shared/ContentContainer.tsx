import "./ContentContainer.css"
import type { ReactNode } from "react";

export default function ContentContainer({children}: {children: ReactNode}) {
    return (<>
        <div className="content">
            <div className="container">
                {children}
            </div>
        </div>
    </>)
}