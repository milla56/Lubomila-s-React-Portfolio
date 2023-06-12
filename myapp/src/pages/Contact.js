import React from 'react';
import { Container,FormControl,Label } from "react-bootstrap";


const Contact = () => {
  return (
    <div className="Contact">
<Container> 
<h2 className="mb-3">Send A Message</h2>
    <form>
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
       
      </button>
    </form>
</Container>
    </div>
  );
}

export default Contact;
