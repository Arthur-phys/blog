import "./Footer.css"
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import { useEffect, useState } from "react";

export default function Footer({activateWave}: {activateWave: boolean}) {

    useEffect(() => {
        setWaveAnim(true)
        setTimeout(() => {setWaveAnim(false)}, 800)
    },[activateWave])

    const [waveAnim,setWaveAnim] = useState<boolean>(false)

    return (<>
        <div className="footer">
            <div className="icon-wrapper">
                <div className={`wave ${waveAnim ? "wave-animation": ""}`}></div>
                <Github link="https://github.com/Arthur-phys" size="3rem" stroke="var(--white)" padding="0"/>
            </div>
            <div className="icon-wrapper">
                <div className={`wave ${waveAnim ? "wave-animation": ""}`}></div>
                <Linkedin link="https://www.linkedin.com/in/jorge-arturo-martínez-sánchez-437b21283" size="3rem" stroke="var(--white)" padding="0"/>
            </div>
        </div>
    </>)
}