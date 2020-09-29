<template>
	<label class="input-group">
		<span class="label">{{ label }} {{ isRequired ? "*" : "" }}</span>
		<input
			:type="type"
			:value="value"
			@input="$emit('input', $event.target.value)"
			class="text"
			:class="{
				'border-pastelPink': hasError,
				'border-gray-800 focus:border-pastelGreen': !hasError,
			}"
			:placeholder="placeholder"
		/>
		<p v-if="hasError" class="text-xs text-pastelPink mt-2">
			{{ message }}
		</p>
		<ErrorIcon
			v-if="hasError"
			class="absolute right-0 bottom-0 mb-8 text-pastelPink"
		/>
	</label>
</template>

<script>
import { validateEmail } from "@/helpers";

export default {
	name: "AppInput",
	props: {
		value: String,
		placeholder: String,
		type: {
			type: String,
			default: "text",
		},
		showError: Boolean,
		label: String,
		isRequired: Boolean,
		validateAs: String,
	},
	data: function () {
		return {
			message: "",
		};
	},
	computed: {
		hasError() {
			this.setMessage("");
			if (this.isRequired && this.showError && this.value === "") {
				this.setMessage("This field cannot be empty.");
				return true;
			} else if (
				this.showError &&
				this.validateAs === "email" &&
				!validateEmail(this.value)
			) {
				this.setMessage("This value is not valid.");
				return true;
			} else return false;
		},
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {
		setMessage(message) {
			this.message = message;
		},
	},
};
</script>

<style></style>
