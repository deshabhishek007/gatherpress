/**
 * WordPress dependencies.
 */
import { useState, useEffect } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import EventItem from './EventItem';
import { getFromGlobal } from '../helpers/globals';

const EventsList = (props) => {
	const { eventOptions, maxNumberOfEvents, type, topics, venues } = props;
	const [events, setEvents] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const renderEvents = events.map((event) => {
		return (
			<EventItem
				key={event.ID}
				eventOptions={eventOptions}
				type={type}
				event={event}
			/>
		);
	});

	const renderNoEventsMessage = () => {
		const message =
			'upcoming' === type
				? __('There are no upcoming events.', 'gatherpress')
				: __('There are no past events.', 'gatherpress');

		return (
			<div className={`gp-${type}-events__no_events_message`}>
				{message}
			</div>
		);
	};

	useEffect(() => {
		let topicsString = '';
		let venuesString = '';

		if ('object' === typeof topics) {
			topicsString = topics
				.map((topic) => {
					return topic.slug;
				})
				?.join(',');
		}

		if ('object' === typeof venues) {
			venuesString = venues
				.map((venue) => {
					return venue.slug;
				})
				?.join(',');
		}

		const endpoint =
			getFromGlobal('event_rest_api') +
			`/events-list?event_list_type=${type}&max_number=${maxNumberOfEvents}&topics=${topicsString}&venues=${venuesString}`;

		/**
		 * Not using apiFetch helper here as it will use X-Wp-Nonce and cache it when page caching is on causing a 403.
		 *
		 * @see https://github.com/GatherPress/gatherpress/issues/300
		 */
		fetch(endpoint)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setLoaded(true);
				setEvents(data);
			});
	}, [setEvents, maxNumberOfEvents, type, topics, venues]);

	return (
		<div className={`gp-${type}-events-list`}>
			{!loaded && <Spinner />}
			{loaded && 0 === events.length && renderNoEventsMessage()}
			{loaded && renderEvents}
		</div>
	);
};

export default EventsList;
