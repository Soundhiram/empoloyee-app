// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routing/indext';

export function App() {
  return (
    <Provider store={store} >
      <AppRoutes/>
    </Provider>
  );
}

export default App;
