import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import reducer from './Reducer';
import { syncPosts } from '../../actions/Posts';
import { connectWithStore } from '../../utils/HOC';
import { createStoreWithDep } from '../../utils/Store';
import LoadingScreen from '../../component/LoadingScreen';
import { Modal as PostModal } from '../../reducers/Posts';

interface Props {
    posts?: PostModal[],
    syncPosts?: () => void,
}

const Home = (props: Props) => {

    const { syncPosts } = props;

    // Equal to coponent Did Mount
    // Seperate function to bypass eslint warning
    const onComponentDidLoad = () => {
        syncPosts && syncPosts();
    };
    useEffect(onComponentDidLoad, []);

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Link to='/about'>About</Link>
            <h1>Home</h1>
            { props.posts ? props.posts.map((post, index) => <h3 key={index}>{post.title}</h3>) : <LoadingScreen /> }
        </div>
    );
};

const store = createStoreWithDep(reducer);

const mapStatetoProps = (state: any) => {
    const { home } = state;
    return { posts: home.posts };
};

const mapDispatchToProps = { syncPosts };

export default connectWithStore(store, connect(mapStatetoProps, mapDispatchToProps)(Home));
