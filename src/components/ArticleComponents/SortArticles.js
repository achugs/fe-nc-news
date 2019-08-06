import React, { Component } from 'react';

class SortArticles extends Component {
  state = {
    sort_by: 'created_at',
    // order: 'desc'
  }
  render() {
    return (
      <form>
        <label>
          <select value={this.state.sort_by} onChange={this.handleChange}>
            <option value={"created_at"}>created_at</option>
            <option value={"votes"}>votes</option>
            <option value={"topic"}>topic</option>
            <option value={"comment_count"}>comments</option>
          </select>
        </label>
      </form>
    );
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ sort_by: e.target.value })


  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.sort_by !== this.state.sort_by) {
      this.props.fetchArticleData({ sort_by: this.state.sort_by })
    }
  }
}

export default SortArticles;
