<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { projectById, shelfLabel } from '../data/projects'

const props = defineProps({
  id: { type: String, required: true },
})

const router = useRouter()
const project = computed(() => projectById(props.id))
const openShot = ref(null)

watch(
  () => props.id,
  () => {
    openShot.value = null
    if (!project.value) router.replace('/')
  },
  { immediate: true },
)

function onKey(event) {
  if (event.key === 'Escape') openShot.value = null
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <main v-if="project" class="project">
    <p class="back">
      <RouterLink to="/">Все работы</RouterLink>
    </p>
    <p class="kicker">{{ project.shelves.map(shelfLabel).join(' · ') }}</p>
    <h1>{{ project.title }}</h1>
    <p class="lede">{{ project.lede }}</p>

    <template v-if="project.depth === 'full'">
      <div class="gallery">
        <figure v-for="shot in project.media" :key="shot.src">
          <button type="button" :aria-label="shot.alt" @click="openShot = shot">
            <img :src="shot.src" :alt="shot.alt" />
          </button>
          <figcaption>{{ shot.caption }}</figcaption>
        </figure>
      </div>

      <div class="split">
        <section>
          <h2>Задача</h2>
          <p>{{ project.task }}</p>
        </section>
        <section>
          <h2>Что получилось</h2>
          <p>{{ project.result }}</p>
        </section>
      </div>

      <ol class="stages">
        <li v-for="(stage, index) in project.stages" :key="stage.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h2>{{ stage.title }}</h2>
            <p>{{ stage.text }}</p>
          </div>
        </li>
      </ol>

      <section class="parts">
        <h2>Печатный комплект</h2>
        <ul>
          <li v-for="part in project.parts" :key="part[0]">
            <span>{{ part[0] }}</span>
            {{ part[1] }}
          </li>
        </ul>
      </section>

      <ul class="stack">
        <li v-for="item in project.stack" :key="item">{{ item }}</li>
      </ul>
    </template>

    <section v-else class="brief">
      <p>{{ project.summary }}</p>
      <p class="pending">Полный разбор этой работы ещё впереди. На витрине пока короткая карточка.</p>
    </section>

    <div v-if="openShot" class="lightbox" role="dialog" aria-modal="true" aria-label="Крупный кадр" @click.self="openShot = null">
      <button type="button" class="close" @click="openShot = null">Закрыть</button>
      <img :src="openShot.src" :alt="openShot.alt" />
      <p>{{ openShot.caption }}</p>
    </div>
  </main>
</template>
