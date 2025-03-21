import './App.css'; 
import ThemeSelector from './components/Button';
import RoutesBrowser from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';

const App = () => {

  return (

    <>
    <ThemeProvider>
      <RoutesBrowser />
      <ThemeSelector />
    </ThemeProvider>
    </>

  )
};

export default App;
