import React, { useState, useEffect } from 'react'
import { Pagination } from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchDatd'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>Showing Results</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '100px', xs: '50px' } }}>
        {exercises.map((exercise, index) => {
          <ExerciseCard key={index} exercise={exercise} />
        })}
      </Stack>
    </Box>
  )
}

export default Exercises


// https://www.youtube.com/watch?v=KBpoBc98BwM&t=1445s&ab_channel=JavaScriptMastery 1/22