import {useEffect, useReducer} from "react";
import "./Input.css";
import {validate} from "../../util/validators";

const inputReducer = (state: any, action: any) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.payload,
                isValid: validate(action.payload, action.validators)
            };
        case "TOUCH":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}

const Input = (props: any) => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: props.initialValue || "", isValid: props.initialValid || false, isTouched: false});

    const changeHandler = (e: any) => {
        dispatch({type: "CHANGE", payload: e.target.value, validators: props.validators})
    }

    const touchHandler = () => {
        dispatch({type: "TOUCH"})
    }

    const element = props.element === "input" ? (
        <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler}
               onBlur={touchHandler}
               value={inputState.value}/>
    ) : (
        <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} onBlur={touchHandler}
                  value={inputState.value}/>);

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
    onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && "form-control--invalid"}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
};

export default Input;
