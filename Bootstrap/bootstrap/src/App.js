import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Row, Col, Container, Breadcrumb,Badge,Card} from "react-bootstrap"
import Example from "./Example"

function App() {
  return (
    <div className="App">
      <p>REACT BOOTSTRAP</p>
      <Button variant="outline-primary" size='lg' className='mb-5' >Primary</Button>
      

<Example />
<Badge bg="secondary">New</Badge>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUkDhps0YJxzc8zJ80CnOCNi0TnqJ2nqQskjypxgCBtTLhZ9LGL3aq9za9-VqvWtsxWY&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


<Container className='container'>
   <Row className='row'>
    <Col className='coloumn' lg={6} sm={12}>col 1</Col>
    <Col className='coloumn' lg={6} sm={12}>col 2</Col>
    <Col className='coloumn' lg={6} sm={12}>col 3</Col>
    <Col className='coloumn' lg={6} sm={12}>col 4</Col>
    
   </Row>
   
 
</Container>
    </div>
  );
}

export default App;