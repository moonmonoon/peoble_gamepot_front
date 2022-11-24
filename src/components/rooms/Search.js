import {
  Avatar,
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from '@mui/material';
import { useValue } from '../../context/ContextProvider';
import { StarBorder } from '@mui/icons-material';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


import './room-style.css';

const Rooms = () => {
  const {
    state: { filteredRooms },
  } = useValue();
  return (
    <Container className='search-box'>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            label="검색어를 입력하세요."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Container>
  );
};

export default Rooms;
