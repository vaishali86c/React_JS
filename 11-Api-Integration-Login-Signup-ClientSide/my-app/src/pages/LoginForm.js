import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post(
            'http://162.240.148.130:8030/auth/clientlogin',
            formData,
            {
              headers: { 'Content-Type': 'application/json' },
            }
          );
          console.log('Success:', response.data);
        } catch (error) {
          console.error('Error:', error.response.data || error.message);
        }
    };

    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <div className="form-group">
                <label>Email:</label>
                <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
            <br />
            <button onClick={() => navigate("/signup")}>Register Here</button>
        </form>
    );
}

export default LoginForm;
