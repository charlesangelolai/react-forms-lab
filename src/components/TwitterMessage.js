import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      tweet: e.target.value,
    });
    console.log(this.state.tweet);
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.tweet}
          onChange={this.handleInputChange}
        />
        <p>{this.props.maxChars - this.state.tweet.length} remaining...</p>
      </div>
    );
  }
}

export default TwitterMessage;
