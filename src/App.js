import {Component} from "./components/component";
import {FunctionalComponent} from "./components/functional-component";
import {PureComponent} from "./components/pure-component";
import {CreatedElement} from './components/create-element';

function App() {
  return (
    <div className="App">
      <Component/>
      <PureComponent/>
      <FunctionalComponent/>
      <CreatedElement/>
    </div>
  );
}

export default App;
