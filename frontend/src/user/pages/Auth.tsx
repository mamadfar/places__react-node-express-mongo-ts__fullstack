import {FormEvent, useContext, useState} from "react";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";
import {AuthContext} from "../../shared/context/auth-context";
import {useNavigate} from "react-router-dom";

const Auth = () => {

    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        },
    }, false);

    const authSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(formState.inputs)
        login();
        navigate("/", {replace: true})
    };

    const switchModeHandler = () => {
        if (!isLoginMode) {
            // setFormData({
            //     ...formState.inputs,
            // }, formState.inputs.email.isValid && formState.inputs.password.isValid);
            delete formState.inputs?.name
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: "",
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr/>
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input element="input" type="text" label="Your Name" validators={[VALIDATOR_REQUIRE()]}
                           errorText="Please enter a Name." id="name" onInput={inputHandler}/>
                )}
                <Input element="input" type="email" label="E-Mail" validators={[VALIDATOR_EMAIL()]}
                       errorText="Please enter a valid Email address." id="email" onInput={inputHandler}/>
                <Input element="input" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(5)]}
                       errorText="Please enter a valid Password." id="password" onInput={inputHandler}/>
                <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
        </Card>
    )
};

export default Auth;
