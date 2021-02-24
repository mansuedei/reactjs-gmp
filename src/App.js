import React from 'react';
import { ErrorBoundary, Header } from './components'
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
