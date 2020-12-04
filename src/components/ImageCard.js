import React from 'react';

class ImageCard extends React.Component {
constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // React Refs gives access to a single DOM element, we use Ref in place of using something like document.querySelector('img').clientHeight.
    this.imageRef = React.createRef();
}

// componentDidMount() only gets called after this gets rendered.
componentDidMount() {
   this.imageRef.current.addEventListener('load', this.setSpans)
}

// Remember to bind callbacks or the value of 'this' will be undefined. We do this by using an arrow function. This will bind the appropriate value of this inside of it.
setSpans = () => {
const height = this.imageRef.current.clientHeight;

const spans = Math.ceil(height / 10);

this.setState({ spans: spans });

}

render () {
const { description, urls } = this.props.image;

    return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
         />
        </div>
    )
}
}


export default ImageCard;