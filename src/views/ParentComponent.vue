<template>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>
</template>

<script>
import ChildComponent from "@/views/ChildComponent";


export default {
  components: {ChildComponent},
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  }
}
</script>

<style scoped>

</style>