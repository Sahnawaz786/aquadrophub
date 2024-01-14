'use client';
import React, { useEffect, useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState('w');

  const geolocation = ()=>{
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setLocation({latitude,longitude});
      console.log(location);
    });
  }

  useEffect(()=>{
     geolocation();
  },[])

  

  return <>
     <div>
        <h1>{location.latitude}</h1>
        <h1>{location.longitude}</h1>
     </div>
  </>;
};

export default Location;
