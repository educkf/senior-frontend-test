<template>
	<section
		class="bg-gray-200 min-h-screen flex justify-center py-24 font-sans"
	>
		<AlertMessage />

		<section class="w-80 flex flex-col items-center">
			<h1 class="text-pastelGreen text-6xl font-light mb-8">Offices</h1>

			<OfficeAdd />

			<transition-group
				enter-active-class="absolute ease-out z-20"
				enter-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="absolute ease-in z-20"
				leave-class="opacity-100"
				leave-to-class="opacity-0"
				tag="div"
				class="w-full relative"
			>
				<OfficeCard
					v-for="office in offices"
					:key="office.id"
					:office="office"
				/>
			</transition-group>

			<p class="text-center text-gray-500 mt-6">
				This project is for test purpose only.
			</p>
			<p>
				<a
					href="https://www.dogandponystudios.com/"
					class="uppercase text-pastelGreen text-xs opacity-75"
					>www.dogandponystudio.com</a
				>
			</p>
		</section>
	</section>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "Main",
	layout: "default",
	async fetch() {},
	async asyncData() {},
	data: function () {
		return {};
	},
	computed: {
		...mapState({
			offices: (state) => state.OfficeStore.list,
		}),
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
	head() {
		return {
			title: "Dog and Pony Senior FrontEnd Test",
		};
	},
};
</script>

<style lang="scss">
@import url("https://use.typekit.net/lyg3ywe.css");
</style>
