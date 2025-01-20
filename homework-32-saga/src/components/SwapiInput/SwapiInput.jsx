import {useEffect, useRef} from 'react';
import { Box, TextField, Button } from '@mui/material';
import {useDispatch} from 'react-redux';
import {fetchSwapiData} from "../../redux/slices/todoSlicer.js";

const SwapiInput = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const inputValue = () => {
        return inputRef.current.value;
    };
    const handleClick = () => {
        const searchTerm = inputValue();
        dispatch(fetchSwapiData(searchTerm));
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
                            color: 'black',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'black',
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
export default SwapiInput;