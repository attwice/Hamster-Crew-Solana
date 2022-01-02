import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/basic.scss';
import './styles/main.scss';
// import './styles/navbar.css';
import Header from './components/header';
import Project from './components/project';
import Ournft from './components/ournft';
import Team from './components/team';
import FAQ from './components/faq';
import Community from './components/community';
import Modaltop from './components/modaltop';

function App() {
  return (
    <Fragment>
      <Modaltop />
      <Header />
      <Project />
      <Ournft />
      <Team />
      <FAQ />
      <Community />
    </Fragment>
  );
}

export default App;
