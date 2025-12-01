import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            setError("");
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>

            <form className="login__block">
                

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
                <input 
                    className="input input__password"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button
                    type="button"
                    className="login__btn"
                    disabled={loading}
                    onClick={handleSignup}
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </>
    );
}
