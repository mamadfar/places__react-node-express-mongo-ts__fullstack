import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigator = useNavigate();

    return (
        <div style={{height: "100vh", display: "grid", placeContent: "center"}}>
            <h1 style={{margin: 0}}>Not Found</h1>
            <button onClick={() => navigator("/", {replace: true})}>Home</button>
        </div>
    )
}

export default NotFound;
