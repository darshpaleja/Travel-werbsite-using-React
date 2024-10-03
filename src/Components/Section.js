import React from 'react'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function Section(props) {

  return (
    <>
      <Box  component="section" sx={{bgcolor: '#f8f8f8', padding:'100px 0 0 70px'}}>
        <Box className='section-btn'>
            <Button  sx={{bgcolor: 'white', marginLeft:'50px' , color: '#41DDB8', fontWeight:'550',height:'40px',width:'140px', borderRadius:'20px', opacity:'0.6',boxShadow: 'rgba(0, 0, 0, 0.20) 0px 2px 10px'}}>Book With Us!</Button>
        </Box>

        <Box className='section-content' sx={{display:'flex', justifyContent:'space-around'}}>
            <Box className="innerText" sx={{ marginTop:'20px', width:'600px'}}>
              <Typography variant='h1' sx={{fontWeight:'600', fontFamily:'serif'}} fontSize={'84px'}>Find Next Place  To <span style={{color:'#5C98F2'}}>Visit</span></Typography>

              <Typography variant='body2' sx={{color: '#8C8C8C', fontSize:'20px', marginTop:'20px', lineHeight: '32px'}}>Welcome to Travel Tour, your gateway to unforgettable adventures! We specialize in curated travel experience that immerse you in the  heart of each destination. Whether you’re seeking serene escapes,  thrilling adventures, cultural deep dives, our expert guides are here  too help you explore the world like never before. From breathtaking  landscapes to vibrant local cultures. Join us as we create memories  that last a lifetime—your adventure awaits!</Typography>
            </Box>
            
            <Box className="innerImage" sx={{ display:{xs: 'none', md: 'block'}}} >
              <img width={400} src="https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Box>
        </Box>
      </Box>

    </>
  );
};

export default Section
