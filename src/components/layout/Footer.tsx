import "./Footer.css"
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";

export default function Footer() {
    return (<>
        <div className="footer">
            <div className="icon-wrapper">
                <Github link="https://github.com/Arthur-phys" size="3rem" stroke="var(--white)" padding="0"/>
            </div>
            <div className="icon-wrapper">
                <Linkedin link="https://www.linkedin.com/in/jorge-arturo-martínez-sánchez-437b21283" size="3rem" stroke="var(--white)" padding="0"/>
            </div>
        </div>
    </>)
}