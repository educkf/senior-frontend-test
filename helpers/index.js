import { mask } from "vue-the-mask";

export const validateEmail = (email) => {
	// https://stackoverflow.com/a/18964976/2302583
	var testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return testEmail.test(email);
};

export const applyMask = {
	bind(el, binding) {
		if (binding.value && binding.value !== "") {
			mask(el, binding);
		}
	},
	unbind() {},
};
