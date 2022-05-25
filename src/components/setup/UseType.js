import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUseType } from "../../store/slices/applicationSlice";

const UseType = (props) => {
  const dispatch = useDispatch();
  const pageIndex = props.pageIndex;
  const setPageIndex = props.setPageIndex;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Card style={{ width: "18rem", backgroundColor: "#444" }}>
        <Card.Body>
          <Card.Title>
            Local Version <Badge bg="success">Currently in Beta</Badge>
          </Card.Title>
          <Card.Text>
            Select to use FastCRM locally on this machine only. This will limit
            access to a local database that other copies of FastCRM cannot
            connect to. Ideal for very small businesses.
          </Card.Text>
          <Button
            onClick={() => {
              setPageIndex(pageIndex + 1);
              dispatch(setUseType("local"));
            }}
          >
            Use Locally
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", backgroundColor: "#444", margin: "20px" }}>
        <Card.Body>
          <Card.Title>
            Online Version <Badge bg="danger">In Development</Badge>
          </Card.Title>
          <Card.Text>
            Select to use FastCRM in tandem with other copies of FastCRM. You'll
            connect to a shared database that all copies of FastCRM will
            communicate with. Ideal for larger businesses.
          </Card.Text>
          <Button
            onClick={() => {
              setPageIndex(pageIndex + 1);
              dispatch(setUseType("online"));
            }}
            disabled
          >
            Use Online
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UseType;
