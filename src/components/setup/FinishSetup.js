import {
  Card,
  Button,
  Container,
  Form,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FinishSetup = (props) => {
  const state = useSelector((state) => state);
  const { application, business } = state;
  const pageIndex = props.pageIndex;
  const setPageIndex = props.setPageIndex;
  const [adminPassword, setAdminPassword] = useState("");

  const completeSetup = () => {
    let completedSetupObject = {
      application,
      business,
      adminPassword,
    };
    window.api.completeSetup(completedSetupObject);
  };

  return (
    <Container>
      <Button
        variant="dark"
        style={{ marginLeft: "40px" }}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <MaterialIcon icon="arrow_back_ios" color="white" />
      </Button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Form.Group className="mb-4" controlId="formGridAdminPassword">
          <Form.Label>
            Please choose a password for the Admin account.{" "}
          </Form.Label>
          <Form.Control
            name="adminPassword"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setAdminPassword(e.target.value);
            }}
          />
        </Form.Group>
      </div>

      <Button
        variant="dark"
        style={{ marginLeft: "40px" }}
        onClick={completeSetup}
      >
        <Link to="/login">Finish!</Link>
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h4
          style={{
            margin: "25px",
            border: "2px solid white",
            borderRadius: "15px",
            padding: "15px",
          }}
        >
          Verify your configuration
        </h4>

        <Tabs
          style={{
            border: "2px solid white",
            borderRadius: "5px",
            color: "white",
          }}
          defaultActiveKey="plainText"
          className="mb-3"
        >
          <Tab eventKey="plainText" title="Plain Text">
            <span>Application Use Type: {application.useType}</span>
            <br />
            <span>Auto Sign On: {application.autoSignOn.toString()}</span>
            <br />
            <span>
              Auto Sign On User:{" "}
              {application.autoSignOnUser === ""
                ? "None"
                : "state.application.autoSignOnUser"}
            </span>
            <br />
            <span>
              Agreed to Privacy Policy:{" "}
              {state.application.agreedToPrivacyPolicy.toString()}
            </span>
            <Card style={{ backgroundColor: "#444", marginTop: "20px" }}>
              <Card.Header>Users</Card.Header>
            </Card>
            <Table variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {application?.tempUsers.map((user, index) => {
                  return (
                    <tr key={user.username}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>

          <Tab
            style={{
              border: "2px solid white",
              borderRadius: "5px",
              color: "white",
              padding: "20px",
            }}
            eventKey="json"
            variant="dark"
            title="JSON"
          >
            <pre>{JSON.stringify(application, null, 4)}</pre>
            <pre>{JSON.stringify(business, null, 4)}</pre>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default FinishSetup;
