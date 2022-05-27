import { Tooltip } from "react-bootstrap";

const TemporaryPasswordTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Set a temporary password now and new users will be prompted to change it on
    first sign in.
  </Tooltip>
);

export default TemporaryPasswordTooltip;
