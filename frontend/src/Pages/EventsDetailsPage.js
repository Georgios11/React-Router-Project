import React from "react";
import { useParams } from "react-router";

const EventsDetailsPage = () => {
	const params = useParams();
	const eventId = params.eventId;
	console.log(eventId);
	return (
		<div>
			<h1>Events Detail Page</h1>
			<h3>Event {eventId}</h3>
		</div>
	);
};

export default EventsDetailsPage;
