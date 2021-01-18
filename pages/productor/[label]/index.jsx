import ProductorProfileTemplate from '../../../components/templates/productor-profile/productorProfile';

/**
 * This render the productor profile template. 
 */
const ProductorProfile  = ({ label }) => <ProductorProfileTemplate label={label} />

/**
 * This function gets called from a page, Next.js will pre-render 
 */
export const getServerSideProps = ({ params }) => {
  return { props: { label: params.label } };
};

export default ProductorProfile;