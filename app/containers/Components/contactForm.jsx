import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="email" className="primary-text">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Input E-mail" />
      </FormGroup>
      <FormGroup>
        <Label for="password" className="primary-text">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Input password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" className="primary-text">Message Area</Label>
        <Input type="textarea" height="200" name="text" id="exampleText" />
      </FormGroup>
      <div style={{width: "100%"}}>
        <Button className="cleanButton primary mt-5" style={{alignSelf: "end", float: "right"}}>Submit</Button>
      </div>
    </Form>
  );
}

export default ContactForm;
