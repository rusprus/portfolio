<script setup>
import { RouterLink } from 'vue-router'
import { shelfLabel } from '../data/projects'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <RouterLink class="card" :class="{ featured: project.featured && project.cover }" :to="`/work/${project.id}`">
    <img v-if="project.cover" :src="project.cover" :alt="project.coverAlt" />
    <div v-else class="card-index" aria-hidden="true">{{ project.index }}</div>
    <div class="card-body">
      <p class="kicker">{{ project.shelves.map(shelfLabel).join(' · ') }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.lede }}</p>
    </div>
  </RouterLink>
</template>
