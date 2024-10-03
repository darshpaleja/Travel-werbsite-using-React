import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="footer">
        <div className="footer-column">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Georgia',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '27px',
              width: '300px'
            }}
          >
            Travel <Typography variant='span' sx={{ color: 'cornflowerblue', paddingLeft: '4px' }}>Tour</Typography>
          </Typography>

          <Box sx={{ backgroundColor:'#333333', width:'100px',marginTop:'10px'}}>
            <FormControl variant="standard" sx={{ mr: 2, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label"><Typography variant='span' sx={{ color: 'white'}}>Currency </Typography> </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}

                label="Age"
                sx={{ border: '1 px solid blue' }}
              >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={10}>EUR</MenuItem>
                <MenuItem value={30}>CHF</MenuItem>
              </Select>
            </FormControl>

          </Box>
        </div>
        <div className="footer-column">
          <h3>Contact</h3> <br />
          <p>T: +1234567890</p> <br />
          <p>E: info@traveltour.com</p> <br />
          <div className="social-icons">
            <a href="https://www.instagram.com/darsshbhatia_/" className='footer-icon-color'><FaInstagram /></a>
            <a href="https://x.com/banti_paleja" className='footer-icon-color'><FaXTwitter /></a>
            <a href="https://github.com/darshpaleja" className='footer-icon-color'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/banti-paleja-8b54311a0/" className='footer-icon-color'><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3> <br />
          <p>Travel Blog & Tips</p> <br />
          <p>Working With Us</p><br />
          <p>Be Our Partner</p><br />
        </div>
        <div className="footer-column">
          <h3>Pay Safely With Us</h3> <br />
          <p>The payment is encrypted and transmitted securely with an SSL protocol.</p> <br />
          <div className="payment-option">
            <a href="" className='footer-icon-color' style={{fontSize:'24px'}}><FaCcVisa /></a>
            <a href="" className='footer-icon-color' style={{fontSize:'24px'}}><FaCcPaypal /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
