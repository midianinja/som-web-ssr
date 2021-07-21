import React from 'react';
import OpportunityTemplate from '../../../components/templates/opportunity-form/opportunity-form';
import BaseHead from '../../../components/baseHead';

/**
 * This render the register event components. The register event component, render form to
 * register a new event as a produtor on S.O.M api
 */
const EditOpportunity = () => (
  <>
    <BaseHead title="Edite sua oportunidade" />
    <OpportunityTemplate />
  </>
);

export default EditOpportunity;
