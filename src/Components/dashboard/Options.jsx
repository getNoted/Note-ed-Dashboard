import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import * as React from 'react';
import FolderDropdown from './FoldersDropdown';
export default function Options(props) {
  const token=localStorage.getItem('token').toString();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen,setModalOpen]=React.useState(false);
  const [newFolderName,setFolderName]=React.useState();
  const [title,setTitle]=React.useState();
  const [modalType,setModalType]=React.useState("");
  const open = Boolean(anchorEl);

  const api_url = 'https://noted-backend-v1.vercel.app'

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleModalClose=()=>{
  setModalOpen(false);
}
const handleModalOpen=(e)=>{
  console.log(e.target.tabIndex);
  setModalType(e.target.tabIndex);
  setModalOpen(true);
}
const changeFolder=(e)=>{
  setFolderName(e.target.value);
}

const submitChangeFolder=()=>{
  console.log("hereeeee");
  if(!newFolderName){
    console.log("folder name is null");
    return;
  }
  
  axios.post(`${api_url}/api/v1/video/changefolder`,{
    video_id:props.video_id,
    folder_name:newFolderName
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       console.log(data);
       if(data.status===200){
         handleModalClose();
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     })
}


const submitTitle=()=>{
  if(!title){
    console.log("name is null");
    return;
  }
  
  props.folders?axios.post(`${api_url}/api/v1/folder/editname`,{
    new_folder_name:title,
    old_folder_name:props.folder_name,
    folder_id:props.folder_id
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       console.log(data);
       if(data.status===200){
         handleModalClose();
         props.updateFolderName(title);
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     }):axios.post(`${api_url}/api/v1/video/editname`,{
    video_id:props.video_id,
    new_video_name:title
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       console.log(data);
       if(data.status===200){
         handleModalClose();
         props.updateVideoName(title);
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     })
}


const deleteVideo=()=>{
  props.folders?axios.post(`${api_url}/api/v1/folder/delete`,{
    folder_id:props.folder_id,
    folder_name:props.folder_name
    
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       if(data.status===200){
         props.deleteFolderFromArray(props.folder_id);
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     }):axios.post(`${api_url}/api/v1/video/delete`,{
    video_id:props.video_id,
    
   },{
        
         headers: {
             Authorization: `Bearer ${token}`
         },
         
         
     }).then(data=>{
       if(data.status===200){
         props.deleteVideoFromArray(props.video_id);
       }
       else{
         console.log(data);
       }
     }).catch(err=>{
       console.log(err);
     })
}


  return (
    <div className='flex self-center'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='self-end'
      >
        <MoreHorizIcon className='text-gray-50 ' style={{ color: "gray"
}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style = {{"color" : "white"}}
      >
        
        {/* <MenuItem onClick={(e)=>{
          handleClose();
          handleModalOpen(e);
        }}>Edit Name</MenuItem>
        {!props.folders && <MenuItem onClick={(e)=>{
          handleClose();
          handleModalOpen(e);
        }}>Change Folder</MenuItem>}
        <MenuItem onClick={()=>{
          handleClose();
          deleteVideo();
        }}>Delete</MenuItem> */}
        <MenuItem onClick={(e)=>{
          handleClose();
          handleModalOpen(e);
        }}>Edit Name</MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          deleteVideo();
        }}>Delete</MenuItem>
      </Menu>

      
<Modal
  open={modalOpen}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
  <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={handleModalClose}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{modalType===-1?"Change Folder":"Edit Name"}</h3>
               
                {modalType===-1? <FolderDropdown changeFolder={changeFolder}></FolderDropdown>: <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{props.folders?"Folder Name":"Video Name"}</label>
                  <input value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                  }} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-new-blue focus:border-new-blue block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={props.folders?"Folder Name":"Video Name"} required />
                </div>}
               
               
                
                <button type="button" className="w-full text-white bg-new-blue hover:bg-new-green focus:ring-4 focus:outline-none focus:ring-new-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-new-blue dark:hover:bg-new-blue dark:focus:ring-new-blue" onClick={modalType===-1?submitChangeFolder:submitTitle}>Done</button>
                
              </form>
            </div>
          </div>
  </Box>
</Modal>

     
      
    </div>
  );
}