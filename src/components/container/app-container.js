import React from 'react';
import Header from './header';

const App = ({ children }) => (
    <div>        
        <div className="container pl-0 pr-0">
            <Header />
            <div className="col-lg-12 pl-0 pr-0">
                { children }
            </div>            
        </div>        
    </div>
);

export default App;