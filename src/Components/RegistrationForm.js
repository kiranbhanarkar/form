import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './index.css';


function RegistrationForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    let style = {
        inputStyle: { fontSize: '1em',color:'white', backgroundColor: 'black', border: '10px solid black', borderBottom: '1.5px solid white'},
        buttonStyle: {
            fontSize: "1em",
            padding: "10px",
            borderRadius: "0px",
            width: '10em',
            align: 'left',
            backgroundColor: 'white',
            color: 'black',
            marginLeft:'18%',
            
        }
    }
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group className='signup' as={Col} md="8"><Form.Label>SignUp Form</Form.Label></Form.Group>
        
          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control style={style.inputStyle}
              required
              type="text"
              placeholder="Full Name"
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Please choose a Full Name.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustomUsername">
            <Form.Label></Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
              <Form.Control style={style.inputStyle}
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control style={style.inputStyle}
              required
              type="password"
              placeholder="Password"
              
            />
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Please enter your Password.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label></Form.Label>
            <Form.Control style={style.inputStyle}
              required
              type="password"
              placeholder="Confirm Password"
            //   defaultValue="Mark"
            />
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Password Did't Match, Enter again!
              </Form.Control.Feedback>
          </Form.Group>
       
        
        {/* <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group> */}

        <div className='button' md="4">
        <Button type="submit" style={style.buttonStyle}>Submit form</Button>
        </div>
      </Form>
    );
}

export default RegistrationForm