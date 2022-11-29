import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button sx={{ ml: '21px', color: 'black', background: '#d32f2f', fontSize: '16px', borderRadius: '30px', textTransform: 'capitalize', textDecoration:'none' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: 'black', background: '#d32f2f', fontSize: '16px', borderRadius: '30px', textTransform: 'capitalize', textDecoration:'none' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='20px' color='#fff' fontWeight='bold' mt='10px' pb='10px' textTransform='capitalize' fontSize='20px'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard