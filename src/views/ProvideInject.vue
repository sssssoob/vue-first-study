<template>
  <ProvideInjectChild />
</template>

<script>
import ProvideInjectChild from "@/views/ProvideInjectChild";


export default {
  components: {ProvideInjectChild},
  data() {
    return {
      items: ['A', 'B']
    };
  },
  provide() {
    return
  }
}
</script>

<style scoped>

</style>