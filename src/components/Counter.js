import React from 'react'

export default (props) => {
  function handleOnClick(){
    props.store.dispatch({type: 'INCREASE_COUNT'})
    console.log(props.store.getState().count)
  }
  return (
    <div>
      <button onClick={handleOnClick}>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
