import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { fetchNews } from '../store/actions/indexAction';

import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import newsReducer from './../store/reducers/newsReducer ';

const Home = () => {
    const allNews = useSelector((store) => store.newsReducer.allNews);
    console.log(allNews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());

    }, [dispatch]);


    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
    };
    return (
        <React.Fragment>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {allNews ? (
                    allNews.map((ele, idx) => {
                        return (<div key={idx}>
                            <img alt='' src={ele.image} className='responsive-img' />
                            <div className="author">
                                <span>{ele.author}</span>
                            </div>
                            <div className="content">
                                <div className="tittle">{ele.tittle}</div>
                                <div className="excerpt">
                                    {ele.content}
                                </div>
                                <LinkContainer to={`/news/${ele._id}`}>
                                    <Button variant="primary mt-2">Read More</Button>
                                </LinkContainer>
                            </div>
                        </div>)
                    })
                ) : null}

            </Masonry>
        </React.Fragment>
    )
}

export default Home
