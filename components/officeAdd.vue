<template>
	<section class="w-full relative">
		<TransitionOutin>
			<button
				v-if="!adding"
				@click.prevent="adding = true"
				class="flex transition-all duration-300 justify-between w-full bg-pastelPink text-white font-thin px-5 py-3 rounded-lg shadow-lg"
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
			<OfficeForm
				v-if="adding"
				@close="adding = false"
				class="transition-all duration-300"
			/>
		</TransitionOutin>
	</section>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "OfficeAdd",
	props: {},
	data: function () {
		return {
			adding: false,
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
