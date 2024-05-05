import { useState } from "react";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import "./Login.css";
import { useLogin } from "../shared/hooks/useLogin";

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
      <form onSubmit={handleSubmit} action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            id="inputEmail"
            placeholder="Username"
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
            id="inputPassword"
            placeholder="Password"
            required
          />
          <FaUnlockAlt className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Rember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            You do not have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
