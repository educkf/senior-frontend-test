<template>
	<div
		:class="{ 'max-h-0': !opened, 'max-h-fit': opened }"
		class="transition-maxHeight duration-500 h-auto w-full overflow-y-hidden relative z-10 -mt-4 bg-white px-6 rounded-lg shadow-md text-gray-900 font-thin"
	>
		<h3 class="text-xl pt-8 font-bold">{{ contact.fullName }}</h3>
		<p>{{ contact.jobPosition }}</p>
		<p :class="`text-${office.color}`">
			{{ contact.email }}
		</p>
		<p class="pb-4">{{ contact.phone }}</p>

		<div class="flex justify-between border-t border-gray-200 mt-2 py-2">
			<button class="btn text-gray-500 hover:text-gray-700">
				<PencilIcon />
				Edit
			</button>

			<button class="btn text-pastelPink hover:text-red-500">
				<TrashIcon />
				Delete
			</button>
		</div>
	</div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "CardAddress",
	components: {},
	filters: {},
	props: {
		office: Object,
		opened: Boolean,
	},
	data: function () {
		return {};
	},
	computed: {
		// ...mapState({
		//   item: state => state.namespace.item
		// }),
		// ...mapGetters({
		//   item: "namespace/item"
		// }),
		contact() {
			return this.office.contact;
		},
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
