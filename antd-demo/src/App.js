import './App.css';
import PayrollSearch from './payrollSearch';
import { Layout, Menu } from "antd";
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
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            {PAGES.map((page)=>
              <Menu.Item>{page}</Menu.Item>
              )}
          </Menu>
        </Header>
        <Content style={{padding:"100px"}}>
          <PayrollSearch />
        </Content>
      </Layout>
      </div>
  );
}

export default App;
