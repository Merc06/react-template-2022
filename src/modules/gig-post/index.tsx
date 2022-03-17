import GigFooter from '../common/components/GigFooter';
import Header from './components/Header';
import Navigations from './components/Navigations';
import Filters from './components/Filters';
import GigList from './components/GigList';
import Buttons from './components/Buttons';

const GigPost = () => {


  return (
    <>
      <Header />
      <Navigations />
      <Filters />
      <GigList />
      <Buttons />
      <GigFooter />
    </>
  )
}

export default GigPost