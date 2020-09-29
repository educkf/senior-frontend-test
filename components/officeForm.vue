<template>
	<form class="w-full bg-white rounded-md shadow-md px-5 pt-3 pb-5">
		<header class="flex justify-between mb-10">
			<span class="font-bold">New Location</span>
			<CloseIcon class="opacity-50" />
		</header>

		<ColorPicker class="mb-6" />

		<label class="input-group">
			<span class="label">Title *</span>
			<input type="text" v-model="title" class="text" />
		</label>

		<label class="input-group">
			<span class="label">Enter the address *</span>
			<input type="text" v-model="address" class="text" />
		</label>

    <h3 class="uppercase text-pastelGreen border-b border-gray-300 pb-2 text-xs">Contact information</h3>

    <label class="input-group">
			<span class="label">Full name *</span>
			<input type="text" v-model="fullName" class="text" />
		</label>

    <label class="input-group">
			<span class="label">Job position *</span>
			<input type="text" v-model="jobPosition" class="text" />
		</label>

    <label class="input-group">
			<span class="label">Email address *</span>
			<input type="text" v-model="email" placeholder="name@example.com" class="text" />
		</label>

    <label class="input-group">
			<span class="label">Phone *</span>
			<input type="text" v-model="phone" placeholder="(XXX) XXX-XXXX" class="text" />
		</label>

	</form>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "OfficeForm",
	props: {},
	data: function () {
		return {
			title: "Headquarters",
			address: "3763 W. Dallas St.",
		};
	},
	computed: {
		// ...mapState({
		//   item: state => state.namespace.item
		// }),
		// ...mapGetters({
		//   item: "namespace/item"
		// })
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
