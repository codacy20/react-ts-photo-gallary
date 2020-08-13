import React, { Component } from "react";
import "./photo-gallary.css";

interface Photo {
  active: boolean;
  url: string;
  liked: boolean;
}

export default class PhotoGallary extends Component<{}, {}> {
  photos: Photo[] = [
    {
      active: false,
      url: "https://source.unsplash.com/CXIG4pALpzs/426x409",
      liked: false
    },
    {
      active: false,
      url: "https://source.unsplash.com/Nl1xSowK5x4/426x409",
      liked: false
    },
    {
      active: false,
      url: "https://source.unsplash.com/p8Clnd-MS8o/426x409",
      liked: false
    },
    {
      active: false,
      url: "https://source.unsplash.com/jFHTtR480uk/426x409",
      liked: false
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  toggle(input: number) {
    this.setState({
      current: input
    });
  }

  like() {
    this.photos[this.state.current].liked = !this.photos[this.state.current].liked;
    this.forceUpdate();
  }

  swipe(input: number) {
    let counter;
    if (this.state.current >= 0 && this.state.current <= 3) {
      counter = this.state.current;
      if (input === 0 && counter > 0) counter--;
      if (input === 1 && counter < 3) counter++;
      this.setState({
        current: counter
      });
    }
  }

  render() {
    let status = "";
    if (this.photos[this.state.current].liked) {
      status = <i class="material-icons">favorite</i>;
    } else {
      status = <i class="material-icons">favorite_border</i>;
    }
    return (
      <div className="container-image">
        <div className="swipe left" onClick={() => this.swipe(0)} />
        <div className="heart" onClick={() => this.like()}>
          {status}
        </div>
        <img src={this.photos[this.state.current].url} />
        <div className="nav">
          <div
            className={
              this.state.current == 0 ? "rectangle active" : "rectangle"
            }
            onClick={() => this.toggle(0)}
          />
          <div
            className={
              this.state.current == 1 ? "rectangle active" : "rectangle"
            }
            onClick={() => this.toggle(1)}
          />
          <div
            className={
              this.state.current == 2 ? "rectangle active" : "rectangle"
            }
            onClick={() => this.toggle(2)}
          />
          <div
            className={
              this.state.current == 3 ? "rectangle active" : "rectangle"
            }
            onClick={() => this.toggle(3)}
          />
        </div>
        <div className="swipe right" onClick={() => this.swipe(1)} />
      </div>
    );
  }
}
