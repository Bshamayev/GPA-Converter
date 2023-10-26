import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useWindowSize } from 'react-hooks-window-size';
import Confetti from 'react-confetti';
import { Form } from 'react-bootstrap';
import FormSelect from 'react-bootstrap/FormSelect';

/*
GPA Conversions
Weighted GPA Scale:
Widget Dropdown for weighted/unweighted. Unweighted max will be 4 and 100 so no values above those
can be entered. Weighted max will be 5 and 110, so no values above those can be entered.
*NOTE* we will have validation on widgets to make sure only valid values can be entered. Only positive
floats can be entered
Widget Dropdown menu for user to select gpa scale (4,100)
Widget to enter Users GPA
Widget dropdown for the scale they want to convert to
Widget button to calculate the new gpa
Widget text field for the result
*/

const findGPA = (userGPA, GPAscale, conversion) => {
  var conversionGPA = (userGPA/GPAscale) * conversion;
  console.log(conversionGPA);
  return conversionGPA; //save this to text component
}

function App() {
  const  [userGPA, setUserGPA] = useState()
  const [userScale, setUserScale] = useState()
  const [ConvertScale, setConvertScale] = useState()
  console.log(userGPA)
  console.log("userScale;", userScale)
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const {width, height} = useWindowSize();
  console.log(ConvertScale);
  console.log(userScale);
  return (
    <div className="App">
      <style>{'body { background-color: grey; }'}</style>
      <h1 style={{color:"white", flex:"center"}}>GPA Converter</h1>
      <div>
      <Form.Select aria-label="GPA Scale" id="gpascale" style={{margin:10}}>
        <option value="gpa scale">Select GPA Scale...</option>
        <option id="4pt" value="4" onClick={() => setUserScale(value)}>4.0 Scale</option>
        <option id="100pt" value="100" onClick={() => setUserScale(value)}>100.0 Scale</option>
      </Form.Select>
      <Form.Select aria-label="Conversion" id="converison" style={{margin:10}}>
        <option value="convert">Select Conversion Scale...</option>
        <option id="4c" value="4" onClick={() => setConvertScale(value)}>4.0 Scale</option>
        <option id="100c" value="100" onClick={() => setConvertScale(value)}>100.0 Scale</option>
      </Form.Select>
      </div>
      
  
    <input
      name="userGPA"
      placeholder="Enter GPA..."
      type="float"
      patter='numeric'
      min={0}
      value={userGPA}
      onChange={e => setUserGPA(e.target.value)}
      required
      style={{margin:10}}
      />
      
    <Row>
      <Col md={12} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2" style={{margin:10}} variant="success">
          Convert
        </Button>
        <Toast show={showA} onClose={() => setShowA(false)}>
          <Toast.Header>
          <Confetti
        width={width}
        height={height}
      />
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Conversion</strong>
          </Toast.Header>
          <Toast.Body>{findGPA(userGPA, userScale, ConvertScale)}</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  )
}

export default App
