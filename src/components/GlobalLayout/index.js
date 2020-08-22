import React, { Component } from 'react';
import Header from './Header';
import './index.scss';

class GlobalLayout extends Component { 
    render() {
        return (
            <div className={'global-layout-container'}>
                <Header />
                <div className={'global-layout-body'}>
                    {this.props.body}
                </div>
            </div>
        )
    }
}

export default GlobalLayout;