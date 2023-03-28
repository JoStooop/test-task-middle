import React, {useEffect, useState} from 'react';
import {HashRouter as Router} from 'react-router-dom';

import {RoutesPage} from './pages/routes-page/RoutesPage';
import {Spinner} from '@/components/ui/spinner/Spinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading((load) => (load ? !load : load)), 100);
  }, [loading]);

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="App">
      <Router>
        <RoutesPage/>
      </Router>
    </div>
  );
};

export {App};
