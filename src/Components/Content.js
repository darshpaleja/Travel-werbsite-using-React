import { Typography } from '@mui/material'
import { FaArrowRightLong } from "react-icons/fa6";
import Box from '@mui/system/Box';
import React from 'react'

function Content() {
  return (
    <>
        <Box className='xy' id='' component="section" sx={{bgcolor: '#f8f8f8', padding:'10px 0 0 70px'}}>
            <Box>
              <Typography sx={{fontFamily:'DM Serif Display', lineHeight:'2',textAlign:'center', marginTop:'50px'}} variant='h3'>Top <Typography sx={{color:'#5C98F2', fontFamily:'DM Serif Display'}} variant='span'>Destinations</Typography></Typography>
              <Typography  sx={{fontSize:'18px', color:'#848484', fontFamily:'DM Sans', marginTop:'30px', textAlign:'center'}}>Explore our top destinations voted by more than 100,000+ <br /> customers around the world.</Typography>
            </Box>
            
            <Box className='anch-link' sx={{marginTop:'30px', display:'flex', justifyContent:'center'}}>
              <a href="#" style={{textDecoration:'none',color:'#343434', borderBottom:'2px solid #d1d1d1', borderWidth:'0px 0px 2px 0px', padding:'0 0 5px 0', fontFamily:'DM Sans', fontWeight:'500', fontSize:'16px'}}>All Destinations <FaArrowRightLong  color='#afafaf'/>
              </a>
            </Box>
        </Box>
    </>
  )
}

export default Content
