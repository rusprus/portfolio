<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <RouterLink class="mark" to="/">Работы</RouterLink>
    <nav>
      <RouterLink to="/">Витрина</RouterLink>
      <RouterLink to="/work/oceanica">Oceanica</RouterLink>
    </nav>
  </header>
</template>
