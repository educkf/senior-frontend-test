<template>
	<div class="w-full min-h-40 mt-6 shadow-m">
		<CardFace
			:office="office"
			:opened="opened"
			@clicked="opened = !opened"
		/>
		<CardAddress :office="office" :opened="opened" />
	</div>
</template>

<script>
export default {
	name: "OfficeCard",
	props: {
		office: Object,
	},
	data: function () {
		return {
			opened: false,
		};
	},
	computed: {},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
