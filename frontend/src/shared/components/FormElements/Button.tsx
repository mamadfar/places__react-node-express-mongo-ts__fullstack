import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import "./Button.css";

interface IButtonProps {
    href: string,
    size: string,
    inverse: boolean,
    danger: boolean,
    to: string,
    type: "submit" | "reset" | "button",
    onClick: () => void,
    disabled: boolean,
    children: ReactNode
}

const Button: FC<Partial<IButtonProps>> = ({href, size, inverse, danger, to, type, onClick, disabled, children}) => {
    if (href) {
        return (
            <a href={href}
               className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}>{children}</a>
        )
    }
    if (to) {
        return (
            <Link to={to}
                  className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}>{children}</Link>
        )
    }
    return (
        <button type={type} onClick={onClick} disabled={disabled}
                className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}>{children}</button>
    )
}

export default Button;
