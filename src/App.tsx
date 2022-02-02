import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './modules/common/components/Loading';
import Content from './modules/common/components/Content';
import { Navs } from './modules/common/constants';
import './App.css';


function App() {
  const Home = lazy(() => import('./modules/home'));
  const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));

  return (
    <Content>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {
            Navs.map(({ path, key, component }) => (
              <Route path={path} key={key} element={component} />
            ))
          }
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Content>
  );
}

export default App;
