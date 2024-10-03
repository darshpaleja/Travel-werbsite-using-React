import React from 'react';
import Box from '@mui/system/Box';

function Card(props) {
  return (
    <Box 
      className='card' 
      sx={{ 
        bgcolor: '#f8f8f8', 
        borderRadius: '10px', 
        position: 'relative', 
        overflow: 'hidden', 
        maxWidth: '400px', 
        margin: '16px', 
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.07)', boxShadow: 3 }
      }}
    >
      <img 
        className='image' 
        src={props.image} 
        style={{ height: '268px', width: '100%', borderRadius: '10px' }} 
        alt="" 
      />

      <span className='days' 
            style={{ 
              padding: '5px 10px', 
              backgroundColor: '#5c98f2', 
              color: '#fff', 
              position: 'absolute', 
              top: '10px', 
              right: '10px', 
              borderRadius: '3px', 
              zIndex: 2 
            }}
      >
        {props.tour}
      </span>

      <Box 
        className='card-content' 
        sx={{ 
          padding: '30px', 
          textAlign: 'center', 
          opacity: 0, 
          transition: 'opacity 0.3s', 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          bgcolor: 'rgba(0, 0, 0, 0.5)', 
          color: 'white', 
          '&:hover': { opacity: 1 } 
        }}
      >
        <h2 className='h2' style={{ 
          fontFamily: 'DM Serif Display', 
          fontSize: '20px', 
          fontWeight: '400', 
          margin: '10px 0 5px' 
        }}>
          {props.heading}
        </h2>
        <p style={{ margin: '5px 0', fontSize:'14px' }}>{props.info}</p>
        <a href="#" style={{ color: 'cornflowerblue', textDecoration: 'none', marginTop: '5px', display: 'inline-block' }}>
          View all Tours
        </a>
      </Box>
    </Box>
  );
}

export default Card