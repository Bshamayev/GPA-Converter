import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useWindowSize } from 'react-hooks-window-size';
import Confetti from 'react-confetti';
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

  return (
    <div className="App">
      <style>{'body { background-color: grey; }'}</style>
      <h1 style={{color:"white", flex:"center"}}>GPA Converter</h1>
      <div>
        <DropdownButton id="dropdown-basic-scale" title="GPA Scale" flip="true" menuVariant='dark' style={{margin:10}} variant="success">
          <Dropdown.Item onClick={() => setUserScale(4)}>4.0 Scale</Dropdown.Item>
          <Dropdown.Item onClick={() => setUserScale(100)}>100.0 Scale</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-conversion" title="Conversion" menuVariant='dark' style={{margin:10}} variant="success">
          <Dropdown.Item onClick={() => setConvertScale(4)}>4.0 Scale</Dropdown.Item>
          <Dropdown.Item onClick={() => setConvertScale(100)}>100.0 Scale</Dropdown.Item>
        </DropdownButton>
      </div>
      
  
    <input
      name="userGPA"
      placeholder="Enter GPA..."
      type="float"
      min={0}
      max={userScale}
      required
      onChange={e => setUserGPA(e.target.value)}
      value={userGPA}
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
