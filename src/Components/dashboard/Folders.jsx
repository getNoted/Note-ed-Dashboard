import AddIcon from '@mui/icons-material/Add';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Folder from './Folder';



export default function Folders({setActive}) {
  const url = 'http://localhost:8000'
  const [folders, setFolders] = useState([])
  const [allFolders, setAllFolders] = useState([])
  const token=localStorage.getItem('token').toString();
  useEffect(() => {
    getFolders();
  
  }, [folders])
  

  const getFolders = async() => {
    console.log("Inside get folders");
    
    axios.get(`${url}/api/v1/folder/getfolders?deleted=false`,{
      headers : {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data);
      if(res.data.message === "success"){
        let arr = res.data.folders.map(x => x.folder_name )
        
        console.log(arr);
        setAllFolders(arr);
      }
      console.log(allFolders);
    }).catch((err) => {
      console.log(err);
    })

  }
  
  let foldername="Default";
 
  return (
    <div className='max-w-1/5 bg-light-green' >
        <Folder foldername={foldername} videos={allFolders} setActive={setActive} ></Folder>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon></AddIcon>
              </ListItemIcon>
              <ListItemText primary="Create Folder" />
            </ListItemButton>
          </ListItem>

        {/* {
          videos.map((video) => (
            <div>
                {video}
            </div>
          ))
        } */}

    </div>
  )
}
