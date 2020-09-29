<template>
	<div>
		<button
			@click.prevent="opened = !opened"
			class="w-full shadow-md h-32 rounded-md flex justify-center items-center text-white font-medium focus:shadow-outline focus:outline-none"
			:class="`bg-${selected}`"
		>
			Select Color
			<ToggleIcon
				class="transition-transform duration-200 transform ml-4"
				:class="{ 'rotate-180': opened }"
			/>
		</button>

		<div class="mt-5" v-if="opened">
			<label
				v-for="color in colors"
				:key="color"
				:for="color"
				class="w-full h-32 mb-2 flex justify-center items-center rounded-md"
				:class="`bg-${color}`"
			>
				<input
					type="radio"
					name="colors"
					:id="color"
					:value="color"
					v-model="selected"
					class="opacity-0"
				/>
				<CheckIcon v-if="selected === color" class="text-white" />
			</label>
		</div>
	</div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "ColorPicker",
	props: {},
	data: function () {
		return {
			selected: "grayLight",
			opened: false,
			colors: [
				"pastelYellow",
				"pastelPink",
				"pastelGreen",
				"grayLight",
				"grayDark",
			],
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
