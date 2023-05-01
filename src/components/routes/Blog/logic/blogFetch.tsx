import { FetchPostsInterface, Order, OrderBy } from "../types/blogTypes";

const WpURL = 'http://localhost/wordpress/wp-json/wp/';

export const getPosts = ({orderBy = OrderBy.date, order = Order.desc, categories = 'all', offset = 0, limit = 10}: FetchPostsInterface): Promise<any> => {
    const posts = fetch(`${WpURL}v2/posts?orderby=${orderBy}&order=${order}&categories=${categories}&offset=${offset}&per_page=${limit}&_embed`, {
        method: 'GET'
    })
    .then(res => {
        if(res.status !== 200) return null;
        return res.json();
    })
    .catch(err => {
        throw new Error(err);
    })

    return posts;
}

export const getCategories = (): Promise<any> => {
    const categories = fetch(`${WpURL}v2/categories`, {
        method: 'GET'
    })
    .then(res => {
        if(res.status !== 200) return null;
        return res.json();
    })
    .catch(err => {
        throw new Error(err);
    })

    return categories;
}

export const getMedia = ({id}: {id: number}): Promise<any> => {
    const image = fetch(`${WpURL}v2/media/${id}`, {
        method: 'GET'
    })
    .then(res => {
        if(res.status !== 200) return null;
        return res.json();
    })
    .catch(err => {
        throw new Error(err);
    })

    return image;
}