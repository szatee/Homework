import { Layout } from 'components/Layout';
import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { store, persistor } from 'store';
import { todosSlice } from 'store/todos';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

store.dispatch(todosSlice.endpoints.getTodos.initiate('todos'));

export const App = memo(() => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
});
