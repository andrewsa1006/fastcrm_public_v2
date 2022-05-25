import { useState } from "react";
import { Carousel } from "react-bootstrap";
import UseType from "../components/setup/UseType";
import BusinessType from "../components/setup/BusinessType";
import BusinessInformationForm from "../components/setup/BusinessInformationForm";
import AccountCreation from "../components/setup/AccountCreation";
import FinishSetup from "../components/setup/FinishSetup";

const Setup = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Carousel
      interval={null}
      activeIndex={pageIndex}
      indicators={false}
      controls={false}
    >
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h2>Hey there! Looks like this is your first time using FastCRM.</h2>
          <h4>Select an option below to get started.</h4>
        </div>
        <UseType pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1>What is your business model?</h1>
        </div>
        <BusinessType pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1>Tell us a little bit about your business.</h1>
        </div>
        <BusinessInformationForm
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1>Lets set up some accounts.</h1>
        </div>
        <AccountCreation pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Carousel.Item>

      <Carousel.Item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1>Almost there! Just a few more things.</h1>
        </div>
        <FinishSetup pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Setup;
