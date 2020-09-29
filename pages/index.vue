<template>
	<section
		class="bg-gray-200 min-h-screen flex justify-center py-24 font-sans"
	>
		<section class="w-72 flex flex-col items-center">
			<h1 class="text-pastelGreen text-6xl font-light mb-8">Offices</h1>

			<OfficeAdd />

			<OfficeCard class="bg-pastelGreen" />
			<OfficeCard class="bg-pastelYellow" />
			<OfficeCard class="bg-pastelPink" />
			<OfficeCard class="bg-grayLight" />
			<OfficeCard class="bg-grayDark" />

		</section>
	</section>
</template>

<script>
//import { mapState, mapGetters  } from 'vuex';

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
