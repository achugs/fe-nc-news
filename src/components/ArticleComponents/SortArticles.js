import React, { Component } from "react";
import styles from "./SortArticles.module.css";

class SortArticles extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <form className={styles.sortBy}>
        <label>
          <select value={sort_by} onChange={this.handleChangeSort}>
            <option value={"created_at"}>created_at</option>
            <option value={"votes"}>votes</option>
            <option value={"comment_count"}>comments</option>
          </select>
        </label>
        <label name="orderBy">
          <select value={order} onChange={this.handleChangeOrder}>
            <option value={"desc"}>Descending</option>
            <option value={"asc"}>Ascending</option>
          </select>
        </label>
      </form>
    );
  }

  handleChangeSort = ({ target }) => {
    this.setState({ sort_by: target.value });
  };

  handleChangeOrder = ({ target }) => {
    this.setState({ order: target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.props.fetchArticleData({ sort_by: sort_by });
    } else if (prevState.order !== order) {
      this.props.fetchArticleData({ order: order });
    }
  };
}

export default SortArticles;
