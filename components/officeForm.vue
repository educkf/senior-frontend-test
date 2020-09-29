<template>
	<form
		@submit.prevent="handleSubmit()"
		class="w-full bg-white rounded-md shadow-md px-5 pt-3 pb-5"
	>
		<header class="flex justify-between mb-10">
			<span class="font-bold">New Location</span>
			<button @click.prevent="$emit('close')">
				<CloseIcon class="opacity-50" />
			</button>
		</header>

		<ColorPicker v-model="color" class="mb-6" />

		<AppInput
			label="Title"
			:isRequired="true"
			:showError="submited"
			v-model="title"
		/>

		<AppInput
			label="Enter the address"
			:isRequired="true"
			:showError="submited"
			v-model="address"
		/>

		<h3
			class="uppercase text-pastelGreen border-b border-gray-300 pb-2 my-2 text-xs"
		>
			Contact information
		</h3>

		<AppInput
			label="Full name"
			:isRequired="true"
			:showError="submited"
			v-model="fullName"
		/>

		<AppInput
			label="Job position"
			:isRequired="true"
			:showError="submited"
			v-model="jobPosition"
		/>

		<AppInput
			label="Email address"
			:isRequired="true"
			:showError="submited"
			v-model="email"
			validateAs="email"
			placeholder="name@example.com"
		/>

		<AppInput
			label="Phone"
			:isRequired="true"
			:showError="submited"
			v-model="phone"
			type="phone"
			placeholder="(XXX) XXX-XXXX"
		/>

		<button
			type="submit"
			class="button"
			:class="isValid ? 'bg-pastelGreen' : 'bg-gray-300'"
		>
			Save
		</button>
	</form>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';
import { validateEmail } from "@/helpers";

export default {
	name: "OfficeForm",
	props: {
		editingStore: {
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
	computed: {
		// ...mapState({
		//   item: state => state.namespace.item
		// }),
		// ...mapGetters({
		//   item: "namespace/item"
		// })

		isValid() {
			if (
				this.title === "" ||
				this.address === "" ||
				this.fullName === "" ||
				this.jobPosition === "" ||
				this.email === "" ||
				this.phone === ""
			)
				return false;

			// https://stackoverflow.com/a/18964976/2302583
			var testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!validateEmail(this.email)) return false;

			return true;
		},
	},
	watch: {},
	async created() {
		if (this.editingStore && this.editingStore.id) {
			this.id = this.editingStore.id;
			this.title = this.editingStore.title;
			this.address = this.editingStore.address;
			this.fullName = this.editingStore.contact.fullName;
			this.jobPosition = this.editingStore.contact.jobPosition;
			this.email = this.editingStore.contact.email;
			this.phone = this.editingStore.contact.phone;
		}
	},
	async mounted() {},
	methods: {
		handleSubmit() {
			this.submited = true;

			if (!this.isValid) return false;

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
		},
	},
};
</script>

<style></style>
