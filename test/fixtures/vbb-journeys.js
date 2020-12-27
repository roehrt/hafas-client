'use strict'

module.exports = [{
	type: 'journey',
	legs: [{
		origin: {
			type: 'stop',
			id: '900000042101',
			name: 'U Spichernstr.',
			location: {
				type: 'location',
				id: '900042101',
				latitude: 52.496581,
				longitude: 13.330616
			},
			products: {
				suburban: false,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		destination: {
			type: 'stop',
			id: '900000001201',
			name: 'S+U Westhafen',
			location: {
				type: 'location',
				id: '900001201',
				latitude: 52.536179,
				longitude: 13.343839
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		departure: '2020-12-07T14:08:00+01:00',
		plannedDeparture: '2020-12-07T14:08:00+01:00',
		departureDelay: 0,
		arrival: '2020-12-07T14:16:00+01:00',
		plannedArrival: '2020-12-07T14:16:00+01:00',
		arrivalDelay: 0,
		reachable: true,
		tripId: '1|35066|1|86|7122020',
		line: {
			type: 'line',
			id: 'u9',
			fahrtNr: '24005',
			name: 'U9',
			public: true,
			adminCode: 'BVU',
			mode: 'train',
			product: 'subway',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
			symbol: 'U',
			nr: 9,
			metro: false,
			express: false,
			night: false,
		},
		direction: 'U Osloer Str.',
		arrivalPlatform: null,
		plannedArrivalPlatform: null,
		departurePlatform: null,
		plannedDeparturePlatform: null,
		cycle: {min: 240, max: 300, nr: 26},
	}, {
		origin: {
			type: 'stop',
			id: '900000001201',
			name: 'S+U Westhafen',
			location: {
				type: 'location',
				id: '900001201',
				latitude: 52.536179,
				longitude: 13.343839
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		destination: {
			type: 'stop',
			id: '900000007102',
			name: 'S+U Gesundbrunnen',
			location: {
				type: 'location',
				id: '900007102',
				latitude: 52.548638,
				longitude: 13.388372
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		departure: '2020-12-07T14:20:00+01:00',
		plannedDeparture: '2020-12-07T14:20:00+01:00',
		departureDelay: 0,
		arrival: '2020-12-07T14:25:00+01:00',
		plannedArrival: '2020-12-07T14:25:00+01:00',
		arrivalDelay: 0,
		reachable: true,
		tripId: '1|66441|25|86|7122020',
		line: {
			type: 'line',
			id: 's41',
			fahrtNr: '2568',
			name: 'S41',
			public: true,
			adminCode: 'DBS',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
			symbol: 'S',
			nr: 41,
			metro: false,
			express: false,
			night: false,
		},
		direction: 'Ringbahn S 41',
		arrivalPlatform: '3',
		plannedArrivalPlatform: '3',
		departurePlatform: '1',
		plannedDeparturePlatform: '1',
		cycle: {min: 300, max: 600, nr: 24},
	}, {
		origin: {
			type: 'stop',
			id: '900000007102',
			name: 'S+U Gesundbrunnen',
			location: {
				type: 'location',
				id: '900007102',
				latitude: 52.548638,
				longitude: 13.388372
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		destination: {
			type: 'stop',
			id: '900000350127',
			name: 'Eberswalde, Hbf',
			location: {
				type: 'location',
				id: '900350127',
				latitude: 52.833668,
				longitude: 13.797031
			},
			products: {
				suburban: false,
				subway: false,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		departure: '2020-12-07T14:34:00+01:00',
		plannedDeparture: '2020-12-07T13:52:00+01:00',
		departureDelay: 2520,
		arrival: '2020-12-07T14:58:00+01:00',
		plannedArrival: '2020-12-07T14:17:00+01:00',
		arrivalDelay: 2460,
		reachable: true,
		tripId: '1|43248|0|86|7122020',
		line: {
			type: 'line',
			id: 'ice-1710',
			fahrtNr: '1710',
			name: 'ICE 1710',
			public: true,
			adminCode: 'N80',
			mode: 'train',
			product: 'express',
			operator: {type: 'operator', id: 'db-regio-ag', name: 'DB Regio AG'},
			symbol: 'ICE',
			nr: 1710,
			metro: false,
			express: false,
			night: false,
		},
		direction: 'Ostseebad Binz, Bhf',
		arrivalPlatform: '3',
		plannedArrivalPlatform: '3',
		departurePlatform: '10',
		plannedDeparturePlatform: '10',
		cycle: {min: 7200, max: 9000, nr: 2},
		alternatives: [{
			tripId: '1|42763|0|86|7122020',
			line: {
				type: 'line',
				id: 'ic-2457',
				fahrtNr: '2457',
				name: 'IC 2457',
				public: true,
				adminCode: 'N80',
				mode: 'train',
				product: 'express',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'IC',
				nr: 2457,
				metro: false,
				express: false,
				night: false,
			},
			direction: 'Ostseebad Binz, Bahnhof',
			when: '2020-12-07T15:52:00+01:00',
			plannedWhen: '2020-12-07T15:52:00+01:00',
			delay: null,
		}, {
			tripId: '1|42768|0|86|7122020',
			line: {
				type: 'line',
				id: 'ic-2055',
				fahrtNr: '2055',
				name: 'IC 2055',
				public: true,
				adminCode: 'N80',
				mode: 'train',
				product: 'express',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'IC',
				nr: 2055,
				metro: false,
				express: false,
				night: false,
			},
			direction: 'Stralsund, Hauptbahnhof',
			when: '2020-12-07T18:22:00+01:00',
			plannedWhen: '2020-12-07T18:22:00+01:00',
			delay: null,
		}]
	}],
	refreshToken: '¶HKI¶T$A=1@O=U Spichernstr. (Berlin)@L=900042101@a=128@$A=1@O=S+U Westhafen (Berlin)@L=900001201@a=128@$202012071408$202012071416$      U9$$1$$$$§T$A=1@O=S+U Westhafen (Berlin)@L=900001201@a=128@$A=1@O=S+U Gesundbrunnen Bhf (Berlin)@L=900007102@a=128@$202012071420$202012071425$     S41$$1$$$$§T$A=1@O=S+U Gesundbrunnen Bhf (Berlin)@L=900007102@a=128@$A=1@O=Eberswalde, Hauptbahnhof@L=900350127@a=128@$202012071352$202012071417$ICE 1710$$3$$$$',
	cycle: {min: 7200},
	remarks: [{
		type: 'status',
		code: 'text.realtime.connection.alternative.summary',
		text: 'Journey suggestion according to current traffic.'
	}, {
		type: 'status',
		code: 'text.realtime.connection.alternative.detail',
		text: 'Journey suggestion according to current traffic situation. Please note the current real-time information.'
	}]
},
{
	type: 'journey',
	legs: [{
		origin: {
			type: 'stop',
			id: '900000042101',
			name: 'U Spichernstr.',
			location: {
				type: 'location',
				id: '900042101',
				latitude: 52.496581,
				longitude: 13.330616
			},
			products: {
				suburban: false,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		destination: {
			type: 'stop',
			id: '900000001201',
			name: 'S+U Westhafen',
			location: {
				type: 'location',
				id: '900001201',
				latitude: 52.536179,
				longitude: 13.343839
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		departure: '2020-12-07T14:12:00+01:00',
		plannedDeparture: '2020-12-07T14:12:00+01:00',
		departureDelay: 0,
		arrival: '2020-12-07T14:21:00+01:00',
		plannedArrival: '2020-12-07T14:21:00+01:00',
		arrivalDelay: 0,
		reachable: true,
		tripId: '1|35069|1|86|7122020',
		line: {
			type: 'line',
			id: 'u9',
			fahrtNr: '24006',
			name: 'U9',
			public: true,
			adminCode: 'BVU',
			mode: 'train',
			product: 'subway',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
			symbol: 'U',
			nr: 9,
			metro: false,
			express: false,
			night: false,
		},
		direction: 'U Osloer Str.',
		arrivalPlatform: null,
		plannedArrivalPlatform: null,
		departurePlatform: null,
		plannedDeparturePlatform: null,
		cycle: {min: 240, max: 300, nr: 26},
	}, {
		origin: {
			type: 'stop',
			id: '900000001201',
			name: 'S+U Westhafen',
			location: {
				type: 'location',
				id: '900001201',
				latitude: 52.536179,
				longitude: 13.343839
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: false,
				regional: false,
			},
		},
		destination: {
			type: 'stop',
			id: '900000007102',
			name: 'S+U Gesundbrunnen',
			location: {
				type: 'location',
				id: '900007102',
				latitude: 52.548638,
				longitude: 13.388372
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		departure: null,
		plannedDeparture: '2020-12-07T14:25:00+01:00',
		departureDelay: null,
		arrival: null,
		plannedArrival: '2020-12-07T14:30:00+01:00',
		arrivalDelay: null,
		reachable: false,
		tripId: '1|66451|1|86|7122020',
		line: {
			type: 'line',
			id: 's41',
			fahrtNr: '2723',
			name: 'S41',
			public: true,
			adminCode: 'DBS',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
			symbol: 'S',
			nr: 41,
			metro: false,
			express: false,
			night: false,
		},
		direction: 'Ringbahn S 41',
		arrivalPlatform: null,
		plannedArrivalPlatform: null,
		departurePlatform: null,
		plannedDeparturePlatform: null,
		cycle: {min: 300, max: 300, nr: 24},
		cancelled: true,
	}, {
		origin: {
			type: 'stop',
			id: '900000007102',
			name: 'S+U Gesundbrunnen',
			location: {
				type: 'location',
				id: '900007102',
				latitude: 52.548638,
				longitude: 13.388372
			},
			products: {
				suburban: true,
				subway: true,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		destination: {
			type: 'stop',
			id: '900000350127',
			name: 'Eberswalde, Hbf',
			location: {
				type: 'location',
				id: '900350127',
				latitude: 52.833668,
				longitude: 13.797031
			},
			products: {
				suburban: false,
				subway: false,
				tram: false,
				bus: true,
				ferry: false,
				express: true,
				regional: true,
			},
		},
		departure: '2020-12-07T14:39:00+01:00',
		plannedDeparture: '2020-12-07T14:39:00+01:00',
		departureDelay: null,
		arrival: '2020-12-07T15:07:00+01:00',
		plannedArrival: '2020-12-07T15:07:00+01:00',
		arrivalDelay: null,
		reachable: true,
		tripId: '1|1961|0|86|7122020',
		line: {
			type: 'line',
			id: 're3',
			fahrtNr: '22',
			name: 'RE3',
			public: true,
			adminCode: '800158',
			mode: 'train',
			product: 'regional',
			operator: {type: 'operator', id: 'db-regio-ag', name: 'DB Regio AG'},
			symbol: 'RE',
			nr: 3,
			metro: false,
			express: true,
			night: false,
		},
		direction: 'Stralsund, Hbf',
		arrivalPlatform: '3',
		plannedArrivalPlatform: '3',
		departurePlatform: '9',
		plannedDeparturePlatform: '9',
		cycle: {min: 840, max: 2760, nr: 5},
		alternatives: [{
			tripId: '1|130|0|86|7122020',
			line: {
				type: 'line',
				id: 're66',
				fahrtNr: '46',
				name: 'RE66',
				public: true,
				adminCode: '800151',
				mode: 'train',
				product: 'regional',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'RE',
				nr: 66,
				metro: false,
				express: true,
				night: false,
			},
			direction: 'Tantow, Bahnhof',
			when: '2020-12-07T14:53:00+01:00',
			plannedWhen: '2020-12-07T14:53:00+01:00',
			delay: null,
		}, {
			tripId: '1|1976|0|86|7122020',
			line: {
				type: 'line',
				id: 're3',
				fahrtNr: '372',
				name: 'RE3',
				public: true,
				adminCode: '800158',
				mode: 'train',
				product: 'regional',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'RE',
				nr: 3,
				metro: false,
				express: true,
				night: false,
			},
			direction: 'Schwedt, Bahnhof',
			when: '2020-12-07T15:39:00+01:00',
			plannedWhen: '2020-12-07T15:39:00+01:00',
			delay: null,
		}, {
			tripId: '1|1971|0|86|7122020',
			line: {
				type: 'line',
				id: 're3',
				fahrtNr: '377',
				name: 'RE3',
				public: true,
				adminCode: '800158',
				mode: 'train',
				product: 'regional',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'RE',
				nr: 3,
				metro: false,
				express: true,
				night: false,
			},
			direction: 'Eberswalde, Hauptbahnhof',
			when: '2020-12-07T15:59:00+01:00',
			plannedWhen: '2020-12-07T15:59:00+01:00',
			delay: null,
		}, {
			tripId: '1|1959|1|86|7122020',
			line: {
				type: 'line',
				id: 're3',
				fahrtNr: '386',
				name: 'RE3',
				public: true,
				adminCode: '800158',
				mode: 'train',
				product: 'regional',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'RE',
				nr: 3,
				metro: false,
				express: true,
				night: false,
			},
			direction: 'Stralsund, Hauptbahnhof',
			when: '2020-12-07T16:39:00+01:00',
			plannedWhen: '2020-12-07T16:39:00+01:00',
			delay: null,
		}, {
			tripId: '1|129|0|86|7122020',
			line: {
				type: 'line',
				id: 're66',
				fahrtNr: '47',
				name: 'RE66',
				public: true,
				adminCode: '800151',
				mode: 'train',
				product: 'regional',
				operator: {
					type: 'operator',
					id: 'db-regio-ag',
					name: 'DB Regio AG'
				},
				symbol: 'RE',
				nr: 66,
				metro: false,
				express: true,
				night: false,
			},
			direction: 'Szczecin, Glowny',
			when: '2020-12-07T17:19:00+01:00',
			plannedWhen: '2020-12-07T17:19:00+01:00',
			delay: null,
		}]
	}],
	refreshToken: '¶HKI¶T$A=1@O=U Spichernstr. (Berlin)@L=900042101@a=128@$A=1@O=S+U Westhafen (Berlin)@L=900001201@a=128@$202012071412$202012071421$      U9$$1$$$$§T$A=1@O=S+U Westhafen (Berlin)@L=900001201@a=128@$A=1@O=S+U Gesundbrunnen Bhf (Berlin)@L=900007102@a=128@$202012071425$202012071430$     S41$$1$$$$§T$A=1@O=S+U Gesundbrunnen Bhf (Berlin)@L=900007102@a=128@$A=1@O=Eberswalde, Hauptbahnhof@L=900350127@a=128@$202012071439$202012071507$     RE3$$1$$$$',
	cycle: {min: 840},
	remarks: [{
		type: 'status',
		code: 'text.realtime.connection.cancelled',
		text: 'A section of this itinerary is cancelled or unusable.'
	}],
}]