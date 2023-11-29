import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  maxWidth: { xs: 320, sm: 700 },bgcolor: 'background.paper',marginBottom:'20px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
        <Tab label="Item One" />
      </Tabs>
    </Box>
  );
}
