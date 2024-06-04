import { useState } from "react";
import axios from 'axios';

function RegisterForm() {

    const [formData, setFormData] = useState({
        email: "", 
        password: "",
        name: "",
        phone_no: "",
        date_of_birth: "",
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
                'http://162.240.148.130:8030/auth/clientregister',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
                console.log('Success:', response.data);
            
        } catch (error) {
                console.error('Error:', error.response.data || error.message);
        };
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
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
            
            <div className="form-group">
                <label>Name:</label>
                <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Phone Number:</label>
                <input
                type="tel"
                name="phone_no"
                id="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                pattern="[0-9]{10}"
                />
            </div>
            <div className="form-group">
                <label>Date of Birth:</label>
                <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                />
      </div>
      <button type="submit">Register</button>
    </form>
    );
}

export default RegisterForm;