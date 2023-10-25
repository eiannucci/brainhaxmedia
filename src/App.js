import { useEffect } from "react";
import { HashRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavMenu } from './components/NavMenu';
import { Footer } from './components/Footer';
import { PageRouting } from './components/PageRouting';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import './scss/FontFace.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './scss/Global.module.scss';
import styles from './scss/App.module.scss';

function App() {

  const client = new QueryClient();

  useEffect(() => {
    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);

  return (
    <QueryClientProvider client={client}>
      <div className={classNames(styles['app-custom'], 'App', 'd-flex', 'flex-column', 'min-vh-100')}>
        <Router>
          <NavMenu />
          <div className={GlobalStyles['content-container']}>
            <PageRouting />
          </div>
          <Footer />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
