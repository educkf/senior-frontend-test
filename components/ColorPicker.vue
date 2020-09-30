<template>
	<div class="relative">
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

		<transition
			enter-active-class="absolute ease-out z-20"
			enter-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="absolute ease-in z-20"
			leave-class="opacity-100"
			leave-to-class="opacity-0"
			tag="div"
			class="w-full relative"
		>
			<div class="mt-5 transition-all duration-300 w-full" v-if="opened">
				<label
					v-for="color in colors"
					:key="color"
					:for="color"
					class="w-full h-32 mb-2 flex justify-center items-center rounded-md cursor-pointer hover:shadow"
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
		</transition>
	</div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';

export default {
	name: "ColorPicker",
	props: {
		value: String,
	},
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
	watch: {
		selected() {
			this.$emit("input", this.selected);
			this.opened = false;
		},
	},
	async created() {
		this.selected = this.value;
	},
	async mounted() {},
	methods: {},
};
</script>

<style></style>
