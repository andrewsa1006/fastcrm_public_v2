import { Button, Container, Row, Form, Col } from "react-bootstrap";
import MaterialIcon from "material-icons-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateBusinessInformation } from "../../store/slices/businessSlice";
import { getCountries, getCountryByName } from "node-countries";

const BusinessInformationForm = (props) => {
  const dispatch = useDispatch();
  const pageIndex = props.pageIndex;
  const setPageIndex = props.setPageIndex;
  const countryList = getCountries();
  const [stateList, setStateList] = useState({});
  const [formValue, setFormValue] = useState({
    businessName: "",
    phone: "",
    addressOne: "",
    addressTwo: "",
    country: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSelect = (event) => {
    const form = event.target.id;
    if (form === "formGridCountry") {
      const tempCountry = getCountryByName(event.target.value);
      setStateList(tempCountry.provinces);
      setFormValue((prevState) => {
        return {
          ...prevState,
          country: tempCountry.name,
        };
      });
    } else if (form === "formGridState") {
      let tempState = event.target.value;
      setFormValue((prevState) => {
        return { ...prevState, state: tempState };
      });
    }
  };

  const { businessName, phone, addressOne, addressTwo, city, zipcode } =
    formValue;

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
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Your Business Name</Form.Label>
              <Form.Control
                name="businessName"
                type="text"
                placeholder="Name"
                value={businessName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="addressOne"
              placeholder="1234 Main St"
              value={addressOne}
              type="text"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              name="addressTwo"
              placeholder="Apartment, studio, or floor"
              type="text"
              value={addressTwo}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Select
                onChange={handleSelect}
                defaultValue="Select a Country"
              >
                <option>Select a Country</option>
                {countryList.map((country, index) => {
                  return <option key={index}>{country.name}</option>;
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                onChange={handleSelect}
                defaultValue="Select a State..."
              >
                <option>Select a State</option>
                {stateList?.length > 0
                  ? stateList?.map((state, index) => {
                      return <option key={index}>{state.name}</option>;
                    })
                  : null}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City (optional)</Form.Label>
              <Form.Control
                name="city"
                placeholder="City"
                type="text"
                value={city}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                name="zipcode"
                placeholder="Zipcode"
                type="text"
                value={zipcode}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to the FastCRM Privacy Policy"
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              setPageIndex(pageIndex + 1);
              dispatch(updateBusinessInformation(formValue));
            }}
          >
            Next
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default BusinessInformationForm;
