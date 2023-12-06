import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export default function BasicModal(props) {
  const [movieID, setMovieID] = React.useState('');
  const [scheduleID, setScheduleID] = React.useState('');

  const handleChange = (event) => {
    setMovieID(event.target.value);
    setScheduleID(event.target.value);
  };
  

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            スケジュール情報新規追加
          </Typography>
           
          <FormControl fullWidth>
            <InputLabel id="movieID">映画ID</InputLabel>
            <Select
              labelId="movieID-label"
              id="movieID"
              value={movieID}
              label="movieID"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          
          <FormControl fullWidth>
            <InputLabel id="scheduleID">スケジュールID</InputLabel>
            <Select
              labelId="scheduleID-label"
              id="scheduleID"
              value={scheduleID}
              label="scheduleID"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>


    </Box>
      </Modal>
    </div>
  );
}