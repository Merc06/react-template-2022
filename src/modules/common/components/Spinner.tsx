
interface Props {
  height?: string | number;
}

const Spinner = ({ height = '100vh' }: Props) => (
  <div style={{ height }} className="w-full flex items-center justify-center">
    <h1>Loading...</h1>
  </div>
);

export default Spinner;
