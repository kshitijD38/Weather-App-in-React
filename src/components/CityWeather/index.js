import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const CityWeather = ({ city, description, temperature, speed, all, visibility, error}) => {

    return (
        <Container className="container">
            <div>
                {/* {JSON.stringify(props.cityWeather.main)} */}
                {/* <h3>{city && <p>In {city}</p>}</h3> */}
                {error && <p>{error}</p>}
                <h1>{temperature && <p>It's <strong className="temp">{temperature}  °C</strong></p>}</h1>
                <h3>{description && <p>with Conditions: <strong className="description">{description}</strong> and <strong className="all">{all}</strong> clouds</p>}</h3>
                <h3>{visibility && <p>visibility: <strong className="visibility">{visibility}</strong></p>}</h3>
                <h4>{speed && <p>wind speed: <strong className="speed">{speed}</strong> m/s</p>}</h4>
            </div>
        </Container>    
    );

};

export default CityWeather;


