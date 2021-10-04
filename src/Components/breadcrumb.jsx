import React from 'react';
import { Container, Col, Row} from "react-bootstrap";
import '../styles.css';
import Form from 'react-bootstrap/Form'; 
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';

// ALL JSON DATA
import Post from './post.jsx';
import Data from './data.json';
import { useState } from 'react';



export default function Breadcrumb(){
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <div className="breadcrumb_containers">
          <div className="breadcrumb_containers_search_bar">
          <Container>
          <Row>
          <Col md={2} sm={12}>
            <div className="breadcrumb_containers_year">
            <Form.Select aria-label="Default select example">
                     <option>2019</option>
                     <option value="1">2020</option>
                     <option value="2">2021</option>
            </Form.Select>
            </div>
            </Col>
            <Col md={1}></Col>
            <Col md={9} sm={12}>
               

                <InputGroup>
                        <FormControl
                        type="text"
                        placeholder="Podaj nazwę, numer lub datę raportu"
                        aria-label="Recipient's username with two button addons"
                        className="breadcrumb_containers_input"
                        onChange = {event => {setSearchTerm(event.target.value)}}
                        />
                              
                </InputGroup>

            </Col>
            </Row>
            </Container>
            <Container className="breadcrumb_container_inner_2">
                <Row>
                    <Col md={2} sm={6} xs={6}> <div><p>Wszystkie X</p></div></Col>
                    <Col md={2} sm={6} xs={6}> <div><p>Bieżące ESPI X</p></div>  </Col>
                    <Col md={2} sm={6} xs={6}> <div><p>Bieżące EBI X</p></div> </Col>
                    <Col md={2} sm={6} xs={6}> <div><p>Finansowe X</p></div> </Col>
                    <Col md={2} sm={6} xs={6}> <div><p>Roczne X</p></div>    </Col>    
                </Row>
            </Container>
            </div>
            
                <div className="tablepost_containers">
                {Data.filter((data)=>{
                    if(searchTerm === ""){
                      return  true;
                    }
                    return data.title.toLowerCase().includes(searchTerm.toLowerCase());
                }).map((data, key)=> {
                    return  <Post 
                     key={data.date}
                     title={data.title}
                     description={data.description}
                     date={data.date}
                     category={data.category}
                     files={data.files}
                  /> 
                })}
                </div>
                
        </div>
    )
}






