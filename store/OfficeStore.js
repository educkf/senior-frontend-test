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
				email: "peterjohnson@email.com",
				phone: "(111) 954-6846",
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
				email: "peterjohnson@email.com",
				phone: "(111) 954-6846",
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
				email: "peterjohnson@email.com",
				phone: "(111) 954-6846",
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
				email: "peterjohnson@email.com",
				phone: "(111) 954-6846",
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
				email: "peterjohnson@email.com",
				phone: "(111) 954-6846",
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
	upsertStore({ state, commit }, data) {
		let templist = [];
		if (data.id) {
			const index = state.list.findIndex(
				(office) => office.id === data.id
			);
			templist = JSON.parse(JSON.stringify(state.list));
			templist[index] = data;
		} else {
			data.id = Math.random() * 101 + 11;
			templist = [data, ...state.list];
		}
		commit("SET_STORES", templist);
		commit(
			"SET_ALERT",
			{
				message: `The location has been ${
					data.id ? "updated" : "added"
				}.`,
				show: true,
			},
			{ root: true }
		);
	},

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
