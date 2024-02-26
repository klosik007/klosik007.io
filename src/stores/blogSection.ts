import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBlogSectionStore = defineStore('blogStore', () => {
  const blogSectionVisible = ref(false)

  function setBlogSectionVisible(): void {
    blogSectionVisible.value = true
  }

  function setBlogSectionInvisible(): void {
    blogSectionVisible.value = false
  }

  return { blogSectionVisible, setBlogSectionVisible, setBlogSectionInvisible }
})
