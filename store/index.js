export const state = () => ({
	alert: {
		message: "",
		show: false,
	},
});

export const mutations = {
	SET_ALERT(state, payload) {
		state.alert = {
			message: payload.message,
			show: payload.show,
		};
	},

	CLOSE_ALERT(state) {
		state.alert = {
			message: "",
			show: false,
		};
	},
};

export const actions = {};
