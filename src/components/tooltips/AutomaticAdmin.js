import { Tooltip } from "react-bootstrap";

const AutomaticAdminTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    We generate an admin account for you automatically. You'll set a password
    for this account on the next screen.
  </Tooltip>
);

export default AutomaticAdminTooltip;
