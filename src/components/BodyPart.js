import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/images/Icon.png'

const BodyPart = ({ bodyPart, setBodyPart, item }) => {
    return (
        <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'
            sx={bodyPart === item ?
                { background: 'transparent', borderTop: '4px solid #FF2625', width: '270px', height: '270px', cursor: 'pointer', gap: '47px' }
                : { background: 'transparent', borderTop: '4px solid #FF2625', width: '270px', height: '270px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={Icon} alt='icon' style={{ width: '40px', height: '40px' }} />
            <Typography fontSize='24px' textTransform='capitalize'>{item}</Typography>
        </Stack>
    )
}

export default BodyPart