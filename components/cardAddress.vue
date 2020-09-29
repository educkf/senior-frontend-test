<template>
	<div
		:class="{ 'max-h-0': !opened, 'max-h-fit': opened }"
		class="transition-maxHeight duration-500 h-auto w-full overflow-y-hidden relative z-10 -mt-4 bg-white px-6 rounded-lg shadow-md text-gray-900"
	>
		<h3 class="text-xl pt-8 font-bold">{{ contact.fullName }}</h3>
		<p class="font-thin">{{ contact.jobPosition }}</p>
		<p class="font-thin" :class="`text-${office.color}`">
			{{ contact.email }}
		</p>
		<p class="font-thin pb-4">{{ contact.phone }}</p>

		<div class="flex justify-between border-t border-gray-200 mt-2 py-2">
			<button
				class="transition duration-200 uppercase text-gray-500 hover:text-gray-700 flex items-center text-xs py-2 px-1"
			>
				<svg
					class="h-6 w-6 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
					/>
				</svg>
				Edit
			</button>

			<button
				class="transition duration-200 uppercase text-pastelPink hover:text-red-500 flex items-center text-xs py-2 px-1"
			>
				<svg
					class="h-6 w-6 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
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
