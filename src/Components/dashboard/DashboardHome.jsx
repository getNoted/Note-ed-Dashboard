import AddIcon from '@mui/icons-material/Add';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import Folder from './Folder';
import VideoHome from './videos/VideoHome';
export default function VideoList() {

    const [activeFolder, setActiveFolder] = ("");
    const [folders, setFolders] = (['video1' , 'video2'])
    const getVideos = async() => {
      console.log("inside GETTING VIDEOS FROM ACTIVE FOLDER");
    }
    useEffect(() => {
    getVideos()
    }, [activeFolder])
      
    let foldername="Default";
      let videos=["video1","video2"]

    return (
        <div>
          
           
            <main className='flex mt-16'>
                <div className='absolute top-32 left-5 folders-component ml-8 mr-8 basis-1/6'>
                <div className='max-w-1/5' >
                        <Folder foldername={foldername} videos={videos}></Folder>
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
                    <section className='w-52 h-auto bg-new-green' >                       
                    </section>
                </div>
                <VideoHome />
            </main>
        </div>
    )
}
