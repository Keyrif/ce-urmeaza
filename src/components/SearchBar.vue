<template>
  <div class="w-full flex flex-col items-center">
    <input
      ref="inputRef"
      type="text"
      v-model="searchTerm"
      @keydown.enter="handleSearch"
      @click="handleClick"
      placeholder="Caută..."
      :class="['mt-8', 'p-5', 'text-lg', 'rounded-full', 'border', 'border-slate-700', 'backdrop-blur-md', 'focus:outline-none', 'focus:border-cyan-400', 'transition-all', 'duration-700', 'ease-in-out', 'shadow-xl', 'relative', 'hidden', 'md:block', {'w-[300px] md:w-[400px]': isContentVisible, 'w-full md:w-[550px]': !isContentVisible}, darkMode ? 'bg-slate-800/50 placeholder-slate-400' : 'bg-slate-200/50 placeholder-slate-600 text-slate-950']"
    />
    
    <input
      ref="inputRefMobile"
      type="text"
      v-model="searchTerm"
      @keydown.enter="handleSearch"
      @click="handleClick"
      placeholder="Caută..."
      :class="['mt-8', 'p-4', 'text-base', 'rounded-full', 'border', 'border-slate-700', 'backdrop-blur-md', 'focus:outline-none', 'focus:border-cyan-400', 'transition-all', 'duration-700', 'ease-in-out', 'shadow-xl', 'relative', 'block', 'md:hidden', {'w-[280px]': isContentVisible, 'w-full': !isContentVisible}, darkMode ? 'bg-slate-800/50 placeholder-slate-400' : 'bg-slate-200/50 placeholder-slate-600 text-slate-950']"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed, watch, onMounted, defineExpose, nextTick } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import { useDark } from '@vueuse/core';

const props = defineProps({
  darkMode: Boolean,
});

const emit = defineEmits(['update:hasSearched', 'update:filteredFaculties', 'update:isScrolledDown']);

const inputRef = ref(null);
const inputRefMobile = ref(null);

const searchTerm = ref('');
const hasSearched = ref(false);

const isDark = useDark();

const { y } = useWindowScroll();
const isScrolledDown = computed(() => y.value > 0);
const isContentVisible = computed(() => hasSearched.value || isScrolledDown.value);

watch(y, (newY) => {
  emit('update:isScrolledDown', newY > 0);
}, { immediate: true });

const faculties = ref([
  { name: 'Facultatea de Informatică', location: 'București', keywords: ['itist', 'calculator', 'it', 'programare', 'programator', 'soft', 'tehnologie', 'informatică', 'corpo'] },
  { name: 'Facultatea de Electronică, Telecomunicații și Tehnologia Informației', location: 'București', keywords: ['electronica', 'telecomunicatii', 'embedded', 'tehnologie', 'inginerie', 'it', 'calculator'] },
  { name: 'Facultatea de Litere', location: 'Cluj-Napoca', keywords: ['literatura', 'romana', 'traducere', 'jurnalism', 'comunicare'] },
  { name: 'Facultatea de Științe Politice', location: 'Iași', keywords: ['politica', 'politolog', 'relatii internationale', 'guvern', 'administratie', 'drept'] },
  { name: 'Facultatea de Drept', location: 'București', keywords: ['drept', 'avocat', 'judecator', 'procuror', 'juridic'] },
  { name: 'Facultatea de Medicină', location: 'Cluj-Napoca', keywords: ['medicina', 'doctor', 'd0ctor', 'doct0r', 'medic', 'chirurgie', 'spital', 'sanatate'] },
  { name: 'Facultatea de Jurnalism și Științele Comunicării', location: 'Timișoara', keywords: ['jurnalism', 'comunicare', 'media', 'stiri', 'reporter', 'relatii publice'] },
  { name: 'Facultatea de Matematică și Informatică', location: 'București', keywords: ['matematica', 'informatică', 'matematician', 'programare', 'itist', 'calculator', 'corpo'] },
  { name: 'Facultatea de Istorie', location: 'Iași', keywords: ['istorie', 'arheologie', 'cercetare', 'muzeu', 'muzeograf', 'cultura'] },
]);

const removeDiacritics = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const isCloseMatch = (str1, str2) => {
  const normalizedStr1 = removeDiacritics(str1.toLowerCase());
  const normalizedStr2 = removeDiacritics(str2.toLowerCase());
  
  return normalizedStr2.includes(normalizedStr1) || normalizedStr1.includes(normalizedStr2);
};

const handleSearch = async () => {
  if (searchTerm.value.trim() !== '') {
    hasSearched.value = true;
    emit('update:hasSearched', true);

    await nextTick();
    if (window.innerWidth >= 768) {
      inputRef.value.blur();
    } else {
      inputRefMobile.value.blur();
    }
  }
};

const handleClick = async () => {
  if (isContentVisible.value) {
    hasSearched.value = false;
    emit('update:hasSearched', false);
  }
  
  await nextTick();
  if (window.innerWidth >= 768) {
    inputRef.value.focus();
  } else {
    inputRefMobile.value.focus();
  }
};

watch(searchTerm, (newVal) => {
  const normalizedSearch = removeDiacritics(newVal.toLowerCase());
  
  const results = faculties.value.filter(fac => {
    const keywords = fac.keywords || [];
    const isKeywordMatch = keywords.some(keyword => 
      isCloseMatch(normalizedSearch, keyword.toLowerCase())
    );

    return removeDiacritics(fac.name.toLowerCase()).includes(normalizedSearch) ||
           removeDiacritics(fac.location.toLowerCase()).includes(normalizedSearch) ||
           isKeywordMatch;
  });
  
  emit('update:filteredFaculties', results);
});

const reset = () => {
  searchTerm.value = '';
  hasSearched.value = false;
  emit('update:hasSearched', false);
};

defineExpose({
  reset
});

onMounted(() => {
  emit('update:filteredFaculties', faculties.value);
});
</script>

<style scoped>
input::placeholder {
  transition: color 0.5s ease-in-out;
}
</style>
