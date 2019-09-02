import React from 'react';
import LazyLoad from 'react-lazyload';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

const defaultStyle = {
    transition: `opacity ${2000}ms ease-in-out`,
    opacity: 0,
}
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

class FadeIn extends React.Component {
    state = {
      loaded: false,
    };
    onLoad = () => this.setState({ loaded: true });
   
    render() {
      const { height, children } = this.props,
        { loaded } = this.state;
   
      return (
        <LazyLoad height={height} offset={150}>
          <Transition in={loaded} timeout={3}>
            {state =>
              <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                {children(this.onLoad)}
              </div>}
          </Transition>
        </LazyLoad>
      );
    }
  }
  FadeIn.propTypes = {
    height: PropTypes.number,
    children: PropTypes.func,
  };

  export default FadeIn;