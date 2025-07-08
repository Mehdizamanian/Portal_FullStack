
// add to list obj project by form 

import React, { useState } from 'react';

const LearnForm = () => {

    // Array to store objects will create by obj instance 
    const [dataList, setDataList] = useState([]); 


    // object instructor 
    const [formData, setFormData] = useState({
        name: "",
        lastname: ""
    });
    

    // onchange handler value to recive key and value by input name in obj instructor
    const changeInputHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    // submmiting to send dataform(obj) into list 
    const submitForm = (e) => {
        e.preventDefault();
        
        setDataList([...dataList, formData]);    // Add the new object to the dataList

        // Optionally reset the form data
        setFormData({
            name: "",
            lastname: ""
        });


    };







    return (
        <>
            <form onSubmit={submitForm}>
                Name: <input type="text" name="name" value={formData.name} onChange={changeInputHandler} />
                Last Name: <input type="text" name="lastname" value={formData.lastname} onChange={changeInputHandler} />
                <button type='submit'>Submit</button>
            </form>

            <h2>Submitted Data:</h2>
            <ul>
                {dataList.map((data, index) => (
                    <li key={index}>{data.name} {data.lastname}</li>
                ))}
            </ul>
        </>
    );
}

export default LearnForm;
