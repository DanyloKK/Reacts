import { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import selectors from '../../redux/slices/selectors';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchStart } from "../../redux/slices/todosSlice";

const ItemsList = () => {
  const items = useSelector(selectors.items);
  const isLoading = useSelector(selectors.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  const handleClick = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: '10px' }}>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <Divider />
            <ListItem>
              <ListItemText primary={item.text} />
              <Button variant="outlined" color="error" type='submit' style={{ height: "56px" }} onClick={() => handleClick(item.id)} disabled={isLoading}>
                Delete
              </Button>
            </ListItem>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default ItemsList;
