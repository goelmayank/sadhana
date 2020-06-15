import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Profile from './Profile';
import { PageContainer } from '../components';

export default function Pages() {
    return (
        <Fragment>
            <PageContainer>
                <Router primary={false} component={Fragment}>
                    <Wall path="/" />
                    <Profile path="profile" />
                </Router>
            </PageContainer>
        </Fragment>
    );
}
