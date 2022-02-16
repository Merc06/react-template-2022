import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import Content from './modules/common/components/Content';
import './App.css';
import Spinner from './modules/common/components/Spinner';
import { useCheckIsLogin } from './modules/common/hooks';

const Routes = lazy(() => import('./Routes'));

function App() {
  useCheckIsLogin();
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
