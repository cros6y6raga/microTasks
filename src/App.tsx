import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <>
            <Header titleForHeader={'new header'}/>
            <Body titleForBody={'new body'}/>
            <Footer titleForFooter={'new footer'}/>
        </>
    );
}

export default App;
