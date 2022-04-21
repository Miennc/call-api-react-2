import {Axios} from './Axios';

function getArticles(payload,pageId) {
   return Axios.get(`everything?q=${payload}&from=2022-03-20&sortBy=publishedAt&apiKey=98c8859b367446d792b7b1e0d75b966e`);
}
export const homeServices = {
getArticles
};