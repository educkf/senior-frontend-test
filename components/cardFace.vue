<template>
	<div
		@click="$emit('clicked')"
		:class="`bg-${office.color}`"
		class="w-full h-40 relative z-20 flex items-center justify-between px-6 py-4 rounded-lg shadow-lg text-white cursor-pointer select-none"
	>
		<div>
			<h3 class="text-2xl font-bold select-text">{{ office.title }}</h3>
			<address class="font-thin select-text not-italic">
				{{ office.address }}
			</address>
		</div>

		<ToggleIcon
			class="transition-transform duration-200 transform"
			:class="{ 'rotate-180': opened }"
		/>
	</div>
</template>

<script>
export default {
	name: "CardFace",
	props: {
		office: Object,
		opened: Boolean,
	},
	data: function () {
		return {};
	},
	computed: {},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
