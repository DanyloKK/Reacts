import React, { useRef } from 'react';
import { Box, TextField, Button } from '@mui/material';
import {useDispatch} from 'react-redux';
import {getUserInfo} from "../../Redux/slicer/createSlicer.js";

const Input = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const inputValue = () => {
        return inputRef.current.value;
    };

    const handleClick = () => {
        const searchTerm = inputValue(); // Получаем значение из инпута
        dispatch(getUserInfo(searchTerm)); // Передаем значение в getUserInfo
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Search field"
                    type="search"
                    variant="standard"
                    inputRef={inputRef}
                    sx={{
                        width: '80ch',
                    }}
                    InputProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        },
                    }}
                />
                <Button
                    onClick={handleClick}
                    color="secondary"
                    sx={{
                        marginTop: '5px',
                        backgroundColor: '#A9A9A9',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#FFCC00', // Более темный оттенок для ховера
                        },
                    }}
                >
                    Get info
                </Button>
            </Box>
        </div>
    )
}
export default Input;
