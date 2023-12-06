import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  bgcolor: 'background.paper',marginBottom:'20px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
        <Tab label="A" />
      </Tabs>
    </Box>
  );
}
