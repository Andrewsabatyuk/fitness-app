import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImg from '../assets/images/HeroBanner.jpg'

const HeroBanner = () => {
   return (
      <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position='relative' p='20px'>
         <Typography color='#ff2625'
            fontWeight='600' fontSize='26px'>
            Fitness Club
         </Typography>
         <Typography fontWeight='700' sx={{fontSize: {lg: '45px', xs: '40px'}}}>
            Sweat, Smile <br /> and Repeat
         </Typography>
         <Typography fontSize='40px' lineHeight='35px' mb={2.8}>
            Check out most effective exercises
         </Typography>
         <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
         <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/>
      </Box>
   )
}

export default HeroBanner