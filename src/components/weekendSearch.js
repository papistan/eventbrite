import React from 'react';
import EventItem from './eventItem'

const WeekendSearch = (props) => {
	

	const saturdayItems = props.saturday.map((event) => {
		return (
			<EventItem
				key={event.tag}
				event={event}
			/>
		);
	});

	const sundayItems = props.sunday.map((event) => {
		return (
			<EventItem
				key={event.tag}
				event={event}
			/>
		);
	});

	return (
		<div>
			<ul classname="col-md-6 list-group">
				{saturdayItems}
			</ul>
			<ul classname="col-md-6 list-group">
				{sundayItems}
			</ul>
		</div>
	)

}

export default WeekendSearch;