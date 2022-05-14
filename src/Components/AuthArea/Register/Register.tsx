import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import UserModel from "../../../Models/UserModel";
import { registerAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Register.css";

function Register(): JSX.Element {

    const history = useHistory(); //Redirect function
    const { register, handleSubmit } = useForm<UserModel>();

    async function send(user: UserModel) {
        try {
            const response = await axios.post<UserModel>(globals.urls.register, user);
            store.dispatch(registerAction(response.data));
            notify.success("You are been successfully registered!");
            history.push("/home"); //Redirect to home on success
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(send)}>

                <h2>Register</h2>

                <label>First Name: </label><br />
                <input type="text" name="firstName" ref={register} /><br /><br />

                <label>Last Name: </label><br />
                <input type="text" name="lastName" ref={register} /><br /><br />

                <label>UserName: </label><br />
                <input type="text" name="username" ref={register} /><br /><br />

                <label>Password: </label><br />
                <input type="password" name="password" ref={register} /><br /><br />

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
