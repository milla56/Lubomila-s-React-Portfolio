// import React from 'react';
import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

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
<Container> 
  <Row> 
  <Col md={6}> 
  <h1 className="contact-title">Let's Get in Touch</h1>
  <h2 className="contact-info"> Thank you for your interest !
  Feel free to reach out to me using the form below, I'd love to hear from you! If you have a 
    specific question or comment, please feel free to email me directly at: </h2>
    <h3 className="email-info">lubomila14@gmail.com</h3>
    </Col> 



  <Col md={6}> 
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
</Col>
</Row>
</Container>
</div>
</div>
  );
}

export default Contact;
