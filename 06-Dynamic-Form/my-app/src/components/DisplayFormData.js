import { useState, useEffect, useContext} from "react";
import { Button, Input } from "@chakra-ui/react";
import { FormContext } from "../FormContext";

const DisplayFormData = () => {
    // const [formData, setFormData] = useState(null);
    const { formData, setFormData } = useContext(FormContext);
    const [IseditData, setEditData] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    if (!formData) {
        return <div>No data found !</div>;
    }

    const { name, email, skills } = formData;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((...prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = skills.map((skill, i) =>
          i === index ? { ...skill, [name]: value } : skill
        );
        setFormData((prevData) => ({
          ...prevData,
          skills: newSkills,
        }));
    };


    const handleSave = () => {
        localStorage.setItem("formData", JSON.stringify(formData));
        setEditData(false);
    }


    return (
        <div>
            {IseditData ? (
                <div>
                    <form className="form">
                        <div className="section-fields">
                            <Input 
                                id="Name" 
                                className="Name" 
                                placeholder="Name" 
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <Input 
                                id="Email" 
                                className="Email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <label>Skill :</label>
                                {skills.map((skillSet, index) => (
                                    <div key={index}>
                                        <Input
                                        type="text"
                                        name="skill1"
                                        placeholder="Skill 1"
                                        value={skillSet.skill1}
                                        onChange={(e) => handleSkillChange(index, e)}
                                        />
                                        <Input
                                        type="text"
                                        name="skill2"
                                        placeholder="Skill 2"
                                        value={skillSet.skill2}
                                        onChange={(e) => handleSkillChange(index, e)}
                                        />
                                        <Input
                                        type="text"
                                        name="skill3"
                                        placeholder="Skill 3"
                                        value={skillSet.skill3}
                                        onChange={(e) => handleSkillChange(index, e)}
                                        />
                                    </div>
                                ))}
                        </div>
                        <Button onClick={handleSave}>Save</Button>
                    </form>
                </div>
            ) : (
                <div>
            
                    <h1>Submitted Data : </h1>
                    <p>Name : {name} </p>
                    <p>Email : {email} </p>

                    <div>
                        <p>Skills : </p>
                        {skills.map((skillSet, index) => (
                            <div key={index}>
                                <p>Skill - 1 : {skillSet.skill1}</p>
                                <p>Skill - 2 : {skillSet.skill2}</p>
                                <p>Skill - 3 : {skillSet.skill3}</p>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => setEditData(true)}>Edit</Button>
                </div>
            )} 
        </div>
    );
}

export default DisplayFormData;