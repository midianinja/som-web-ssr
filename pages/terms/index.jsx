import TermsTemplate from '../../components/templates/terms/terms';
import BaseHead from '../../components/baseHead'

/**
 * This render the terms components. use terms and politic policies about S.O.M
 */
const Terms  = () => (
  <>
    <BaseHead
      title="Termos e políticas de uso"
      description="Saiba mais sobre os termos e políticas pensadas para gerar uma comunidade musical mais humana e igualitária"
    />
    <TermsTemplate />
  </>
);

export default Terms;
