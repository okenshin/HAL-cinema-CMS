import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function buyButtons() {
  return (
    <Stack spacing={4} flex-direction = "column">
      <Button variant="contained" sx={{ width: 800 , height: 70 , fontSize: 20}}>予約から</Button>
      <Button variant="contained" sx={{ width: 800 , height: 70 , fontSize: 20}}>座席から</Button>
    </Stack>
  );
}
