import gigLoader from '../../../images/img-short-gig-logo-yellow.png'; //waiting for new loader

interface Props {
  height?: string | number;
}

const Spinner = ({ height = '100vh' }: Props) => (
  <div style={{ height }} className="w-full flex items-center justify-center">
    <img src={gigLoader} alt="spinner" width="80px" />
  </div>
);

export default Spinner;
