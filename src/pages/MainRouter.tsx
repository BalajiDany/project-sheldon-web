import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoadingScreen from '../component/LoadingScreen';

const HomePage = React.lazy(() => import('./Home/Home'));
const AboutPage = React.lazy(() => import('./About/About'));

const MainRouter = () => {

    // ReactRouter
    // Ref: https://reactrouter.com/web/api
    return (
        <BrowserRouter>
            <Suspense fallback={ <LoadingScreen /> }>
                <Switch>
                    {
                        // Exact is not mentioned to hook nested Routing
                        // path can also accept list of string path={['/', '/home']}
                    }
                    <Route path={['/about', '/about/:name']} component={AboutPage} />
                    <Route path='/' component={HomePage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default MainRouter;
