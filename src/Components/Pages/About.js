import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className=' container mb-2 bg-light '>

        <div className='container text-center bg-light' >
          <h2><u>About US</u></h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-4'>
              <div style={{border:"1px solid black"}}>
                 <img src='./pharmasisit.jpeg' style={{width:"100%", height:"100%"}}/>
              </div>
            </div>
            <div className='col-md-6' >
              <h3 className='mb-5 mt-4'>* Welcome To Warbhe Pharma *</h3>
              <h6>* Warbhe pharma is wholseller distributor of major pharmacetical,<br/> helthcare, baby care and    
                     third party manufacturer in india.</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;