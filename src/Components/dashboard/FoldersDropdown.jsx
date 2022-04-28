


 import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function BasicSelect(props) {
  const [folder, setFolder] = React.useState('');
<<<<<<< HEAD

  const API_URL = 'http://backend-1.prathameshdukare.repl.co'

=======
  const api_url = 'https://backend-1.prathameshdukare.repl.co'
>>>>>>> 76c573fe4b711b42d6bc74d35c650c0117283492
  const handleChange = (event) => {
    setFolder(event.target.value);
    props.changeFolder(event);
  };

  const [folders,setFolders]=useState();

    useEffect(()=>{
     const token=localStorage.getItem('token').toString();
<<<<<<< HEAD
     axios.get(`${API_URL}/api/v1/folder/getfolders?deleted=false`, {
=======
     axios.get(`${api_url}/api/v1/folder/getfolders?deleted=false`, {
>>>>>>> 76c573fe4b711b42d6bc74d35c650c0117283492
         headers: {
             Authorization: `Bearer ${token}`
         }
     }).then(data=>{
         console.log(data.data);
         setFolders(data.data.folders);
     })
 },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Folder</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={folder}
          label="Folder"
          onChange={handleChange}
        >
         {folders && folders.map(folder=>{
            return <MenuItem value={folder.folder_name}>{folder.folder_name}</MenuItem>
         })}
          
        </Select>
      </FormControl>
    </Box>
  );
}