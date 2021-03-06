import React from 'react';
import { connect, } from 'react-redux';
import { addBlog, } from './reducers/blogs'

class BlogForm extends React.Component {
  state = { name: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch, } = this.props;
    const { name, } = this.state;
    const blog = { name }
    dispatch(addBlog(blog))
    this.setState({ name: '', });
  }


  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  render() {

    return (
      <div>
        <h3>Add A Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}




export default connect()(BlogForm);
