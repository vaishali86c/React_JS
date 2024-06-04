import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react"; 
import "../styles/LoginForm.css";


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
    <Box as="form" onSubmit={handleSubmit} className="login-form" w={600} h={500}> 
      <h1>Login Form</h1>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email:</FormLabel>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password:</FormLabel>
        <Input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" h={10}>
        Login
      </Button>
      <br />
      <Text>
        Don't have an account?{" "}
        <Button colorScheme="teal" variant="outline" onClick={() => navigate("/signup")}>
          Register Here
        </Button>
      </Text>
    </Box>
  );
}

export default LoginForm;
