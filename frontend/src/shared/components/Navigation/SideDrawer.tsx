import {ReactNode} from "react";

import "./SideDrawer.css";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";
const SideDrawer = (props: any) => {
        const content: ReactNode = <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit><aside className="side-drawer" onClick={props.onClick}>{props.children}</aside></CSSTransition>
    const drawer = document.getElementById("drawer-hook") as HTMLElement;

    return createPortal(content, drawer)
}

export default SideDrawer;
