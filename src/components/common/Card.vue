<template>
  <div class="py-4">
    <div
      class="shadow-lg container rounded-md bg-white max-w-sm flex justify-center items-center"
    >
      <div>
        <div class="w-full image-cover rounded-t-md">
          <img
            class="rounded-t-md"
            src="@/assets/images/products/iphone-1.jpg"
          />
        </div>
        <div class="py-4 pb-8 px-4 bg-white rounded-b-md text-center">
          <span class="block text-lg text-gray-800 font-bold tracking-wide"
            >Test Product</span
          >
          <span class="block text-gray-600 text-sm mb-6"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repudiandae, sint fuga et exercitationem ipsam eum ea voluptas
            cumque. Enim ipsum officiis explicabo facilis veritatis ullam
            assumenda cumque repellat ut.
          </span>
          <a
            href=""
            class="bg-purple-500 w-100 text-white py-2 px-6 mb-2 rounded-md"
            >Uncategorized</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>