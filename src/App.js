import React from 'react';
import { Header } from './components';
import { ErrorBoundary } from './hoc/ErrorBoundary';
import { HomePage } from './pages/HomePage';

const App = () => {
    return(
        <ErrorBoundary>
            <header className='header'>
                <Header />
            </header>
            <HomePage />
        </ErrorBoundary>
    )
}

export default App;
