import { useState } from "react";
import MaterialIcon from "material-icons-react";
import { useDispatch } from "react-redux";
import { setTempUserArray } from "../../store/slices/applicationSlice";
import AutomaticAdminTooltip from "../tooltips/AutomaticAdmin";
import CreateAnotherUserTooltip from "../tooltips/CreateAnotherUserTooltip";
import OptionalEmailTooltip from "../tooltips/OptionalEmailTooltip";
import TemporaryPasswordTooltip from "../tooltips/TemporaryPasswordTooltip";
import {
  Table,
  Container,
  OverlayTrigger,
  Button,
  Form,
  Col,
  Row,
  Badge,
  Alert,
} from "react-bootstrap";

const AccountCreation = (props) => {
  const dispatch = useDispatch();
  const pageIndex = props.pageIndex;
  const setPageIndex = props.setPageIndex;
  const [users, setUsers] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  // const [permissionsInvalid, setPermissionsInvalid] = useState(null);
  const permissionsLevels = [
    { name: "Read Only", value: "4" },
    { name: "Read and Write", value: "3" },
    { name: "Power User", value: "2" },
    { name: "Administrator", value: "1" },
  ];

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    tempPassword: "",
    permissions: "",
    status: "",
  });

  const [invalidations, setInvalidations] = useState({
    firstName: null,
    lastName: null,
    username: null,
    tempPassword: null,
  });

  const addUser = () => {
    if (
      invalidations.firstName ||
      invalidations.lastName ||
      invalidations.username ||
      invalidations.tempPassword ||
      invalidations.permissions ||
      invalidations.firstName === null ||
      invalidations.lastName === null ||
      invalidations.username === null ||
      invalidations.tempPassword === null ||
      invalidations.permissions === null ||
      invalidations.status === null ||
      emailInvalid ||
      emailInvalid === null
    ) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 4000);
    } else {
      const user = formValue;
      setUsers(() => {
        return [...users, user];
      });
      setFormValue({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        tempPassword: "",
        permissions: "",
        status: "",
      });
      setShowAdd(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleValidationOnBlur = (event) => {
    const { name, value } = event.target;
    let isInvalid = true;
    if (name === "email") {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (regex.test(value)) {
        isInvalid = false;
        setEmailInvalid(isInvalid);
      } else {
        setEmailInvalid(isInvalid);
      }
    }
    if (value !== "") {
      isInvalid = false;
    }
    setInvalidations((prevState) => {
      return {
        ...prevState,
        [name]: isInvalid,
      };
    });
  };

  const removeUserFromUsersArr = (event) => {
    let newUserArray = users.filter((user) => {
      return user.username !== event.target.id;
    });
    setUsers(newUserArray);
  };

  const updatePermissions = (event) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        permissions: event.target.value,
      };
    });
  };

  const updateStatus = (event) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        status: event.target.value,
      };
    });
  };

  const validateUserList = () => {
    if (users.length > 0) {
      setPageIndex(pageIndex + 1);
      dispatch(setTempUserArray(users));
    } else {
      return;
    }
  };

  const { firstName, lastName, username, email, tempPassword } = formValue;
  return (
    <Container>
      <Button
        variant="dark"
        style={{ marginLeft: "40px", marginBottom: "40px" }}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <MaterialIcon icon="arrow_back_ios" color="white" />
      </Button>
      <br />
      <Button
        variant={!showAdd ? "success" : "danger"}
        onClick={() => {
          setShowAdd(!showAdd);
        }}
      >
        {!showAdd ? "Add User" : "Cancel"}
      </Button>
      <Table className="mt-5" variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={AutomaticAdminTooltip}
          >
            <tr>
              <td>
                <Button disabled size="sm">
                  <MaterialIcon icon="delete" color="white" name="test" />
                </Button>
              </td>
              <td>Admin</td>
              <td>FastCRM</td>
              <td>Admin</td>
            </tr>
          </OverlayTrigger>
          {users?.map((user, index) => {
            return (
              <tr key={user.username}>
                <td>
                  <Button
                    id={user.username}
                    size="sm"
                    onClick={removeUserFromUsersArr}
                  >
                    <MaterialIcon
                      id={user.username}
                      icon="delete"
                      color="white"
                      name="test"
                    />
                  </Button>
                </td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {users.length > 0 ? (
          <Button variant="primary" onClick={validateUserList}>
            Next
          </Button>
        ) : (
          <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 400 }}
            overlay={CreateAnotherUserTooltip}
          >
            <Button variant="primary" onClick={validateUserList}>
              Next
            </Button>
          </OverlayTrigger>
        )}
      </div>

      {showAdd ? (
        <Form
          className="mt-4"
          style={{
            border: "3px solid white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                onBlur={handleValidationOnBlur}
                isInvalid={invalidations.firstName}
              />
              <Form.Control.Feedback type="invalid">
                First name cannot be blank
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onBlur={handleValidationOnBlur}
                isInvalid={invalidations.lastName}
              />
              <Form.Control.Feedback type="invalid">
                Last name cannot be blank
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="username"
                placeholder="Username"
                name="username"
                value={username}
                onBlur={handleValidationOnBlur}
                isInvalid={invalidations.username}
              />
              <Form.Control.Feedback type="invalid">
                Username cannot be blank
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                Email (Optional){" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={OptionalEmailTooltip}
                >
                  <Badge bg="primary">?</Badge>
                </OverlayTrigger>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onBlur={handleValidationOnBlur}
                isInvalid={emailInvalid}
              />
              <Form.Control.Feedback type="invalid">
                Must be a valid email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Temporary Password{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={TemporaryPasswordTooltip}
                >
                  <Badge bg="primary">?</Badge>
                </OverlayTrigger>
              </Form.Label>

              <Form.Control
                onChange={handleChange}
                type="password"
                placeholder="Password"
                name="tempPassword"
                value={tempPassword}
                onBlur={handleValidationOnBlur}
                isInvalid={invalidations.tempPassword}
              />
              <Form.Control.Feedback type="invalid">
                Password cannot be blank
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPermissions">
              <Form.Label>Permissions</Form.Label>
              <Form.Select
                isInvalid={invalidations.permissions}
                defaultValue="Choose..."
                name="permission"
                onChange={updatePermissions}
              >
                <option>Choose...</option>
                {permissionsLevels.map((permission, index) => {
                  return (
                    <option
                      id={permission.value}
                      key={permission.value}
                      value={permission.value}
                    >
                      {permission.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control.Feedback tooltip type="invalid">
                Please choose appropriate permissions for this user
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                isInvalid={invalidations.status}
                defaultValue="Choose..."
                name="status"
                onChange={updateStatus}
              >
                <option>Choose...</option>
                <option value={1}>Active</option>
                <option value={2}>Pending</option>
                <option value={3}>Inactive</option>
                <option value={4}>Deleted</option>
              </Form.Select>
              <Form.Control.Feedback tooltip type="invalid">
                Please choose appropriate status for this user
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button variant="info" onClick={addUser}>
            Submit User
          </Button>
        </Form>
      ) : null}
      {errorAlert ? (
        <Alert className="mt-4" variant="danger">
          Error submitting form. Please check all fields.
        </Alert>
      ) : null}
    </Container>
  );
};

export default AccountCreation;
