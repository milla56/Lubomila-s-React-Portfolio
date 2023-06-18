import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import "../styles/contact.css"


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

  // const [formStatus, setFormStatus] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Form submitted!')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
   
  }

  
  return (
    <div className="Contact">
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
