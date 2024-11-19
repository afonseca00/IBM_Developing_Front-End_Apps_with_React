import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className='content-rating'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam debitis dolorem fugit facilis, numquam commodi id, saepe assumenda, qui autem. Repellat voluptatum sapiente commodi at libero amet, omnis tempore.
          Harum perferendis voluptate qui? Sed, enim culpa quam sequi, ipsam, dolores accusamus beatae nisi fuga esse illum vitae nam modi. Voluptatum a doloremque, suscipit accusamus nemo voluptate sequi molestias? Cupiditate!
          Qui voluptatum neque inventore modi dolorem sapiente quaerat? Ipsa ut iure, reprehenderit repudiandae quasi facere id molestiae tempora maiores quia voluptatum. A odio perferendis laborum eum corrupti consectetur molestiae eaque?</p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}
export default ContentRating;