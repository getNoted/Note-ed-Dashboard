import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom'
import Header from './Header';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPlayer from 'react-player/youtube'

export default function VideoPage(props) {

    let { videoname } = useParams();
    let { state } = useLocation();
    let { video_url, video_id } = state;
    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, [])

    const player = useRef();
    const [timestamp, setTimstamp] = useState();
    const fetchNotes = (name) => {
        axios.get(`https://Backend-1.prathameshdukare.repl.co/api/v1/video/${videoname}`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyNGIzMDZjMmZkYTE2NDJjNzk2MzE1MiIsImlhdCI6MTY0OTQ0OTEwMX0.dsqSsUuG3_BzyhDQC1YgcAVDWvb-8tlsHRow-OvQmSg'
            }
        }).then(data => {
            console.log(data);
            setTimstamp(data.data.data);

        })
    }

    const convertToseconds = (time) => {
        const timeArr = time.split(":");
        let sec = 0;
        let pow = 2;
        timeArr.forEach(time => {
            sec += (time * Math.pow(60, pow));
            pow--;
        });
        console.log(sec);
        return sec;
    }

    return (

        <>

            <Header></Header>
            <div className='mt-12 mb-28 mx-64  rounded flex flex-col content-center bg-indigo-300 pt-8'>

                <ReactPlayer className='self-center' ref={player} controls={true} url={video_url} />
                <div className='self-start w-full px-32 mt-10'>
                    {timestamp && timestamp.map(timestamp => {
                        const time = Object.keys(timestamp);
                        const seconds = convertToseconds(time[0]);
                        return <div className='mb-6'>
                            <div className='flex'>

                                <p className='bg-indigo-700 mr-2 w-32 mb-2 rounded cursor-pointer flex justify-center' onClick={() => {
                                    player.current.seekTo(seconds);
                                }}>{time}</p>
                                <ModeEditIcon className='mr-2' />
                                <DeleteIcon />
                            </div>
                            <div className='w-11/12 ml-1 flex'>
                                <ModeCommentIcon />
                                <p className='ml-2'>{timestamp[time]}</p>
                            </div>

                        </div>
                    })}

                </div>
            </div>
        </>


    )


}
