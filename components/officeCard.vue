<template>
	<div class="w-full min-h-32 mt-6 shadow-m">
		<CardFace
			:office="office"
			:opened="opened"
			@clicked="opened = !opened"
		/>
		<CardAddress :office="office" :opened="opened" />
	</div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "OfficeCard",
	components: {},
	filters: {},
	props: {
		office: Object,
	},
	data: function () {
		return {
			opened: false,
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
