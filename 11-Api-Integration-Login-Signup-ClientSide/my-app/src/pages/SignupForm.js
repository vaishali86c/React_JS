import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react"; 
import "../styles/SignupForm.css";

function SignupForm() {
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
     
    }
  };

  const navigate = useNavigate();

  return (
    <Box as="form" onSubmit={handleSubmit} className="signup-form" w={600} h={700}> 
      <h1>Registration Form</h1>
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
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone_no">Phone Number:</FormLabel>
        <Input
          type="tel"
          name="phone_no"
          id="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          pattern="[0-9]{10}" 
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="date_of_birth">Date of Birth:</FormLabel>
        <Input
          type="date"
          name="date_of_birth"
          id="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" h={10}>
        Sign Up
      </Button>
      <br />
      <Text>
        Already have an account?{" "}
        <Button colorScheme="blue" variant="outline" onClick={() => navigate("/login")}>
          Login Here
        </Button>
      </Text>
    </Box>
  );
}

export default SignupForm;
