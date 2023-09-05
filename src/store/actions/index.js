import axios from 'axios';

const fetchNewsHelper = async () => {
    try {
        const res = await axios.get('https://news-buzzr.onrender.com/news')
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


export const fetchNews = () => {
    return ({
        type: 'fetch_news',
        payload: fetchNewsHelper()
    })
}

export const fetchNewsByIdHelper = async (id) => {
    try {
        const res = await axios.get(`https://news-buzzr.onrender.com/news/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchNewsById = (id) => {
    return(
        {
            type:'fetch_news_by_id',
            payload: fetchNewsByIdHelper(id)
        }
    )
}