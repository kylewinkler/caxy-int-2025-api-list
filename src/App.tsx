import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { ThemeProvider } from './layout/layout.context';
import Home from './pages/Home/Home';
import Router from './router/Router';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
