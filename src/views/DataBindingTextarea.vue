<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '여러 줄을 입력할 수 있는 text area'
    }
  },
}
</script>

<style scoped>

</style>