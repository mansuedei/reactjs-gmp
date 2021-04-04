import React from "react";
import { FormInput, FormDateInput } from '../../components/';
import styles from './AddMovieModalContent.module.scss';

export class AddMovieModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      releaseDate: "",
      URL: "",
      genre: "",
      overview: "",
      runtime: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.addMovieInput}>
          <FormInput name="title" value={this.state.title} onChange={this.handleChange} text={true} placeholder="Title" label="Title"></FormInput>
        </div>
        <div className={styles.addMovieInput}>
          <FormDateInput name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} label="Release date"></FormDateInput>
        </div>
        <div className={styles.addMovieInput}>
          <FormInput name="URL" value={this.state.URL} onChange={this.handleChange} placeholder="Movie URL here" label="Movie URL"></FormInput>
        </div>
        <div className={styles.addMovieInput}>
          <FormInput name="genre" value={this.state.genre} onChange={this.handleChange} placeholder="Movie genre here" label="Genre">
          </FormInput>
        </div>
        <div className={styles.addMovieInput}>
          <FormInput name="overview" value={this.state.overview} onChange={this.handleChange} placeholder="Overview here" label="Overview"></FormInput>
        </div>
        <div className={styles.addMovieInput}>
          <FormInput name="runtime" value={this.state.runtime} onChange={this.handleChange} placeholder="Runtime here" label="Runtime"></FormInput>
        </div>

      </form>
    )
  }
};