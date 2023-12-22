import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', right: '0-8rem' }}></div>
      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
    
  );
}

export default App;


