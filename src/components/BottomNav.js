import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useRef, useState } from 'react';

import Gamepot from './map/Gamepot';
import Search from './rooms/Search';
import Profile from './addRoom/Profile';
import Protected from './protected/Protected';


const BottomNav = () => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box ref={ref}>
      {
        {
          0: <Gamepot />,
          1: <Search />,
          2: (
            <Protected>
              <Profile setPage={setValue} />
            </Protected>
          ),
        }[value]
      }
      <Paper
        elevation={3}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          sx={{ "& .Mui-selected": {color: "#2228B2"} }}
        >
          <BottomNavigationAction  icon={<HomeIcon />}/>
          <BottomNavigationAction icon={<LocationSearchingIcon />} />
          <BottomNavigationAction icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
