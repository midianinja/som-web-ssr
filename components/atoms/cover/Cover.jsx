import { CoverStyle } from "./cover.style";

/**
 * function that render CoverAtom react component
 * 
 * @param {object} props component props
 * @returns contains CoverAtom Component
 */
const CoverAtom = ({
  cover,
  customStyle,
}) => (
  <CoverStyle
    cover={cover}
    customStyle={customStyle}
  />
);

CoverAtom.propTypes = {
  cover: PropTypes.string,
  customStyle: PropTypes.string,
};

CoverAtom.defualtProps = {
  cover: '',
  customStyle: '',
};

export default CoverAtom;
