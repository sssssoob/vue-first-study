<template>
  <child-component4 @send-message="sendMessage"></child-component4>
</template>

<script>
import ChildComponent4 from "@/views/ChildComponent4";

export default {
  components: {ChildComponent4},
  methods: {
    sendMessage(data){
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>