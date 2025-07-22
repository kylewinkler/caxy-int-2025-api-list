import Layout from './layout/Layout';
import { ThemeProvider } from './layout/layout.context';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
