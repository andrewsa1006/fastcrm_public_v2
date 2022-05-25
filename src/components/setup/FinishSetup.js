import { Card, Button, Container, Form, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { setUseType } from "../../store/slices/applicationSlice";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

const FinishSetup = (props) => {
  const state = useSelector((state) => state);
  const { application, business } = state;
  const pageIndex = props.pageIndex;
  const setPageIndex = props.setPageIndex;
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
          />
        </Form.Group>

        <Form.Group controlId="formGridClientele" className="mb-5">
          <Form.Label>
            What term do you use to refer to your clientele?{" "}
          </Form.Label>
          <Form.Control
            name="clientele"
            type="text"
            placeholder="e.g. Clients, Partners, etc..."
          />
        </Form.Group>
      </div>

      <Button
        variant="dark"
        style={{ marginLeft: "40px" }}
        onClick={() => {
          window.api.completeSetup(state);
        }}
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
          id="uncontrolled-tab-example"
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
              <Card.Body>
                {application.tempUsers.map((user, index) => {
                  return <p key={index}>{user.username}</p>;
                })}
              </Card.Body>
            </Card>
          </Tab>

          <Tab
            style={{
              display: "block",
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
