import React, {useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsById} from '../store/actions/index';
import {useParams, useNavigate} from 'react-router-dom'; /* if we want to use params passed in app.js or anywhere in react */
import axios from 'axios';
import {toast} from 'react-toastify';
import Moment from 'react-moment';

const ShowNews = () => {
  const newsItem = useSelector((store) => store.newsReducer.newsItem);
  console.log(newsItem);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchNewsById(params.id)) /* if we want to call any action we need to use dispatch */
  },[dispatch, params])

  const deleteNewsFromDB = async () => {
    await axios.delete(`https://news-buzzr.onrender.com/news/${params.id}`);
    toast.success('Successfully deleted the news', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    navigate('/');
  }

  return (
    <>
      {newsItem ?(
       <div className='article_container'>
       <h1>{newsItem.title}</h1>
       <div style={{backgroundImage:`url(${newsItem.image})`}} className='image'></div>
       <div className='author'>
           <span>Created by: {newsItem.author}</span>
           <div>Created on:
              <Moment format="DD/MM/YYYY HH:mm">
                  {newsItem.createdAt}
              </Moment> 
            </div>
       </div>
       <div className='mt-3 content'>
         {newsItem.content}
       </div>
       <LinkContainer to={`/news/${params.id}/edit`}>
         <button className='btn btn-warning my-3 me-3'>Edit</button>
       </LinkContainer>
       <button onClick={deleteNewsFromDB} className='btn btn-danger my-3'>Delete</button>
     </div>)
     :null}
    </>
  )
}

export default ShowNews