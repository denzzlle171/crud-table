import { SSpiner, SLoad, ScreenSpiner } from './style-js/sSpiner';

const Spiner = () => {
  return (
    <ScreenSpiner>
      <SSpiner></SSpiner>
      <SLoad>Loading...</SLoad>
    </ScreenSpiner>
  );
};

export default Spiner;
