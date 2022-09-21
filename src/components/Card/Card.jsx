import PropTypes from "prop-types";
import { CardStyle } from "./Styles";

export const Card = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
