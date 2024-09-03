import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowActivity = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/activity/${id}`)
      .then((response) => {
        setActivity(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
    <BackButton />
    <h1 className="text-3xl my-4">Show Activity</h1>
    {loading ? (
      <Spinner />
    ) : (
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Id</span>
          <span>{activity._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Date</span>
          <span>{activity.date}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Time</span>
          <span>{activity.time}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Activity</span>
          <span>{activity.activity}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Duration</span>
          <span>{activity.duration}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Difficulty</span>
          <span>{activity.difficulty}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Create Time</span>
          <span>{new Date(activity.createdAt).toString()}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
          <span>{new Date(activity.updatedAt).toString()}</span>
        </div>
      </div>
    )}
  </div>
);
};
export default ShowActivity;
