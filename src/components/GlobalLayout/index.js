import React, { Component } from 'react';
import Header from './Header';
import './index.scss';

/*
*   Component: GlobalLayout
*   Purpose: Global stylings at the topmost point of the application to manage Header and Body Placement
*/

const GlobalLayout = ({
    body
}) => (
    <div className={'global-layout-container'}>
        <Header />
        <div className={'global-layout-body'}>
            {body}
        </div>
    </div>
)

export default GlobalLayout;