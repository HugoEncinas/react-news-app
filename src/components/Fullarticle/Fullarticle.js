/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import './Fullarticle.sass';

// eslint-disable-next-line react/prop-types
function Fullarticle({ title, index, hideArticleHandler, data, match }) {
  const [article, setArticle] = useState({ title: '' });

  useEffect(() => {
    setArticle(data.find(item => item.id.toString() === match.params.newsId));
  }, [data, match.params.newsId]);

  const parseISOString = isoString => {
    if (isoString) {
      const b = isoString.split(/\D+/);
      return new Date(
        // eslint-disable-next-line no-plusplus
        Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
      ).toString();
    }
    return undefined;
  };

  return (
    <Grid item xs={12}>
      {article && (
        <div>
          <h3>{article.title}</h3>
          <p>
            author: {article.author || 'anonymous'}, date:{' '}
            {parseISOString(article.publishedAt)}
          </p>
          <p>{article.description}</p>
          <img className="article-img" src={article.urlToImage} alt="article" />
        </div>
      )}
    </Grid>
  );
}

Fullarticle.defaultProps = {
  title: '',
  index: 0,
  hideArticleHandler: () => {},
};

Fullarticle.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  hideArticleHandler: PropTypes.func,
};

export default Fullarticle;
