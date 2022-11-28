import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchDatd'
import HorizonlasScrollBar from './HorizonlasScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [searchExercises, setSearchExercises] = useState('')
   
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

        setBodyParts(['all', ...bodyPartsData])
      }
      fetchExercisesData()
    }, [])
    

    const handleSearch = async () => {
        if (searchExercises) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

            const searchedExercise = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(searchExercises)
                || exercise.target.toLowerCase().includes(searchExercises)
                || exercise.equipment.toLowerCase().includes(searchExercises)
                || exercise.bodyPart.toLowerCase().includes(searchExercises)
            );

            setSearchExercises('')
            setExercises(searchedExercise)
        }
    }

    return (
        <Stack
            alignItems='center'
            mt='18rem'
            justifyContent='center'
            p='20px'>
            <Typography
                fontWeight='700'
                mb='50px'
                alignItems='center'
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                Exercises You Should Know
            </Typography>
            <Box
                position='relative'
                mb='70px'>
                <TextField
                    height='77px'
                    value={searchExercises}
                    onChange={e => setSearchExercises(e.target.value.toLowerCase())}
                    placeholder='Search exercises'
                    type='text'
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '350px' },
                        borderRadius: '40px'
                    }}
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#ff2625', color: '#fff',
                        width: { lg: '180px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute', right: '0'
                    }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>
            <Box sx={{position:'relative', width: '100%', p:'20px'}}>
                    <HorizonlasScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack >
    )
}

export default SearchExercises

// https://www.youtube.com/watch?v=KBpoBc98BwM&t=1445s&ab_channel=JavaScriptMastery 1/01