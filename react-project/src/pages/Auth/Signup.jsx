import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Login.css"; 
import { registerUser } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/auth/authSlice";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
   

  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading, error} = useSelector(state => state.auth);
    const [localerror, setError] = useState("");


    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email address");
            return false;
        }

        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be 8+ chars, include 1 number and 1 special character");
            return false;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return false;
        }

        return true;
    };

    const handleSignup = async () => {
        if (!validate()) return;

        const result = await dispatch(signup({email, password}));
        if(signup.fulfilled.match(result)){
            navigate("/profile");
        }
    };

    return (
        <div className="login__block">
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

                <div className="password__wrapper">
                    <input 
                        className="input input__password"
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <img className="toggle__span" src={showPassword ? "https://img.icons8.com/fluency-systems-filled/48/hide.png" 
                        : "https://img.icons8.com/fluency-systems-filled/48/visible.png"}
                        alt="toggle password"
                        onClick={() => setShowPassword(!showPassword)} 
                     />
                    
                </div>

                <div className="password__wrapper">
                    <input 
                        className="input input__password"
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <img className="toggle__span" src={showConfirmPassword ? "https://img.icons8.com/fluency-systems-filled/48/hide.png" 
                        : "https://img.icons8.com/fluency-systems-filled/48/visible.png"}
                        alt="toggle password"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                     />
                </div>

                {error && <p className="error">{error}</p>}
                {localerror && <p>{localerror}</p>}

                <button
                    type="button"
                    className="login__btn"
                    disabled={loading}
                    onClick={handleSignup}
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}
