<template>
  <div class="bg-yellow-400 min-h-screen py-12">
    <div class="container">
      <div v-if="loading">
        loading...
      </div>
      <ul v-else class="bg-white shadow-md">
        <li
          v-for="(match, i) in matches"
          :key="i"
          class="p-4 border-b"
        >
          <div class="mb-2">{{ match.name }}</div>
          <div>
            {{ match.data }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    loading: true,
    matches: []
  }),

  mounted() {
    axios.get('/api')
      .then(({ data }) => {
        this.matches = data
        this.loading = false
      })
  }
}
</script>
