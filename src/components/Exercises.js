import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchDatd'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerRage = 9
  const lastIndexExercise = currentPage * exercisesPerRage
  const firstIndexExercise = lastIndexExercise - exercisesPerRage
  const currentExercises = exercises.slice(firstIndexExercise, lastIndexExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }


  // changing exercises when clicked on different categories
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px' color='#fff'>Showing Results</Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '100px', xs: '50px' } }}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerRage)}
            page={currentPage}
            onChange={paginate}
            size="large" />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises