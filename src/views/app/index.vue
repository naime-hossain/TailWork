<template>
  <div>
    <default-layout></default-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getThemeMode"]),
  },
  methods: {},
};
</script>
