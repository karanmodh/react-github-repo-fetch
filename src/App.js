import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App" style={{textAlign: "center"}}>
      <Header text="Github Repo Search"/>
      <Search />
    </div>
  );
}

export default App;
