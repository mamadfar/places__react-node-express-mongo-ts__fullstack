import "./Card.css"

const Card = (props: any) => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card;
