import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './main.scss';
import Img from './assets/images/pusheen-kind.jpg';

const App = () => {
    const env = process.env.NODE_ENV
    return(
        <div>
            <h1>App works in {env} mode!</h1>
            <img src={Img} className='pusheen'></img>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
