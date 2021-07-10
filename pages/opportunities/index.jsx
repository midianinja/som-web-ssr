/* eslint-disable react/react-in-jsx-scope */
import WallTemplate from '../../components/templates/wall/wall';
import BaseHead from '../../components/baseHead';

/**
 * This render the wall components. The wall component, render events, artists, productors
 * and more about S.O.M
 */
const Wall = () => (
  <>
    <BaseHead
      title="Mural de oportunidades"
      description="Conheça bandas, artistas, produtores e oportunidades pertinho de você"
    />
    <WallTemplate />
  </>
);

export default Wall;
