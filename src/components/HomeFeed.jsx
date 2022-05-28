import React from "react";
import "./HomeFeed.css";
import VideoCard from "./VideoCard";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { listRooms } from "../firebase/video-rooms";
import { useNavigate } from 'react-router-dom';
function HomeFeed() {
  const [liveRooms, setLiveRooms] = useState([])
  useEffect(async () => {
    setLiveRooms(await listRooms())
  }, []);
  const navigate = useNavigate()
  const navigateTo = (roomId) => navigate(`/learn/${roomId}`)

  return (
    <div className="home-feed">
      <p className="home-feed-title">🔴 Live Now</p>
      <div className="latest">

        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        <VideoCard
          image="https://imgix.bustle.com/uploads/image/2022/2/18/fd6afb88-ee70-428a-aaa3-ab8bda05062c-yoasobi_a_2021_12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
          title="This is Yoasobi - Dance"

        />
        
        

        {
          liveRooms.map((val, key) => <VideoCard title={val.id} key={key} onJoinClick={()=>navigateTo(val.id)}/>)
        }
      </div>
    </div>

  );
}

export default HomeFeed;
