import { MyComponent } from './components/MyComponent';
import { FunctionalComponent } from './components/FunctionalComponent';
import { MyPureComponent } from './components/MyPureComponent';
import { CreatedElement } from './components/CreatedElement';

function App() {
  return (
    <div className='App'>
      <MyComponent/>
      <MyPureComponent/>
      <FunctionalComponent/>
      <CreatedElement/>
    </div>
  );
}

export default App;
