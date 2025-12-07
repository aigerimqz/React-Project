import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { loginUser } from "../../services/authService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, error, user} = useSelector(state => state.auth);



    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(login({email, password}));

        if(login.fulfilled.match(result)){
            navigate("/profile");
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Login</h1>

            <form className="login__block" onSubmit={handleLogin}>
                {error && <p className="error">{error}</p>}

                <input 
                    className="input input__email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input 
                    className="input input__password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="login__btn" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </>
    );
}
