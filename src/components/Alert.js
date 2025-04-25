import React from 'react'

function Alert(props) {

  const lowercase = (word)=>{
    const words = word.toLowerCase();
    return words
  }
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${lowercase(props.alert.type)} alert-dismissible fade show`} role="alert">
      <strong> {props.alert.type} </strong>{props.alert.msg}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>}
  </div>
  )
}

export default Alert