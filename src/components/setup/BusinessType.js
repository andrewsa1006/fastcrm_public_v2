import { Card, Button, Badge, Container } from "react-bootstrap";
import MaterialIcon from "material-icons-react";
import { useDispatch } from "react-redux";
import { updateBusinessModel } from "../../store/slices/businessSlice";

const BusinessType = (props) => {
  const dispatch = useDispatch();
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
        }}
      >
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#444",
            margin: "20px",
            minHeight: "350px",
          }}
        >
          <Card.Body>
            <Card.Title>Business to Business</Card.Title>
            <Card.Text>
              Select this option if you are a business that is supporting other
              businesses. This option includes preconfigured features like
              invoice generation, storing a detailed ticket history, and focuses
              on adding entities or organizations as opposed to individuals to
              the database.
            </Card.Text>
            <Button
              onClick={() => {
                setPageIndex(pageIndex + 1);
                dispatch(updateBusinessModel("BUSINESS_TO_BUSINESS"));
              }}
            >
              Begin Setup
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "#444",
            margin: "20px",
            minHeight: "350px",
          }}
        >
          <Card.Body>
            <Card.Title>
              Business to Consumer <Badge bg="danger">In Development</Badge>
            </Card.Title>

            <Card.Text>
              Select this option if you are a business that is directly
              supporting the end user. This option includes preconfigured
              features like invoice generation, storing a detailed ticket
              history, and focuses on adding and storing an individuals
              information as opposed to an organizations.
            </Card.Text>
            <Button
              onClick={() => {
                setPageIndex(pageIndex + 1);
                dispatch(updateBusinessModel("BUSINESS_TO_CONSUMER"));
              }}
              disabled
              variant="primary"
            >
              Begin Setup
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundColor: "#444",
            margin: "20px",
            minHeight: "350px",
          }}
        >
          <Card.Body>
            <Card.Title>
              Custom Implementation <Badge bg="primary">Advanced</Badge>
              <Badge bg="danger">In Development</Badge>
            </Card.Title>
            <Card.Text>
              Select this option if you are have a hybrid business model and
              would like to be able to choose your own features. You'll need to
              select and configure your features individually.
            </Card.Text>
            <br />
            <br />
            <br />
            <Button
              onClick={() => {
                setPageIndex(pageIndex + 1);
                dispatch(updateBusinessModel("CUSTOM"));
              }}
              disabled
              variant="primary"
            >
              Begin Setup
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default BusinessType;
