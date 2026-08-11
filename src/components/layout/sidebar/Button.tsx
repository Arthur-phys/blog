import "./Button.css";
import { useNavigate } from "react-router";
import { randomColorPick } from "../../../utils/utils";
import type { ReactNode } from "react";

export default function Button({text, icon, goTo}: {text: string, icon: ReactNode, goTo: string}) {
    const navigate = useNavigate();

    return (<button
            className={"simple-button" + ` hover-${randomColorPick()}`}
            onClick={() => {navigate(goTo)}}
        >
            {icon}
            <span className="button-text">{text}</span>
        </button>)
}