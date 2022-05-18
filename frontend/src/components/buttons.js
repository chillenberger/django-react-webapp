import React from 'react'

function SubmitButton(props) {
  return (
    <button type='submit' style={{padding: '0px', background: 'none', border: 'none'}}>
      <div className="card">
        <p className="cardHeader">{props.title}</p>
      </div>
    </button>
  )
}

export {
  SubmitButton
};
