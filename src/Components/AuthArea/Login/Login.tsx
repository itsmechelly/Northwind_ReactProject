import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { loginAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./Login.css";

function Login(): JSX.Element {

    const history = useHistory(); // Redirect function
    const { register, handleSubmit } = useForm<CredentialsModel>();


    async function send(credentials: CredentialsModel) {
        try {
            const response = await axios.post<UserModel>(globals.urls.login, credentials);
            store.dispatch(loginAction(response.data));
            notify.success("You have been successfully logged in!");
            history.push("/home"); // Redirect to home on success
        }
        catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Login Box">

            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Username: </label> <br />
                <input type="text" name="username" ref={register} /> <br /> <br />

                <label>Password: </label> <br />
                <input type="password" name="password" ref={register} /> <br /> <br />

                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;
