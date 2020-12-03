import { CoverStyle } from "./cover.style";

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
