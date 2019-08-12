import React, { Component } from 'react';
import styles from './SortArticles.module.css';

class SortArticles extends Component {

  state = {
    sort_by: 'created_at',
    order: 'desc'
  }

  render() {
    const { sort_by, order } = this.state;
    return (
      <form className={styles.sortBy}>
        <select value={sort_by} onChange={this.handleChangeSort}>
          <label for="sortBy">
            <option value={"created_at"}>created_at</option>
            <option value={"votes"}>votes</option>
            <option value={"comment_count"}>comments</option>
          </label>
        </select>
        <select value={order} onChange={this.handleChangeOrder}>
          <label for="orderBy">
            <option value={"desc"}>Descending</option>
            <option value={"asc"}>Ascending</option>
          </label>
        </select>
      </form>
    );
  }

  handleChangeSort = ({ target }) => {
    this.setState({ sort_by: target.value })
  }

  handleChangeOrder = ({ target }) => {
    this.setState({ order: target.value })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.props.fetchArticleData({ sort_by: sort_by })
    }
    if (prevState.order !== order) {
      this.props.fetchArticleData({ order: order })
    }
  }
}

export default SortArticles;
