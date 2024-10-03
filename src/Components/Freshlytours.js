import React from 'react'

function Freshlytours(props) {
  return (
    <>
      <div className="f-tour-container" >
        <div className="f-tour-card" style={{backgroundColor:'white', width:"278px", height:'436px', borderRadius:'15px', marginLeft:'20px'}}>
            <div className="f-tour-img">
                <img style={{height:"198px", width:"278px", borderRadius:'15px 15px 0 0'}} src={props.img} alt=""  />
            </div>

            <div className="f-tour-info" style={{maxWidth:'278px', height:'236px', padding:'32px 40px'}}>
                <h3 style={{fontSize:'22px', fontWeight:'400', fontFamily:"DM Serif Display", marginBottom:'0px', paddingRight:'50px'}}><a style={{textDecoration:'none', color:'black'}} href="#">{props.heading}</a> </h3>
            
                <div className="f-tour-review" style={{marginBottom:'15px'}}>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                    <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                    <span style={{fontSize:'11px'}}>{props.review}</span>
                </div>

                <div className="f-tour-price">
                    <span style={{marginRight:'10px', color:'grey',fontFamily:"DM Sans ", fontSize:'14px'}}>{props.from}</span>
                    <span style={{color:'cornflowerblue', fontWeight:'600', fontSize:'20px', fontFamily:"DM Sans "}} >{props.price}</span>
                </div>
            </div>
        </div>
      </div>

      
    </>
  )
}

export default Freshlytours
