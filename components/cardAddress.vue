<template>
	<div
		:class="{ 'max-h-0': !opened, 'max-h-fit': opened }"
		class="transition-maxHeight duration-500 h-auto w-full overflow-y-hidden relative z-10 -mt-4 bg-white px-8 rounded-lg shadow-md"
	>
		<div
			:class="{ 'opacity-0': !opened, 'opacity-100': opened }"
			class="transition-opacity duration-700 leading-8"
		>
			<h3 class="text-xl pt-10 font-bold">
				{{ contact.fullName }}
			</h3>

			<p class="text-gray-700">{{ contact.jobPosition }}</p>
			<p :class="[`text-${office.color}`]">{{ contact.email }}</p>
			<p class="text-gray-800">{{ contact.phone }}</p>

			<div
				class="flex justify-between border-t border-gray-200 mt-2 pt-1 pb-2"
			>
				<button class="btn text-gray-500 hover:text-gray-700">
					<PencilIcon />
					Edit
				</button>

				<button class="btn text-pastelPink hover:text-red-500">
					<TrashIcon />
					Delete
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardAddress",
	props: {
		office: Object,
		opened: Boolean,
	},
	data: function () {
		return {};
	},
	computed: {
		contact() {
			return this.office.contact;
		},
	},
	watch: {},
	async created() {},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
