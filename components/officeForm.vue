<template>
	<form
		@submit.prevent="handleSubmit()"
		class="w-full bg-white rounded-md shadow-md px-5 pt-3 pb-5"
	>
		<header class="flex justify-between mb-10">
			<span class="font-bold">{{ id ? "Edit" : "New"}} Location</span>
			<button @click.prevent="$emit('close')">
				<CloseIcon class="opacity-50" />
			</button>
		</header>

		<ColorPicker v-model="color" class="mb-6" />

		<InputField
			label="Title"
			:isRequired="true"
			:showError="submited"
			v-model="title"
			ref="title"
		/>

		<InputField
			label="Enter the address"
			:isRequired="true"
			:showError="submited"
			v-model="address"
			ref="address"
		/>

		<h3
			class="uppercase text-pastelGreen border-b border-gray-300 pb-2 my-2 text-xs"
		>
			Contact information
		</h3>

		<InputField
			label="Full name"
			:isRequired="true"
			:showError="submited"
			v-model="fullName"
			ref="fullName"
		/>

		<InputField
			label="Job position"
			:isRequired="true"
			:showError="submited"
			v-model="jobPosition"
			ref="jobPosition"
		/>

		<InputField
			label="Email address"
			:isRequired="true"
			:showError="submited"
			v-model="email"
			validateAs="email"
			placeholder="name@example.com"
			ref="email"
		/>

		<InputField
			label="Phone"
			:isRequired="true"
			:showError="submited"
			v-model="phone"
			type="phone"
			placeholder="(XXX) XXX-XXXX"
			maskTemplate="(###) ###-####"
			ref="phone"
		/>

		<button
			type="submit"
			class="button"
			:class="isValid() ? 'bg-pastelGreen' : 'bg-gray-300'"
		>
			Save
		</button>
	</form>
</template>

<script>
import { validateEmail } from "@/helpers";

export default {
	name: "OfficeForm",
	props: {
		editingOffice: {
			type: Object,
		},
	},
	data: function () {
		return {
			id: null,
			title: "",
			address: "",
			fullName: "",
			jobPosition: "",
			email: "",
			phone: "",
			color: "pastelYellow",

			submited: false,
		};
	},
	computed: {},
	watch: {},
	async created() {
		if (this.editingOffice && this.editingOffice.id) {
			this.id = this.editingOffice.id;
			this.title = this.editingOffice.title;
			this.address = this.editingOffice.address;
			this.color = this.editingOffice.color;
			this.fullName = this.editingOffice.contact.fullName;
			this.jobPosition = this.editingOffice.contact.jobPosition;
			this.email = this.editingOffice.contact.email;
			this.phone = this.editingOffice.contact.phone;
		}
	},
	async mounted() {},
	methods: {
		handleSubmit() {
			this.submited = true;
			if (!this.isValid()) return false;

			this.$store.dispatch("OfficeStore/upsertStore", {
				id: this.id,
				title: this.title,
				address: this.address,
				color: this.color,
				contact: {
					fullName: this.fullName,
					jobPosition: this.jobPosition,
					email: this.email,
					phone: this.phone,
				},
			});

			this.$emit("close");
		},

		isValid() {
			// iterate each formItem and check for its computed property `hasError`
			for (const [key, value] of Object.entries(this.$refs)) {
				if (value.hasError) return false;
			}
			return true;
		},
	},
};
</script>

<style></style>
