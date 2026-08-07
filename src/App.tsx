import { useState } from 'react';
import HomePage from '@/pages/HomePage';
import JobDetailPage from '@/pages/JobDetailPage';
import UnderConstructionPage from '@/pages/UnderConstructionPage';

export type Route =
  | { name: 'home' }
  | { name: 'job'; id: number }
  | { name: 'post-resume' }
  | { name: 'employers' }
  | { name: 'career-advice' };

function App() {
  const [route, setRoute] = useState<Route>({ name: 'home' });

  const navigate = (r: Route) => {
    window.scrollTo(0, 0);
    setRoute(r);
  };

  if (route.name === 'home') {
    return <HomePage navigate={navigate} />;
  }
  if (route.name === 'job') {
    return <JobDetailPage id={route.id} navigate={navigate} />;
  }
  if (route.name === 'post-resume') {
    return (
      <UnderConstructionPage
        title="Post Resume"
        navigate={navigate}
      />
    );
  }
  if (route.name === 'employers') {
    return (
      <UnderConstructionPage
        title="Employers"
        navigate={navigate}
      />
    );
  }
  if (route.name === 'career-advice') {
    return (
      <UnderConstructionPage
        title="Career Advice"
        navigate={navigate}
      />
    );
  }
  return <HomePage navigate={navigate} />;
}

export default App;
