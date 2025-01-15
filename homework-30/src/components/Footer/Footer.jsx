import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {removeUserData} from "../../Redux/slicer/createSlicer.js";
import {useDispatch} from "react-redux";


const Footer = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeUserData());
    }
    return (
        <footer className="footer">
            <Stack direction="row" spacing={2}>
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFD700',  // Золотистый цвет
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#FFCC00',  // Темнее для ховера
                        },
                    }}
                >
                    Clear
                </Button>
            </Stack>
        </footer>
    )
}
export default Footer
