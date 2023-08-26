import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsById } from '../store/actions/indexAction';
import { useParams } from 'react-router-dom';

const ShowNews = () => {
    const newsItem = useSelector((store) => store.newsReducer.newsItem);

    const dispatch = useDispatch();
    const params = useParams();


    useEffect(() => {
        dispatch(fetchNewsById(params.id));

    }, [dispatch, params]);


    return (
        <React.Fragment>
            {newsItem ? (
                <div className="article_container">
                    <h1>Tittle</h1>
                    <div style={{ backgroundImage: `url(${newsItem.image})` }} className="image"></div>
                    <div className="author">
                        <span>Created by:{newsItem.author} </span> <br />
                        <span>Created At:9:30PM</span>
                    </div>
                    <div className="mt-3 container">
                        {newsItem.content}
                    </div>
                    <LinkContainer to={'/news/:id/edit'}>
                        <Button variant="warning mt-2">Edit</Button>
                    </LinkContainer>
                    <Button variant="danger ms-2 mt-2">Delete</Button>

                </div>
            ) : null}
        </React.Fragment>
    )
}

export default ShowNews
