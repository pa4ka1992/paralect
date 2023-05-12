import { withProviders } from '../providers';
import { Router } from '../router';

const App = () => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default withProviders(App);
