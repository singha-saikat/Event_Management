import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import EventExplore from "./EventExplore";
import Services from '../../public/Services.json'

const EventDetails = () => {
  // const events = useLoaderData();
  const events = Services;
 
  const [event, setEvent] = useState({});
  const { id } = useParams();
  console.log(id,"hello");
  
  console.log(events,"saikat");

  useEffect(() => {
    console.log(events);
    const findEvent = events?.find((event) => event.id == id);
    setEvent(findEvent);
  }, [id, events]);
  return (
    <div>
      <EventExplore event={event}></EventExplore>
    </div>
  );
};

export default EventDetails;
