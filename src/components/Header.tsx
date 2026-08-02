import "./Header.css";

export default function Header() {

    function scrollBottom() {
        window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})
    }

    return (
        <div className="simple-header" onClick={scrollBottom}>
            <span className="letter">A</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter">o&nbsp;</span>
            <span className="letter">M</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">í</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">z</span>
        </div>
    )
}