/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from '@material-ui/core';
import { VisibilityOffOutlined } from '@material-ui/icons';
import './Article.sass';

// eslint-disable-next-line react/prop-types
function Article({ title, hideArticleHandler, match, id }) {
  const articleLink = `${match.url === '/' ? 'newsfeed' : match.url}/${id}`;
  return (
    <Grid item xs={12}>
      <Card className="card">
        <div className="news-info">
          <Link to={articleLink}>{title}</Link>
          <Button
            size="small"
            onClick={() => hideArticleHandler(id)}
            variant="contained"
            color="primary"
            className="hide-btn"
          >
            <VisibilityOffOutlined />
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

Article.defaultProps = {
  title: '',
  id: 0,
  hideArticleHandler: () => {},
};

Article.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  hideArticleHandler: PropTypes.func,
};

export default Article;
