import {useCallback, useReducer} from "react";

const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue;
                };
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            };
        case "SET_DATA":
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default:
            return state;
    }
}

export const useForm = (initialInputs: any, initialFormValidity: boolean) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    const inputHandler = useCallback((id: any, value: any, isValid: boolean) => {
        dispatch({type: "INPUT_CHANGE", value, isValid, inputId: id})
    }, [dispatch]);

    const setFormData = useCallback((inputData: any, formValidity: boolean) => {
        dispatch({
            type: "SET_DATA", inputs: inputData, formIsValid: formValidity
        });
    }, [])

    return [formState, inputHandler, setFormData]
}
