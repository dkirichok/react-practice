import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

Button.defaultProps = { name: 'Click' };

export default Button;
