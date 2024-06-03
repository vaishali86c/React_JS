import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(null);

    const updateFormData = (data) => {
        setFormData(data);
        localStorage.setItem("formData", JSON.stringify(data));
    };

    return (
        <FormContext.Provider value={{ formData, setFormData: updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
