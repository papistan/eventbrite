import React from 'react';
import EventItem from './eventItem'

const WeekendSearch = (props) => {
	// console.log(props.satEvents[0].logo.url)
	let saturdayItems = props.satEvents.map((event) => {
		return (
			<EventItem
				key={event.capacity}
				event={event}
			/>
		);
	});

	let sundayItems = props.sunEvents.map((event) => {
		return (
			<EventItem
				key={event.capacity}
				event={event}
			/>
		);
	});
// } else {
// 	let saturdayItems = <li>Saturday</li>;
// 	let sundayItems = <li>Saturday</li>
// }

	return (
		<div>
			<ul className="col-md-6 list-group">
				{saturdayItems}
			</ul>
			<ul className="col-md-6 list-group">
				{sundayItems}
			</ul>
		</div>
	)

}

export default WeekendSearch;