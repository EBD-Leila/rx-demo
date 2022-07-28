
import './App.css';
import './styles/globals.scss'
import './styles/common/_variables.scss'
import './styles/common/_utils.scss'
import '@eyebuydirect/ebd.front.lib/dist/ebd.front.lib.css';
import RxMain from './pages/rx'
import './i18n'

function App() {
 
  return (
    <div className="App">
      <RxMain />
    </div>
  );
}

export default App;
