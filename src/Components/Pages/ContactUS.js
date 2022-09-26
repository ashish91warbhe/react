import React, { useState } from 'react'
import { InputLabel, Input, FormControl, TextareaAutosize, Button } from '@mui/material';


const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const submitHandler = (e) => {
   e.preventDefault();
  }

  const nameChangeHandler = (e) => {
    let item = e.target.value;

    setName(item);
  }

  const emailChangeHandler = (e) => {
    let item = e.target.value;

    setEmail(item);
  }

  const contactChangeHandler = (e) => {
    let item = e.target.value;

    setContact(item);
  }
  return (
    <div className='container bg-light'>
      <div className='contact_section'>
        <div className='google-map-container d-flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14926.767542122476!2d78.61681834383994!3d20.722732746218597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47ff5919739f3%3A0xc9849d2fb505a7de!2sBarbadi%2C%20Maharashtra%20442003!5e0!3m2!1sen!2sin!4v1663221853453!5m2!1sen!2sin"
            style={{ width: "100%", height: "500px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr style={{ border: "3px solid black" }} />
        <div className='row'>
          <div className="col-md-6" >
            <h3>Get in Touch</h3>
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Name</InputLabel>
              <Input type='text' name='name' value={name} onChange={nameChangeHandler} />
            </FormControl>
            <br /><br />
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Email</InputLabel>
              <Input type='email' name='email' value={email} onChange={emailChangeHandler} />
            </FormControl>
            <br /><br />
            <FormControl style={{ width: "100%" }}>
              <InputLabel>Contact No</InputLabel>
              <Input type='number' name='contact' value={contact} onChange={contactChangeHandler} />
            </FormControl>
            <br /><br />
            <TextareaAutosize
              aria-label="Massage"
              placeholder="Massage"
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <Button className='mb-2' style={{ width: "100%" }} variant="contained" size="small" onSubmit={submitHandler}>
              Submit
            </Button>
          </div>
          <div className="col-md-6" style={{ paddingLeft: "10%" }}>
            <h3>Contact Info</h3>
            <address>Address-: MIDC Road Barbadi WAardha Maharashtra India <br /><br /> Mob.No-: 9970321314 / 8999761332 <br /><br />Email-: warbhepharma@gmail.com <br /><br /> Business Hours-:10.00AM - 5:00PM</address>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUS;