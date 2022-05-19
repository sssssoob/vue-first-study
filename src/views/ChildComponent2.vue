<!--<template>-->
<!--  <button type="button" @click="childFunc" ref="btn">click</button>-->
<!--</template>-->

<script>
export default {
  methods: {
    callFromParent() {
      console.log('부모컴포넌트에서 호출한 함수')
    }
  }
}
</script>

<style scoped>

</style>