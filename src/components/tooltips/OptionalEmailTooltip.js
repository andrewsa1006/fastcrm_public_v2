import { Tooltip } from "react-bootstrap";

const OptionalEmailTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Emails are optional when you are using FastCRM locally. Don't worry, we
    don't collect any of your information.
  </Tooltip>
);

export default OptionalEmailTooltip;
