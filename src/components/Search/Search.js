import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Grid,
  Icon,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';

const Search = ({
  countryCode,
  searchNewsHandler,
  getTopNewsHandler,
  countryHandler,
}) => {
  return (
    <Grid container spacing={8} alignItems="flex-end" justify="center">
      <Grid item className="search-icon-item">
        <Icon onClick={searchNewsHandler}> search </Icon>
      </Grid>
      <Grid item>
        <TextField
          id="search"
          label="Search news"
          type="search"
          onKeyPress={searchNewsHandler}
          margin="normal"
        />
      </Grid>
      <Grid item className="top-news-select-item">
        <Select
          labelId="country-select-label"
          id="country-select"
          className="top-news-select"
          value={countryCode}
          onChange={countryHandler}
        >
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="mx">Mexico</MenuItem>
          <MenuItem value="fr">France</MenuItem>
        </Select>
        <Button
          size="small"
          onClick={getTopNewsHandler}
          variant="contained"
          color="secondary"
        >
          Get top News
        </Button>
      </Grid>
    </Grid>
  );
};

Search.propTypes = {
  countryCode: PropTypes.string.isRequired,
  searchNewsHandler: PropTypes.func.isRequired,
  getTopNewsHandler: PropTypes.func.isRequired,
  countryHandler: PropTypes.func.isRequired,
};

export default Search;
