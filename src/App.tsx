import { Suspense } from 'react';

import Loading from './modules/common/components/Loading';
import Content from './modules/common/components/Content';

import './App.css';
import Routes from './Routes';


function App() {


  return (
    <Content>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Content>
  );
}

export default App;
