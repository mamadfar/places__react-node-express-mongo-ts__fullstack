import {createPortal} from "react-dom";
import "./Backdrop.css";

const Backdrop = (props: any) => {
    const backdrop = document.getElementById("backdrop-hook") as HTMLElement
    return createPortal(
        <div className="backdrop" onClick={props.onClick}/>,
        backdrop
    )
}

export default Backdrop;
