<template>
  <child-component3 @send-messsage="sendMessage" ref="child_component"></child-component3>
  <button type="button" @click="changeChildData"> Change Child Data </button>
</template>

<script>
import ChildComponent3 from "@/views/ChildComponent3";

export default {
  components: {ChildComponent3},
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모컴포넌트가 변경한 데이터"
    }
  }

}
</script>

<style scoped>

</style>