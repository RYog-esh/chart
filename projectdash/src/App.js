import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
// import { Provider } from 'react-redux';
// import { store } from './store/store';

function App() {
  const [divData, setDivData] = useState([
    {
      divtitle: 'OverAll Resource',
      counting: '80,000',
      cta: 'View More'
    },{
      divtitle: 'Daily Average',
      counting: '24,512',
      cta: 'View More'
    },{
      divtitle: 'Allocation',
      counting: '47,800',
      cta: 'View More'
    },{
      divtitle: 'Yet to Allocate',
      counting: '12,240',
      cta: 'View More'
    },
  ])
  return (
    <div className="App">
      <Layout data={divData}/>
    </div>
    // <Provider store={store}>
    //   <div className="App">
    //     <Layout />
    //   </div>
    // </Provider>
  );
}

export default App;
