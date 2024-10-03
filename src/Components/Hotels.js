import React from 'react'
import Bed from './Images/double-bed.png'

function Hotels(props) {
  return (
    <>
    
        <div className="rooms-container"  id=''>
            
            <div className="rooms-card" style={{backgroundColor:'white', width:"278px", height:'436px', borderRadius:'15px', marginLeft:'20px'}}>
                <div className="rooms-img">
                    <img style={{height:"198px", width:"278px", borderRadius:'15px 15px 0 0'}} src={props.img} alt=""  />
                </div>

                <div className="rooms-info" style={{maxWidth:'278px', height:'236px', padding:'20px 40px'}}>
                    <h3 style={{fontSize:'23px', fontWeight:'400', fontFamily:"DM Serif Display", marginBottom:'0px'}}><a style={{textDecoration:'none', color:'black'}} href="#">{props.heading}</a> </h3>
                
                    <div className="rooms-review" style={{marginBottom:'15px'}}>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                        <i class="fa-solid fa-star" style={{color: '#FFD43B', fontSize:'11px'}}></i>
                        <span style={{fontSize:'11px'}}>{props.review}</span>
                    </div>

                    <div className="rooms-info" style={{margin:'30px 0px 10px 0px', height:'50px'}}>
                        <img src={Bed} style={{color:'000', marginRight:'13px', width:'28px', height:'28p'}} />
                        <span style={{color:'#848484', lineHeight:'50px', fontFamily:"DM Sans", position:'relative', bottom:'40px', left:'40px' , fontSize:'14px', fontWeight:'500', display:'inline' }}>{props.type}</span>
                    </div>

                    <div className="rooms-price">
                        <span style={{marginRight:'10px', color:'black',fontFamily:"DM Sans ", fontSize:'18px'}}>{props.from}</span>
                        <span style={{marginRight:'10px', color:'black',fontFamily:"DM Sans ", fontSize:'15px'}}>{props.discount}</span>
                        <span style={{color:'cornflowerblue', fontWeight:'600', fontSize:'20px', fontFamily:"DM Sans "}} >{props.price}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hotels
