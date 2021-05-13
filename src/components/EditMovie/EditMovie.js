import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormInput, FormDateInput, Button } from '..';
import { FIRST_BUTTON_TITLE, SECOND_BUTTON_TITLE } from './consts';
import { applyMovieToEdit } from '../../store/actions';
import styles from './EditMovie.module.scss';

const EditMovie = ({ closeEditMovieModal, applyMovieToEdit, movieToEdit, sort, filter }) => {
  const [title, setTitle] = useState(movieToEdit.title);
  const [posterPath, setPosterPath] = useState(movieToEdit.poster_path);
  const [overview, setOverview] = useState(movieToEdit.overview);
  const [runtime, setRuntime] = useState(movieToEdit.runtime);
  const [genres, setGenres] = useState(movieToEdit.genres);
  const [releaseDate, setReleaseDate] = useState(movieToEdit.release_date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMovieToEdit = {
      title,
      poster_path: posterPath,
      overview,
      runtime: Number(runtime),
      genres: typeof genres === 'string' ? genres.split(",") : genres,
      release_date: releaseDate,
      id: movieToEdit.id
    }
    applyMovieToEdit(updatedMovieToEdit, sort, filter)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.editMovieInput}>
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
      <div className={styles.editMovieInput}>
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
      <div className={styles.editMovieInput}>
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
      <div className={styles.editMovieInput}>
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
      <div className={styles.editMovieInput}>
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
      <div className={styles.editMovieInput}>
        <FormDateInput
          name="release_date"
          onChange={(e) => setReleaseDate(e.target.value)}
          value={releaseDate}
          label="Release date"
          required
        />
      </div>
      <div className={styles.editMovieFooter}>
        <div className={styles.editMovieButton}>
          <Button
            onClick={closeEditMovieModal}
            title={FIRST_BUTTON_TITLE} color="gray" size="big"/>
        </div>
        <div className={styles.editMovieButton}>
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
    movieToEdit: state.movieToEdit,
    sort: state.sort,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  applyMovieToEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
