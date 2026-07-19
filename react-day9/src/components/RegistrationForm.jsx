import React, { useState } from 'react'

function RegistrationForm () {
    const [inputData,setInputData] = useState({
        name :"",
        email :"",
        password :""
    });

    function handleChange(e){
        setInputData({
            ...inputData,[e.target.name]:e.target.value
        })
        
    }

    function handleSubmit(e){
        e.preventDefault();
        
        if(!inputData.name.trim()){
            alert("Name Required !");
        }
        else if(!inputData.email.includes("@")){
            alert("Invalid Email");
        }
        else if(inputData.password.length<6){
            alert("Minimum 6 Characters");
        }
        else {console.log("Submitted");}
    }

  return (
    <>
    <div className='Header'><h1>Registration Form</h1></div><br/><br/>
    <form className='Form' onSubmit={handleSubmit} >
        <input type='text' name='name' 
               placeholder='Enter Your Name' 
               value={inputData.name}
               onChange={handleChange}></input><br/><br/>
        <input type='email' name='email' 
               placeholder='Enter Your E-mail' 
               value={inputData.email}
               onChange={handleChange}></input><br/><br/>
        <input type='password' name='password' 
               placeholder='Enter Your password' 
               value={inputData.password}
               onChange={handleChange}></input><br/><br/>
        <button type="submit">Register</button>
    </form>
    </>
  )
}

export default RegistrationForm
