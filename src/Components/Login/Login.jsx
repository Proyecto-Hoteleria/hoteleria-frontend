import { useState } from "react";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import "./Login.css";
import { useLogin } from "../../Shared/Hooks/useLogin";

export const Login = () => {
  const { isLoading, login } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <FaUnlockAlt className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" disabled={isLoading}>Login</button>
        <div className="register-link">
          <p>
            You do not have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
