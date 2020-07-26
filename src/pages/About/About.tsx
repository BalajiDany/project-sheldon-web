import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useRouteMatch, useParams, useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';

const About = () => {
    const routerMatch = useRouteMatch();
    const { name } = useParams();
    const location = useLocation();

    const query = queryString.parse(location.search);
    console.log(query);

    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Link to='/'>Home</Link>
            <Switch>
                <Route path={`${routerMatch.url}/partners`} render={() => (<h1>About Partners</h1>)} />
                <Route path={`${routerMatch.url}/`} render={() => {
                    return <h1>{`About ${name || 'All'}`}</h1>
                }} />
            </Switch>
        </div>
    )
};

export default About;
