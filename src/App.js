import './App.css';
import Box from '@mui/system/Box';
import Appbar from './Components/Appbar';
import Slider from "react-slick";
import Section from './Components/Section';
import Content from './Components/Content';
import Freshlytours from './Components/Freshlytours';
import Hotels from './Components/Hotels'
import Card from './Components/Card';
import Europe from './Components/Images/europe.png'
import Africa from './Components/Images/africa.avif'
import Scandinavia from './Components/Images/Scandinavia.jpg'
import Egypt from './Components/Images/Egypt.jpg'
import Asia from './Components/Images/Asia.jpg'
import Newyork from "./Components/Images/New-york.jpg";
import Populartours from './Components/Populartours';
import Elephant from "./Components/Images/elephant.avif";
import Dubai from "./Components/Images/dubai.avif";
import Milan from "./Components/Images/milan.avif";
import Paris from './Components/Images/Paris.jpg'
import Oahu from './Components/Images/Ohu.avif'
import Turtle from './Components/Images/tuttle.jpg'
import Moscow from './Components/Images/mosc.avif'
import Bali from './Components/Images/Bali.avif'
import Sitzerland from './Components/Images/Sitzerland.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import Room1 from './Components/Images/room1.jpg'
import Room2 from './Components/Images/room2.jpg'
import Room3 from './Components/Images/room3.jpg'
import Room4 from './Components/Images/room4.jpg'
import Room5 from './Components/Images/room5.jpg'
import Room6 from './Components/Images/room6.jpg'
import Lenis from 'lenis'
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1042,
        settings: {
          slidesToShow: 3, // Show 2 slides for screens < 1024px
        }
      },
      {
        breakpoint: 806,
        settings: {
          slidesToShow: 1, // Show 1 slide for screens < 600px
        }
      }
    ]
  };

  const cardsData = [
    { tour: '3 Tours', image: Europe, heading: 'Western Europe', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia' },
    { tour: '2 Tours', image: Africa, heading: 'South Africa', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia…' },
    { tour: '2 Tours', image: Scandinavia, heading: 'Scandinavia', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia…' },
    { tour: '4 Tours', image: Egypt, heading: 'Egypt', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia…' },
    { tour: '5 Tours', image: Asia, heading: 'Asia', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia…' },
    { tour: '6 Tours', image: Newyork, heading: 'America', info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia…' },
  ];

  return (
    <>
      <Box>
        <Appbar />
        <Section />
        <div id="destinations">

        <Content />
        </div>
        <div style={{ backgroundColor: '#f8f8f8', padding: '60px 0 30px' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {cardsData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                tour={card.tour}
                heading={card.heading}
                info={card.info}
              />
            ))}
          </Box>
        </div>

        <div style={{ backgroundColor: '#f8f8f8' }}>
          <Populartours />
        </div>

        <div style={{ backgroundColor: '#f8f8f8' }}>
          <div className="slider-container" style={{ padding: '40px' }}>
            <Slider {...settings}>
              <div>
                <Freshlytours img={Elephant} heading='Africa - Amazing African Safari' review='(23 review)' from='From' price='$100' />
              </div>
              <div>
                <Freshlytours img={Dubai} heading='Dubai - All Stunning Places' review='(58 review)' from='From' price='$1200' />
              </div>
              <div>
                <Freshlytours img={Milan} heading='Venice, Rome and Milan - 9 Days' review='(42 review)' from={<del>$4300</del>} price='$3500' />
              </div>
              <div>
                <Freshlytours img={Paris} heading='Enquiry Form Only - Paris - 6 Days' review='(84 review)' from={<del>$3700</del>} price='$2000' />
              </div>
              <div>
                <Freshlytours img={Oahu} heading='5-Day Oahu Island Tour: Honolulu' review='(24 review)' from='From' price='$1500' />
              </div>
              <div>
                <Freshlytours img={Turtle} heading='Molokini and Turtle Snorkeling' review='(10 review)' from='From' price='$80' />
              </div>
              <div>
                <Freshlytours img={Moscow} heading='Two Moscow City Tour of 7 days' review='(269 review)' from='From' price='$3500' />
              </div>
              <div>
                <Freshlytours img={Bali} heading='Discove the Culture and Beauty of Bali ' review='(269 review)' from='From' price='$3500' />
              </div>
              <div>
                <Freshlytours img={Sitzerland} heading='7-Days Sitzerland Thiriling Tour ' review='(269 review)' from='From' price='$3500' />
              </div>
            </Slider>
          </div>
          <Box className='anch-link' sx={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#343434', borderBottom: '2px solid #d1d1d1', borderWidth: '0px 0px 2px 0px', padding: '0 0 5px 0', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '16px' }}>View All Tours <FaArrowRightLong color='#afafaf' />
            </a>
          </Box>
        </div>


        <div style={{ backgroundColor: '#f8f8f8', padding: '60px 0 30px' }} id='room-list'>
          <h3 style={{ textAlign: 'center', margin: '0px 0 0 0', fontFamily: 'DM Serif Display', lineHeight: '2', fontSize: '3rem', fontWeight: '400' }}>Hotels <span style={{ color: '#5C98F2', fontFamily: 'DM Serif Display' }} >Rooms</span></h3>

          <div className="slider-container" style={{ padding: '40px' }}>
            <Slider {...settings}>
              <div>
                <Hotels img={Room1} heading='Luxury Suite' review='(399 Review)' from='From' price='$90' type='King Size' />
              </div>
              <div>
                <Hotels img={Room2} heading='Standard Deluxe' review='(215 Review)' from='From' discount={<del>$90</del>} price='$75' type='King Size' />
              </div>
              <div>
                <Hotels img={Room3} heading='The Penthouse' review='(720 Review)' from='From' price='$200' type='King Size' />
              </div>
              <div>
                <Hotels img={Room4} heading='Grand Suite Room' review='(421 Review)' from='From' discount={<del>$200</del>} price='$150' type='King Size' />
              </div>
              <div>
                <Hotels img={Room5} heading='Junior Suite Room' review='(230 Review)' from='From' price='$79' type='King Size' />
              </div>
              <div>
                <Hotels img={Room6} heading='Standard Room' review='(666 Review)' from='From' price='$90' type='King Size' />
              </div>
            </Slider>
          </div>
          <Box className='anch-link' sx={{ textAlign: 'center' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#343434', borderBottom: '2px solid #d1d1d1', borderWidth: '0px 0px 2px 0px', padding: '0 0 5px 0', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '16px' }}>View All Rooms <FaArrowRightLong color='#afafaf' />
            </a>
          </Box>
        </div>

        <Reviews />
        <Footer />

        <BackToTopButton />

      </Box>
    </>
  );
}

export default App;
