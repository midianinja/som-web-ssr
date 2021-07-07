import RegisterEventTemplate from '../../../components/templates/register-event/registerEvent';
import BaseHead from '../../../components/baseHead';

/**
 * This render the register event components. The register event component, render form to
 * register a new event as a produtor on S.O.M api
 */
const RegisterEvent = () => (
  <>
    <BaseHead title="Edite sua oportunidade" />
    <RegisterEventTemplate />
  </>
);

export default RegisterEvent;
