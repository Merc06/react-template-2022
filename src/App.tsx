import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import Content from './modules/common/components/Content';
import './App.css';
import Spinner from './modules/common/components/Spinner';


function App() {
  const Routes = lazy(() => import('./Routes'));

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Content>
          <Routes />
        </Content>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
