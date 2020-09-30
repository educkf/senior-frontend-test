<template>
	<label class="input-group">
		<span class="label">{{ label }} {{ isRequired ? "*" : "" }}</span>
		<input
			:type="type"
			:value="value"
			@input="$emit('input', $event.target.value)"
			class="text"
			:class="{
				'border-pastelPink': hasError && showError,
				'border-gray-800 focus:border-pastelGreen': !showError || !hasError,
			}"
			:placeholder="placeholder"
			v-mask="maskTemplate"
		/>
		<p v-if="hasError && showError" class="text-xs text-pastelPink mt-2">
			{{ message }}
		</p>
		<ErrorIcon
			v-if="hasError && showError"
			class="absolute right-0 bottom-0 mb-8 text-pastelPink"
		/>
	</label>
</template>

<script>
import { validateEmail, applyMask as _mask } from "@/helpers";

export default {
	name: "InputField",
	directives: {
		mask: _mask,
	},
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
		maskTemplate: {
			type: String,
			default: "",
		},
	},
	data: function () {
		return {
			message: "",
		};
	},
	computed: {
		hasError() {
			this.setMessage("");

			if (this.isRequired && this.value === "") {
				this.setMessage("This field cannot be empty.");
				return true;
			} else if (
				this.validateAs === "email" &&
				!validateEmail(this.value)
			) {
				this.setMessage("This value is not valid.");
				return true;
			} else if (
				this.maskTemplate !== "" &&
				this.maskTemplate.length !== this.value.length
			) {
				this.setMessage("The phone value is incomplete.");
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
