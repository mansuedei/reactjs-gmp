import React, {FC} from 'react';

const ErrorBoundary: FC = (props) => {
    const ErrorText:FC = () => 
        <h1>
            Oops, something went wrong! Don't worry, we are definetely fixing it. Like, right now! Yeaaah...
        </h1>
    
    let isErrorFlag = false;

    return <>{isErrorFlag ? <ErrorText /> : props.children}</>
}

export default ErrorBoundary;
