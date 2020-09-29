export const state = () => ({
	list: [
		{
			id: 1,
			title: "Headquarters 1",
			address: "3763 W. Dallas St.",
			color: "pastelGreen",
			contact: {
				fullName: "Peter Johnson",
				jobPosition: "Designer",
				email: "eduardo.ckf@gmail.com",
				phone: "(11) 99304-7673",
			},
		},

		{
			id: 2,
			title: "Headquarters 2",
			address: "3763 W. Dallas St.",
			color: "pastelYellow",
			contact: {
				fullName: "Peter Johnson",
				jobPosition: "Designer",
				email: "eduardo.ckf@gmail.com",
				phone: "(11) 99304-7673",
			},
		},

		{
			id: 3,
			title: "Headquarters 3",
			address: "3763 W. Dallas St.",
			color: "pastelPink",
			contact: {
				fullName: "Peter Johnson",
				jobPosition: "Designer",
				email: "eduardo.ckf@gmail.com",
				phone: "(11) 99304-7673",
			},
		},

		{
			id: 4,
			title: "Headquarters 4",
			address: "3763 W. Dallas St.",
			color: "grayLight",
			contact: {
				fullName: "Peter Johnson",
				jobPosition: "Designer",
				email: "eduardo.ckf@gmail.com",
				phone: "(11) 99304-7673",
			},
		},

		{
			id: 5,
			title: "Headquarters 5",
			address: "3763 W. Dallas St.",
			color: "grayDark",
			contact: {
				fullName: "Peter Johnson",
				jobPosition: "Designer",
				email: "eduardo.ckf@gmail.com",
				phone: "(11) 99304-7673",
			},
		},
	],
});

export const mutations = {
	SET_STORES(state, payload) {
		state.list = payload;
	},
};

export const actions = {
	deleteStore({ state, commit }, officeId) {
		const remainingOffices = state.list.filter(
			(office) => office.id !== officeId
		);
		commit("SET_STORES", remainingOffices);

		commit(
			"SET_ALERT",
			{
				message: "The location has been deleted.",
				show: true,
			},
			{ root: true }
		);
	},
};
