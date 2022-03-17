import Navigations from './components/Navigations';
import ClientDetails from './components/ClientDetails';
import Gallery from './components/Gallery';
import Qoutations from './components/Qoutations';
import AboutGig from './components/AboutGig';
import Reviews from './components/Reviews';

const GigDetails = () => {

  return (
    <div className="flex flex-col space-y-5">
      <Navigations />
      <ClientDetails />
      <Gallery />
      <Qoutations />

      <div className="flex flex-col p-4 divide-y divide-gray-200">
        <AboutGig />
        <Reviews />
      </div>
    </div>
  )
}

export default GigDetails
