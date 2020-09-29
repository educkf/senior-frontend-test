<template>
	<section
		class="bg-gray-200 min-h-screen flex justify-center py-24 font-sans"
	>
		<section class="w-80 flex flex-col items-center">
			<h1 class="text-pastelGreen text-6xl font-light mb-8">Offices</h1>

			<OfficeAdd />

			<OfficeCard
				v-for="office in offices"
				:key="office.id"
				:office="office"
			/>
		</section>
	</section>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Main",
	layout: "default",
	components: {},
	filters: {},
	props: {},
	async fetch() {},
	async asyncData() {},
	data: function () {
		return {};
	},
	computed: {
		...mapState({
			offices: (state) => state.OfficeStore.list,
		}),
		// ...mapGetters({
		//   item: "namespace/item"
		// })
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
	head() {
		return {
			title: "Dog and Pony Senior FrontEnd Test",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "My custom description",
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/lyg3ywe.css");
</style>
