import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { Fragment } from 'react'

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Header>
                </Header>
            </Fragment>
        )
    }
}

export default App;