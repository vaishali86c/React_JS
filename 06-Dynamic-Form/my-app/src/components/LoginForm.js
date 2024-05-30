import { Button, Input } from "@chakra-ui/react";
import "../styles/LoginForm.css";
import { useState } from "react";

const LoginForm = () => {

  const [formValues, setFormValues] = useState([
    { skill1: "", skill2: "", skill3: "" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  

  let addSkill = () => {
    setFormValues([...formValues, { skill1: "", skill2: "", skill3: "" }]);
  };

  function handleChange(index, e) {
        let newFormValues = [...formValues];
        newFormValues[index][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    function removeSkill(index) {
        setFormValues(formValues.filter((_, i) => i !== index));
    };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        name,
        email,
        skills: formValues,
    };
    console.log(JSON.stringify(formData)); 
  };
 
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <h1>Form</h1> */}
      <div className="section-fields">
        <Input 
            id="Name" value={name} 
            className="Name" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)} 
        />
        <Input 
            id="Email" 
            value={email} 
            className="Email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} />
        
        <label>Skill :</label>
        {formValues.map((element, index) => (
          <div key={index}>
            <Input
              type="text"
              name="skill1"
              value={element.skill1}
              placeholder="Skill 1"
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              name="skill2"
              value={element.skill2}
              placeholder="Skill 2"
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              name="skill3"
              value={element.skill3}
              placeholder="Skill 3"
              onChange={(e) => handleChange(index, e)}
            />

            <Button onClick={() => removeSkill(index)} className="remove-button" type="button">
              Remove Skill
            </Button>
          </div>
        ))}

        <div className="add-removeBtn">
          <Button onClick={addSkill} className="add-button" type="button">
            Add Skills
          </Button>
        </div>
      </div>

      <div className="submit-button">
        <Button className="sub-button" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
