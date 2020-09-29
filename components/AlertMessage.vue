<template>
	<transition
		enter-active-class="transition-opacity ease-out duration-300"
		enter-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition-opacity ease-in duration-300"
		leave-class="opacity-100"
		leave-to-class="opacity-0"
	>
		<div
			v-if="alert && alert.show"
			class="bg-white w-full fixed top-0 py-6 z-50"
		>
			<div class="w-80 m-auto flex px-4">
				<CheckIcon class="text-pastelGreen mr-4" />
				<p class="uppercase text-xs text-gray-700 leading-6">
					{{ alert.message }}
				</p>

				<button
					@click.prevent="closeAlert()"
					class="fixed right-0 mr-6"
				>
					<CloseIcon class="text-gray-500" />
				</button>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "AlertMessage",
	props: {},
	data: function () {
		return {};
	},
	computed: {
		...mapState({
			alert: (state) => state.alert,
		}),
		// ...mapGetters({
		//   item: "namespace/item"
		// })
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {
		closeAlert() {
			this.$store.commit("CLOSE_ALERT");
		},
	},
};
</script>

<style></style>
