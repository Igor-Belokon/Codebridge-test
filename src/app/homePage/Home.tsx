import { Box, Stack } from '@mui/material';
import { FC } from 'react';

const Home: FC = () => (
  <Box component="main">
    <Stack
      sx={{ bgcolor: 'success.main', flex: 1 }}
      direction="row"
      justifyContent="space-between"
    ></Stack>
  </Box>
);

export default Home;
