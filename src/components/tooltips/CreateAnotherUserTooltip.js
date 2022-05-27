import { Tooltip } from "react-bootstrap";

const CreateAnotherUserTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    As the admin account has full access all the time, we recommend creating at
    least one additional user account for security.
  </Tooltip>
);

export default CreateAnotherUserTooltip;
