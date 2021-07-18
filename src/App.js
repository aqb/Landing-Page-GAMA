import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container, Col, Form, Button } from 'react-bootstrap';

import {React, useState, useEffect} from 'react';
import background from './assets/background.jpeg';
import citiesInMotion from './assets/cities-in-motion.jpg';
import commToSafety from './assets/CommToSafety.jpg';
import uberDiscount from './assets/uberDiscount.png';
import {  FiInstagram, FiGithub, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
// import uberDriver from './assets/uberDriver.png';


function App() {
  const [name, updateName] = useState("")
  const [email, updateEmail] = useState("")

  function storeInfo(){
    let users = JSON.parse(localStorage.getItem('users') || "[]")
    if(name === "" || email === "") {
      return
    }
    if(users.find(user => user.email === email)){
      return
    }
        
    localStorage.setItem('users', JSON.stringify([...users, {name, email}]));
    updateName("")
    updateEmail("")
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>                      
      <Container>
        <Row className="text-white pt-3 pb-3">
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/"><h5>Home</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/safety/"><h5>Safety</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/coronavirus/"><h5>COVID-19 resources</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/about/"><h5>About us</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://help.uber.com/?uclick_id=ca6c1e58-e5f2-45be-8dee-b866947f597e"><h5>Help</h5></a></Col>
        </Row>

        <Row className="pb-5">
          <Col className="body-text">
            <h1>Time limited discount</h1>
            <h3 className="black-text">Claim your free Uber Ride</h3>
            
          </Col>
          <Col>
            <div className="rectangle-forms">
            <h1 className="mt-3">Get Uber voucher</h1>
            <Form className='m-4 d-flex flex-column justify-content-center align-items-center pb-5'>
              <Form.Control type="name" placeholder="Name" value={name} onChange={e => updateName(e.target.value)} className="mt-4 register-input"/>
              <Form.Control type="email" placeholder="E-mail" value={email} onChange={e => updateEmail(e.target.value)} className="mt-4 register-input"/>
              <Button className="mt-4 confirm-button" onClick={e => storeInfo()} >
                Confirm
              </Button>          
            </Form>
          
            </div>
          </Col>
        </Row>

        <Row className="body-section">
          <Col>
            <img className="w-100" src={citiesInMotion}></img>
          </Col>
          <Col className="body-text">
            <h3>Setting 10,000+ cities in motion</h3>
            <h5>The app is available in thousands of cities worldwide, 
                so you can request a ride even when you’re far from home.</h5>
          </Col>
        </Row>

        <Row className="body-section">          
          <Col className="body-text" >
            <h3>Our commitment to your safety</h3>
            <h5>With every safety feature and every standard in our 
              Community Guidelines, we're committed to helping to create 
              a safe environment for our users.</h5>
          </Col>
          <Col>
            <img className="w-100" src={commToSafety}></img>
          </Col>
        </Row>

        <Row>
          <div className="">

          </div>
        </Row>
      </Container>
      
      <div className="rectangle-end">
        <Container className="text-white">

          <Row className="mt-5">
            <h4>Uber</h4>      
          </Row>

          <Row className="mt-4">
            <a style={{color:"#ffffff"}} href="https://help.uber.com/?uclick_id=ca6c1e58-e5f2-45be-8dee-b866947f597e">
              <h5>Visit Help Center</h5>    
            </a>
          </Row>
          
          <Row className="mt-4">            
            <div className="w-50">
              <h6 className="text-left text-justify">                            
                Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda | Av. Presidente
                Juscelino Kubitschek, nº 1909, Torre Sul, 15º andar, 
                São Paulo/SP - CEP: 04543-907 | CNPJ: 17.895.646/0001-87
              </h6>
            </div>
            
            <Col>
            </Col>
          </Row>

          <Row className="mt-4 text-left">
            <div>
              <a style={{color:"#ffffff"}} href="https://github.com/aqb">
                <FiGithub className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.linkedin.com/in/alexandre-burle-b0a734197/">
                <FiLinkedin className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.instagram.com/alexandreburle/">
                <FiInstagram className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://twitter.com/uber_brasil">
                <FiTwitter className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA">
                <FiYoutube className='ml-4' size={30} color="ffffff"/>
              </a>
            </div>
            <Col></Col>
          </Row>                  
        
          <Row className="mt-4">            
            <h6>Gama Academy: Landing page challenge</h6>
          </Row>
        </Container>
      </div>

      
    </div>    
  );
}

export default App;
