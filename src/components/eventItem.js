import React from 'react';

const EventItem = ({event}) => {
	const imageURL = event.image
	const eventHeading = event.heading

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageURL} />
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