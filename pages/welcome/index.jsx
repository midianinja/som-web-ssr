import WelcomeTemplate from '../../components/templates/welcome/welcome';
import BaseHead from '../../components/baseHead';

/**
 * This render the welcome components.
 */
const Welcome = () => (
  <>
    <BaseHead title="Seja bem vinde ao Sistema Operacional da Música" />
    <WelcomeTemplate />
  </>
);

export default Welcome;
