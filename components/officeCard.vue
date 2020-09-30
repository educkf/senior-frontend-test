<template>
	<div class="w-full transition-all duration-300 min-h-40 mt-6 shadow-m">
		<CardFace
			v-if="!editing"
			:office="office"
			:opened="opened"
			@clicked="opened = !opened"
		/>

		<CardAddress
			v-if="!editing"
			@editing="editing = true"
			:office="office"
			:opened="opened"
		/>

		<OfficeForm
			v-if="editing"
			:editingOffice="office"
			@close="editing = false"
		/>
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
			editing: false,
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
