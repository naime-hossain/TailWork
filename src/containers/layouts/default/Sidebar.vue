<template>
  <section class="bg-gray-200 w-80 h-screen flex flex-row items-start">
    <div class="py-6 bg-white w-1/4 h-screen flex flex-col items-center">
      <svg
        class="h-10 mb-4 w-10 cursor-pointer text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          fill="#fff"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <svg
        class="h-10 mb-4 w-10 cursor-pointer text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </div>
    <!-- Secondary Sideabr -->
    <div class="flex flex-col items-center w-3/4">
      <nav class="flex flex-col sm:flex-row">
        <button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
        >
          Categories</button
        ><button
          class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >
          Tags
        </button>
      </nav>
      <div class="w-full px-4 py-4">
        <a
          href=""
          class="text-left w-full bg-purple-500 block w-100 text-white py-2 px-4 mb-2 rounded-md"
          >text</a
        >
        <a
          href=""
          class="text-left w-full bg-purple-500 block w-100 text-white py-2 px-4 mb-2 rounded-md"
          >Hello</a
        >
        <a
          href=""
          class="text-left w-full bg-purple-500 block w-100 text-white py-2 px-4 mb-2 rounded-md"
          >chair</a
        >
        <a
          href=""
          class="text-left w-full bg-purple-500 block w-100 text-white py-2 px-4 mb-2 rounded-md"
          >Table</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import Topnav from "./TopNav";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Topnav,
  },

  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
    };
  },
  mounted() {},

  beforeDestroy() {},
  computed: {},

  methods: {
    ...mapActions([]),
  },
};
</script>

<style lang="" scoped>
</style>
