import axios from 'axios';

const URL = 'http://localhost:8800';


export const getNews = async (page, size = 5) => {
    try {
        const a=await axios.get('http://localhost:8800/news?page=0&size=25')
        console.log(a)
        return a;
        
    } catch (error) {
        console.log('error while calling getNews API');
    }
}