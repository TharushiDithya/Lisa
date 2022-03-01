import "./App.css";
import LeaveReqForm from "./requestForm";
import LeaveMain from "./LeaveMain";
import LeaveStatus from "./LeaveStatus";
import { Layout, Menu, Row, Col } from "antd";
const { Header, Content } = Layout;
const PAGES = [
  "My Profile",
  "My Payroll",
  "My Leaves",
  "My Rewards"
];

function App() {
  return (
    <div className="App">
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          {PAGES.map((page) =>
            <Menu.Item>{page}</Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
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
      </Content>
  </Layout>
    </div> 
  );
}

export default App;
