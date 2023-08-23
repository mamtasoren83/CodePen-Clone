

//components
import Home from './components/Home';

import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  );
}

// export default Home;
export default App;
