export default function newsReducer(oldStor = {}, action) {
    switch (action.type) {
        case 'fetch_news':
            return { ...oldStor, allNews: action.payload };
        case 'fetch_news_by_id':
            return { ...oldStor, newsItem: action.payload };
        default:
            return oldStor;
    }
};


