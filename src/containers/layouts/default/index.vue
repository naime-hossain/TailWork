<template>
  <div class="clearfix bg-gray-100 flex-1 flex overflow-y-hidden">
    <sidebar />

    <main class="pb-6 flex-1 overflow-x-hidden">
      <top-nav />

      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- <appFooter /> -->
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Sidebar,
    TopNav,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSideBarToggleProperties"]),
  },
  methods: {},
};
</script>
<style>
</style>