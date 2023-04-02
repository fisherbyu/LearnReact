import React from "react";
//Card to Display Each Movies Information + Accept JSON Params
class MovieCard extends React.Component<{ Category: string; Title: string; Year: any; Director: string, Rating: string }> {
    render() {
      const movie = this.props;
      return (
        <div className='card'>
          
        </div>
      )
    }
  }

export default MovieCard;