<template>
	<button
		class="flex justify-between w-full bg-pastelPink text-white font-thin px-5 py-3 mb-3 rounded-lg shadow-lg"
	>
		Add New Location

		<svg
			class="h-6 w-6"
			stroke="currentColor"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/>
		</svg>
	</button>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "OfficeAdd",
	components: {},
	filters: {},
	props: {},
	data: function () {
		return {};
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
