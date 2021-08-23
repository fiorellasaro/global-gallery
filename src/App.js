
import './App.css';
import propTypes from 'prop-types';


function App({title}) {
  return (
    <div className="App">
      <div>{title}</div>
    </div>
  );

  App.propTypes = {
    title: propTypes.string.isRequired
  }
}

export default App;
