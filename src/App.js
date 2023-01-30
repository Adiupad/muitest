

import { Box } from '@mui/system';
import './App.css';
import DeviceConfig from './components/DeviceConfig';
import DeviceLocation from './components/DeviceLocation';
import DeviceNumber from './components/DeviceNumber';



function App() {

  return (
    <>
      <Box className='app'  >
        <DeviceNumber />
        <DeviceConfig />
        <DeviceLocation />
      </Box>


    </>
  );
}

export default App;
