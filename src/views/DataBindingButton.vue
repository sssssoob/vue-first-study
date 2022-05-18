<template>
  <div>
    <input type="text" v-model="textValue" />
    <br>
    <button type="button" v-bind:disabled="textValue === ''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: ""
    }
  },
}
</script>

<style scoped>

</style>