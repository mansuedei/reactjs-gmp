import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormInput, FormDateInput, Button } from '..';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { applyMovieToAdd } from "../../store/actions";
import styles from './AddMovie.module.scss';

const AddMovie = ({ closeAddMovieModal, applyMovieToAdd, sort, filter }) => {
  const [title, setTitle] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [overview, setOverview] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genres, setGenres] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieToAdd = {
      title,
      poster_path: posterPath,
      overview,
      runtime: Number(runtime),
      genres: genres.split(","),
      release_date: releaseDate
    }
    applyMovieToAdd(movieToAdd, sort, filter)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.addMovieInput}>
        <FormInput
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
          label="Title"
          required
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="poster_path"
          name="poster_path"
          onChange={(e) => setPosterPath(e.target.value)}
          value={posterPath}
          placeholder="Movie URL here"
          label="Movie URL"
          required
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="overview"
          name="overview"
          onChange={(e) => setOverview(e.target.value)}
          value={overview}
          placeholder="Title Overview here"
          label="Overview"
          required
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="runtime"
          name="runtime"
          onChange={(e) => setRuntime(e.target.value)}
          value={runtime}
          placeholder="Runtime here"
          label="Runtime"
          required
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormInput
          id="genres"
          name="genres"
          onChange={(e) => setGenres(e.target.value)}
          value={genres}
          placeholder="Genres"
          label="Genres"
          required
        />
      </div>
      <div className={styles.addMovieInput}>
        <FormDateInput
          name="release_date"
          onChange={(e) => setReleaseDate(e.target.value)}
          value={releaseDate}
          label="Release date"
          required
        />
      </div>
      <div className={styles.addMovieFooter}>
        <div className={styles.addMovieButton}>
          <Button
            onClick={closeAddMovieModal}
            title={FIRST_BUTTON_TITLE} color="gray" size="big"/>
        </div>
        <div className={styles.addMovieButton}>
          <Button
            type="submit"
            title={SECOND_BUTTON_TITLE}
            color="red"
            size="big"
          />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {

  return {
    movieToAdd: state.movieToAdd,
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  applyMovieToAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
