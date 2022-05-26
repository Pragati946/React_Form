import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import styles from "./form.module.css";
export const Form = () => {
    const [form,setForm] =useState({
        username:"",
        email:"",
        password:"",
        age:0,
        isIndian:false,
    });
    const ref =useRef();
    const passRef =useRef();
    const handelOnChange=(e)=>{
        let {type,name,value,checked,files}=e.target;
        console.log(e);
        console.log(type,name,value,checked,files);
        if(type=="checkbox"){
            setForm({
                ...form,
                [name]:checked,
            });

        }
        else if(type=="file"){
            setForm({
                ...form,
                [name]:files,
            }) 
        }
        else{
            setForm({
                ...form,
                [name]:value,
            }); 
        }
      
    };
  const handleOnSubmit=(e)=>{
      e.preventDefault();
    //   console.log(form);
    if(!form.username){
     ref.current.focus();
     console.log(ref.current);
ref.current.addClassList(styles.redBorder);
}
  else if(!form.password)
  passRef.current.focus();
}


  return (
    <div>
        Form
        <form onSubmit={handleOnSubmit}>
        <div>
           
                <label>Name :</label>
                <input type="text" 
                name="username" 
                placeholder="Enter Name..."
                value={form.username}
                onChange={handelOnChange}
/>
        </div>
        <div>
            <label>Email :</label>
            <input type="email"
             name="email" 
            placeholder="Enter E-mail..."
            value={form.email}
            onChange={handelOnChange}
            />
        </div>
        <div>
            <label>Password :</label>
            <input type="password"  
            ref={passRef}
            name="password"
             placeholder="Enter Password..."
            value={form.password}
            onChange={handelOnChange}
            />
        </div>
        <div>
            <label>Age :</label>
            <input type="number"
             name="age"
             placeholder="Enter Age..."
            value={form.age}
            onChange={handelOnChange}
            />
        </div>
        <div>
            <label>City :</label>
            <select type="number"
             name="city"onChange={handelOnChange}>
            <option value="Delhi">Delhi</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Bangaluru">Bangaluru</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Mumbai">Mumbai</option>
            </select>
        </div>
       <div>
       <div>
        
        <input type="checkbox"
         name="isIndian"
         checked={form.isIndian}
        onChange={handelOnChange}
        />
        <label>: Is Indian </label>
    </div>
       </div>
    <div>
    <div>
       
        <input type="radio"
         name="gender"
        value={"Male"}
        onChange={handelOnChange}
        />
         <label>Male </label>
    </div>
    <div>
    
        <input type="radio"
         name="gender"
        value={"Female"}
        onChange={handelOnChange}
        />
        <label>Female</label>
    </div>
    </div>
    <div>
    <label>User Resume :</label>
        <input type="file"
        accept='image/png, image/jpeg, application/pdf'
         name="resume"
         files={form.resume}
        onChange={handelOnChange}
        />
       
    </div>
    <button type="submit">Submit</button>
        </form>
    </div>
  );
};

