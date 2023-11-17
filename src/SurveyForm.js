import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SurveyForm = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="age">
        <Form.Label column sm="2">
          Age
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="Age" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="gender">
        <Form.Label column sm="2">
          Gender
        </Form.Label>
        <Col sm="1">
          <Form.Check
            type="radio"
            label="Male"
            name="male-female"
            id="gender"
          />
          <Form.Check
            type="radio"
            label="Female"
            name="male-female"
            id="gender"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="hobby">
        <Form.Label column sm="2">
          Hobby
        </Form.Label>
        <Col sm="10">
          <Form.Select>
            <option>Choose a hobby</option>
            <option>Hobby 1</option>
            <option>Hobby 2</option>
            <option>Hobby 3</option>
            <option>Hobby 4</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="socialMedia">
        <Form.Label column sm="2">
          Social Media
        </Form.Label>
        <Col sm="1">
          <Form.Check
            type="checkbox"
            label="Facebook"
            name="social-media"
            id="socialMedia"
          />
          <Form.Check
            type="checkbox"
            label="Instagram"
            name="social-media"
            id="socialMedia"
          />
          <Form.Check
            type="checkbox"
            label="Twitter"
            name="social-media"
            id="socialMedia"
          />
          <Form.Check
            type="checkbox"
            label="LinkedIn"
            name="social-media"
            id="socialMedia"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="comment">
        <Form.Label column sm="2">
          Comment
        </Form.Label>
        <Col sm="10">
          <Form.Control as="textarea" rows={3} placeholder="Leave a comment" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SurveyForm;
