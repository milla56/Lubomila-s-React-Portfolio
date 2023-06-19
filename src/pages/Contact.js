// import React from 'react';
import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

import "../styles/contact.css"


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

const [formData, setFormData] = useState({name:"",email:"",message:""});
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Form Submitted!')
    // const [ name, email, message] = e.target
    // console.log(name);
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // }
    setFormData({name:"",email:"",message:""});
  }

  const onChange = (e) =>{
const {name,value} = e.target
console.log(name,value)
setFormData({...formData,[name]: value })
  }

  return (
    <div className="Contact">
<div className='backgroundImage'> 
<div className="form-style-8">


  <h2>Contact Me</h2>
  <Form onSubmit={onSubmit}>

    <input type="text" name="name" placeholder="Full Name" value = {formData.name} onChange={onChange}/>
    <input type="email" name="email" placeholder="Email" value = {formData.email}  onChange={onChange}/>
    <textarea placeholder="Message" name="message" value = {formData.message} onChange={onChange}></textarea>
    <button className="btn" type="submit">
      {formStatus}
      </button>
    </Form>
  

</div>
</div>
</div>
  );
}

export default Contact;
