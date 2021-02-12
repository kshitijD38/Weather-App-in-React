import React from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./style.css";

const CityInput = ({ city, setCity, fetchCityWeather }) => {
  // const [city, setCity] = React.useState("");---->CityWeather needs it

  const [error, setError] = React.useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  console.log("city is ", city);

  const handleClick = () => {
    //
    if (!city) {
      setError("*City field is empty");
    } else {
      setError("");
      //make api call
      fetchCityWeather();
    }
  };

  return (
    <Container className="container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City:</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter City"
            onChange={handleInputChange}
          />
          <p className="text-danger">{error}</p>
        </Form.Group>

        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
