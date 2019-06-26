<template>
  <div class="children">
    <button @click="childCilck">children button</button>
  </div>
</template>

<script>
export default {
  name: "Children",
  methods: {
    childCilck() {
      this.$emit("child-click", 2);
    }
  }
};
</script>