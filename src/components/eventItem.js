import React from 'react';

const EventItem = ({event}) => {
	// console.log("This is event " + event.logo.url)
	const eventHeading = event.name.text
	
	const imageURL = () => event.logo === null ? "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F36765842%2F213312316570%2F1%2Foriginal.jpg?h=200&w=450&rect=3%2C0%2C854%2C427&s=12a5e863102b0cc583ed7fe3a7bfab52" : event.logo.url

	const image = imageURL()
	// const urlz = event.url

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={image} alt="event "/>
				</div>

				<div className="media-body">
					<div className="media-heading">
						{eventHeading}
					</div>
				</div>
			</div>
		</li>
	)
}

export default EventItem;