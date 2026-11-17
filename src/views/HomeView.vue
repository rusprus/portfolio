<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, shelves } from '../data/projects'

const active = ref('all')

const visible = computed(() => {
  if (active.value === 'all') return projects
  return projects.filter((item) => item.shelves.includes(active.value))
})

function worksWord(count) {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod10 === 1 && mod100 !== 11) return 'работа'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'работы'
  return 'работ'
}
</script>

<template>
  <main>
    <section class="hero">
      <p class="eyebrow">Портфолио вместо резюме</p>
      <h1>Проектирую приборы и аппараты целиком: механика, электроника, прошивка, софт и проверка в симуляции.</h1>
      <p class="hero-note">
        На витрине шесть работ. Полный разбор сейчас один — Oceanica, от образца и модели до схемы.
        Остальные карточки короткие, их тексты дополню следующим проходом.
      </p>
    </section>

    <section id="shelves" class="shelf-block">
      <div class="shelf-row" role="tablist" aria-label="Направления">
        <button
          v-for="shelf in shelves"
          :key="shelf.id"
          type="button"
          role="tab"
          :aria-selected="active === shelf.id"
          :class="{ on: active === shelf.id }"
          @click="active = shelf.id"
        >
          {{ shelf.label }}
        </button>
      </div>
      <p class="count">{{ visible.length }} {{ worksWord(visible.length) }}</p>
      <div class="grid">
        <ProjectCard v-for="project in visible" :key="project.id" :project="project" />
      </div>
    </section>
  </main>
</template>
