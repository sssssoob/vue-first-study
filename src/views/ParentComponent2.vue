<template>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>
</template>

<script>
import ChildComponent from "@/views/ChildComponent2";

export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.callFromParent();
  }
}
</script>

<style scoped>

</style>