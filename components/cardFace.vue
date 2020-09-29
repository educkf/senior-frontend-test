<template>
	<div
		@click="$emit('clicked')"
		:class="`bg-${office.color}`"
		class="w-full h-32 relative z-20 flex items-center justify-between px-6 py-4 rounded-lg shadow-lg text-white cursor-pointer"
	>
		<div>
			<h3 class="text-2xl font-bold">{{ office.title }}</h3>
			<p class="font-thin">{{ office.address }}</p>
		</div>

		<svg
			class="h-6 w-6 transition-transform duration-200 transform"
			:class="{ 'rotate-180': opened }"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	</div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "CardFace",
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
		// })
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
