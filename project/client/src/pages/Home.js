// import Artikkel1 from '../components/Artikkel1';
import Artikkel2 from '../components/Artikkel2';
import Artikkeltittel from '../components/Artikkeltittel';
// import Component from '../components/Component';

/**
 * Home bruker nå komponenten jeg har laget og sender en prop
 */

const Home = () => (
  <>
    <Artikkeltittel title="Heidu hallo" />
    <Artikkel2 />
  </>
);
export default Home;
