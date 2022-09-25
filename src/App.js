import React from 'react';
import { Provider } from 'react-redux';
import TableUsers from './components/UserTable';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TableUsers />
      </div>
    </Provider>
  );
}

export default App;
