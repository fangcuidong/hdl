<template>
	<div>
		<carousels></carousels>
		<menubar></menubar>
		<socialcircle></socialcircle>
	</div>
</template>
<script>
// import { mapState } from "vuex";
import Carousels from "./Carousels.vue";
import Menubar from "./Menubar.vue";
import Socialcircle from "./Socialcircle.vue";

export default {
	components: {
		carousels: Carousels,
		menubar: Menubar,
		socialcircle: Socialcircle
	},
	computed: {
		// ...mapState(["bool"])
	}
};
</script>
