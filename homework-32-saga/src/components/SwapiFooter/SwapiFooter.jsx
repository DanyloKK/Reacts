import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const SwapiFooter = () => {
    return (
        <footer className="footer">
            <Stack direction="row" spacing={2}>
                <Button
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
export default SwapiFooter