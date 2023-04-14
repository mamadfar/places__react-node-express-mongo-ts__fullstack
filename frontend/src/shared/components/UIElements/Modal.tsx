import "./Modal.css";
import {createPortal} from "react-dom";
import {CSSTransition} from "react-transition-group";
import Backdrop from "./Backdrop";

const ModalOverlay = (props: any) => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (e: any) => e.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    const modal = document.getElementById("modal-hook") as HTMLElement;
    return createPortal(content, modal)
}

const Modal = (props: any) => {
    return (
        <>
            {props.show && <Backdrop onClick={props.onCancel}/>}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
                <ModalOverlay {...props}/>
            </CSSTransition>
        </>
    )
}

export default Modal;
