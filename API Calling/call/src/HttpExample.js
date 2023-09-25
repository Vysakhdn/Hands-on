import React, { Component } from 'react';

class HttpExample extends Component {
  state = {
    data: null,
    postData: {
      userId: 1,
      id: 101,
      title: '',
      body: '',
    },
    postResponse: null,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('GET request failed');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('GET request error:', error);
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      postData: {
        ...prevState.postData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(this.state.postData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('POST request failed');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ postResponse: data });
      })
      .catch((error) => {
        console.error('POST request error:', error);
      });
  };

  render() {
    return (
      <div>
        <h1>HTTP Requests Example</h1>

        {this.state.data && (
          <div>
            <h2>GET Request Result:</h2>
            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <h2>Make a POST Request</h2>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.postData.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              name="body"
              value={this.state.postData.body}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

       
        {this.state.postResponse && (
          <div>
            <h2>POST Request Result:</h2>
            <pre>{JSON.stringify(this.state.postResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default HttpExample;
