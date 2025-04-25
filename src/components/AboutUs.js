import React from 'react'

export default function AboutUs(props) {

   let mystyle={
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
   }

  return (
    <div className="conatiner m-3">
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>
          About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={mystyle}>
         Analyze My Website
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
        This code is written by Me in React-Js which I learnt from CodewithHarry and he is such a big contributer in my learning
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
          Special Thanks
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
      This code is written by Me in React-Js which I learnt from CodewithHarry and he is such a big contributer in my learning
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
          Must Read!
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
       Checkout more website by me soon
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
