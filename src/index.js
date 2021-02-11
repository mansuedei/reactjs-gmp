import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './main.scss';
import Img from './assets/images/pusheen-kind.jpg';

const App = () => {
    return(
        <div>
            <h1>App works!</h1>
            <img src={Img} className='pusheen'></img>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
