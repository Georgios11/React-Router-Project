import React from "react";
import EventsNavigation from "./EventsNavigation";
import { Outlet } from "react-router";

const EventsLayout = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export default EventsLayout;
