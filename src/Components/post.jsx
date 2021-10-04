import React from 'react';
import { Container, Col, Row} from "react-bootstrap";
import '../styles.css';




export default function Post(props){
    
     let fullDate = new Date(props.date).toDateString();
     let fullDateHour = new Date(props.date).getHours();
     let fullDateMinutes = new Date(props.date).getMinutes();
     return(
        <div className="">
           <Container>
          <Row>
          <Col md={2} sm={12}>
            <div className="tablepost_containers_date">
               <p>{fullDate} </p> 
               <p>{fullDateHour}.{fullDateMinutes}</p>
            </div>
            <div className="tablepost_containers_documentType">
               <p>{props.category}</p> 
            </div>
            </Col>
            <Col md={1}></Col>
            <Col md={9} sm={12}>
               <h4>{props.title} </h4>
               <p>{props.description}</p>
               <Row>
                   <Col md={3} sm={12}>
                      <a href="/">Zobacz Raport</a> 
                   </Col>
                   
                   <Col md={4} sm={12}>
                      <a href="/">Pobierz Raport.pdf</a> 
                   </Col>
               </Row>

            </Col>
            </Row>
            </Container>
            <hr className="tablepost_containers_underline"></hr>
        </div>
    )
}