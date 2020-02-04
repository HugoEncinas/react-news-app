export default class NewsService {
  static getNews(searchTerm = '', topNews = false, countryCode = 'us') {
    const apiKey = '803fdd9b8517490d89d8c85ade466b8d';
    let url;
    if (topNews) {
      url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2020-01-30&sortBy=popularity&apiKey=${apiKey}`;
    }

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          data.articles.forEach((element, index) => {
            // eslint-disable-next-line no-param-reassign
            element.id = index;
          });
          return data.articles;
        }
        return {};
      })
      .catch(err => {
        return [err];
      });
  }
}
