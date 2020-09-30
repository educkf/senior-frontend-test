<template>
	<div class="w-full transition-all duration-300 min-h-40 mt-6 shadow-m">
		<TransitionOutin>
			<div v-if="!editing">
				<CardFace
					:office="office"
					:opened="opened"
					@clicked="opened = !opened"
				/>

				<CardAddress
					@editing="editing = true"
					:office="office"
					:opened="opened"
				/>
			</div>

			<OfficeForm
				v-if="editing"
				:editingOffice="office"
				@close="editing = false"
			/>
		</TransitionOutin>
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
