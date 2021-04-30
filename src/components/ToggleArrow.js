import React from 'react';

const ToggleArrow = ({question}) => {
    return (
      <svg id={question} className="closed" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
    )
}

export default ToggleArrow