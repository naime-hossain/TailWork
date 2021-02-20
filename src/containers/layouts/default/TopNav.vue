<template>
  <header class="sm:flex sm:items-center sm:justify-between bg-white">
    <nav
      class="sm:flex py-4 sm:items-center sm:px-4 xl:flex-1 xl:justify-between"
    >
      <div class="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            class="h-6 w-6 fill-current text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          class="block w-full border border-transparent bg-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2"
          placeholder="Search by keywords"
        />
      </div>
      <div class="sm:flex sm:items-center">
        <div
          class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0"
        >
          <a
            href="#"
            class="block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 text-gray-900 xl:hover:bg-gray-200"
            >Chair</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 text-gray-900 xl:hover:bg-gray-200"
            >station</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 text-gray-900 xl:hover:bg-gray-200"
            >Workstation</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  components: {},

  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapGetters([""]),
  },

  methods: {
    ...mapActions([]),

    sideBarToggle() {},
  },
};
</script>



