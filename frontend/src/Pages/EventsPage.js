import React from "react";
import { Link } from "react-router";
const events = [
	{ id: 1, title: "Event 1" },
	{ id: 2, title: "Event 2" },
	{ id: 3, title: "Event 3" },
];
const renderEventsElement = events.map((event) => (
	<li key={event.id}>
		<Link to={`${event.id}`}> {event.title}</Link>
	</li>
));
const EventsPage = () => {
	return (
		<div>
			<h1>Events Page</h1>
			<ul>{renderEventsElement}</ul>
		</div>
	);
};

export default EventsPage;
