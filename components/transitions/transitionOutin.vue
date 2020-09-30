<template>
	<transition
		enter-active-class="ease-out z-40 duration-200"
		enter-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="ease-in z-40 duration-200"
		leave-class="opacity-100"
		leave-to-class="opacity-0"
		mode="out-in"
	>
		<slot />
	</transition>
</template>

<script>
export default {
	name: "TransitionOutin",
};
</script>

<style></style>
