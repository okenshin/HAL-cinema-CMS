import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';


export default function buyButtons() {
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/buy/buyselect/reserve');
  };

  return (
    <Stack spacing={2} flex-direction = "column">
      <Button variant="contained" sx={{ width: 800 , height: 70 , fontSize: 20}} onClick={handleClick}>予約から</Button>
      <Button variant="contained" sx={{ width: 800 , height: 70 , fontSize: 20}}>座席から</Button>
    </Stack>
  );
}

