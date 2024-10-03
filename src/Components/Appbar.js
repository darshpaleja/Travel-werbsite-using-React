import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-scroll';

const pages = ['Homes', 'Destinations', 'Tour List', 'Room List'];

function Appbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [age, setAge] = React.useState('');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <AppBar position="relative" sx={{ backgroundColor: '#f8f8f8', color: 'black', boxShadow: 'none', width: '100%' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Georgia',
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '23px',
                            width: '300px'
                        }}>
                        Travel <Typography variant='span' sx={{ color: 'cornflowerblue', paddingLeft: '4px' }}>Tour</Typography>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
                            onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                            keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none', }, }}>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, margin: '0 auto', justifyContent:'center'}}>
                        {pages.map((page) => (
                            <Link key={page} to={page.toLowerCase().replace(' ', '-')} smooth={true} duration={500} offset={-70}>
                                <Button onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'gray', display: 'block', pl: '20px', textTransform: 'capitalize', fontFamily: 'sans-serif', fontWeight: '500', fontSize: '16px' }}
                                    className='Navbtn'>
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <FormControl variant="standard" sx={{ mr: 2, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label"><Typography variant='span' sx={{ color: 'black' }}>Currency</Typography></InputLabel>
                            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange}
                                >
                                <MenuItem value={10}>USD</MenuItem>
                                <MenuItem value={20}>EUR</MenuItem>
                                <MenuItem value={30}>CHF</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box>
                        <Button variant="contained" size="medium" sx={{ backgroundColor: 'cornflowerblue', borderRadius: '9px', mt: '5px', fontFamily: 'Arial', fontWeight: '600' }}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Appbar;
