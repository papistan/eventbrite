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

// } else {
// 	let saturdayItems = <li>Saturday</li>;
// 	let sundayItems = <li>Saturday</li>
// }

	return (
		<div className="scroll-list">
			<ul className="col-md-6 col-md-offset-3 list-group">
				{saturdayItems}
			</ul>
		</div>
	)

}

export default WeekendSearch;