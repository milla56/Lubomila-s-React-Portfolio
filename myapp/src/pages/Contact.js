import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import "../styles/contact.css"


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  
  return (
    <div className="Contact">
{/* <Container className='contactForm'> 
<h2 className="contactmeTitle">Contact Me</h2>
    <Form className="forms" onSubmit={onSubmit}>

      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div>

      <button className="btn btn-primary" type="submit">
      {formStatus}
      </button>
    </Form>
</Container> */}
<div className='backgroundImage'> 
<div className="form-style-8">


  <h2>Contact Me</h2>
  <Form onSubmit={onSubmit}>
    <input type="text" name="field1" placeholder="Full Name" />
    <input type="email" name="field2" placeholder="Email" />
    <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
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
