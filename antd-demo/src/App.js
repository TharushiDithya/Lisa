import "./App.css";
import LeaveReqForm from "./requestForm";
import LeaveMain from "./LeaveMain";
import LeaveStatus from "./LeaveStatus";
import { Row, Col } from "antd";

function App() {
  return (
    <div className="App">
      <Row style={{padding:"10px"}}>
          <Col span={20}>
            <h1>My Leaves</h1>
          </Col>
          <Col span={4} style={{padding:"6px"}}>
            <LeaveReqForm />
          </Col>
      </Row>
      <LeaveMain />
      <LeaveStatus />
    </div> 
  );
}

export default App;
