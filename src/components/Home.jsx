import React, {useEffect} from 'react';
import Masonry from 'react-masonry-css';
import { LinkContainer } from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../store/actions/index'


const Home = () => {

  const allNews = useSelector((store) => store.newsReducer.allNews);
  console.log(allNews);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchNews()) /* if we want to call any action we need to use dispatch */
  },[dispatch])

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            {allNews? allNews.map((ele, idx)=>{
              return(
              <div key={idx}>
                <img className='responsive-img' src= {ele.image} alt="" />
                <div className='author'>
                  <span>{ele.author}</span>
                </div>
                <div className='content'>
                  <div className='title'>{ele.title}</div>
                  <div className='excerpt'>{ele.content}</div>
                  <LinkContainer to={`/news/${ele._id}`}>
                    <button className='btn btn-info mt-3'>Read More</button>
                  </LinkContainer>
                </div>
              </div>
              )
            })
          : null}
      </Masonry>
    </>
  )
}

export default Home