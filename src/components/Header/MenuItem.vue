<template lang="">
    <router-link :to="to" :class="[$route.path == to ? 'active' : '', 'bold-text']">
        <slot />
    </router-link>
</template>

<script lang="ts">
export default {
  props: {
    to: String
  }
}
</script>

<style lang="css" scoped>
</style>
