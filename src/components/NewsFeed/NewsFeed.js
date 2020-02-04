/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';
import Search from '../Search';
import Article from '../Article';
import Fullarticle from '../Fullarticle';
import NewsService from '../../services/newsService';
import './NewsFeed.sass';

function NewsFeed({ match }) {
  const [searchValue, setSearchValue] = useState('');
  const [news, setNews] = useState([]);
  const [countryCode, setCountryCode] = useState('us');

  const searchNewsHandler = event => {
    if (event.type === 'click' || event.charCode === 13) {
      const search = document.querySelector('#search');
      const searchWord = search.value.toLowerCase();
      search.value = '';
      setSearchValue(searchWord);
    }
  };

  const getTopNewsHandler = () => {
    return new Promise(() => {
      NewsService.getNews('', true, countryCode).then(newsFromSearch => {
        setNews([...newsFromSearch]);
      });
    });
  };

  const hideArticleHandler = id => {
    const filteredNews = news.filter(element => {
      return element.id !== id;
    });
    setNews(filteredNews);
  };

  const countryHandler = event => {
    setCountryCode(event.target.value);
  };

  useEffect(() => {
    async function searchNews() {
      const newsFromSearch = await NewsService.getNews(searchValue);
      setNews([...newsFromSearch]);
    }
    if (searchValue) {
      searchNews();
    }
  }, [searchValue]);

  return (
    <div>
      <Container maxWidth="md">
        <Typography className="title" variant="h3">
          News
        </Typography>
        <Search
          searchNewsHandler={searchNewsHandler}
          getTopNewsHandler={getTopNewsHandler}
          countryHandler={countryHandler}
          countryCode={countryCode}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            {news.map((article, index) => {
              return (
                <Article
                  key={article.id}
                  title={article.title}
                  index={index}
                  hideArticleHandler={hideArticleHandler}
                  id={article.id}
                  match={match}
                />
              );
            })}
            {news.length === 0 && <p>No news</p>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Route
              path={`${match.url}/:newsId`}
              // eslint-disable-next-line react/jsx-props-no-spreading
              render={props => <Fullarticle data={news} {...props} />}
            />
            <Route
              exact
              path={match.url}
              render={() => <div>News content</div>}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NewsFeed;
