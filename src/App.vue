<template>
  <div :class="['min-h-screen', 'flex', 'flex-col', 'relative', 'font-sans', 'transition-colors', 'duration-500', 'ease-in-out', darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-950', 'z-10', 'select-none']">
    <div
      :class="['absolute', 'top-0', 'right-0', 'w-full', 'h-full', 'rounded-bl-full', 'transform', 'transition-transform', 'duration-[1000ms]', 'ease-in-out', 'z-0', 'origin-top-right', {'scale-x-[2] scale-y-[2]': !isAnimating, 'scale-x-[0] scale-y-[0]': isAnimating}]"
      :style="{ 'background-color': darkMode ? '#0f172a' : '#f1f5f9' }"
    ></div>
    <button
      v-if="!isSidePanelVisible"
      @click="toggleDarkModeWithAnimation"
      :class="['fixed', 'top-4', 'right-4', 'p-2', 'rounded-full', 'shadow-lg', 'transition-colors', 'duration-500', 'ease-in-out', 'z-20', 'z-[30]', darkMode ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300']"
    >
      <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>

    <button
      @click="toggleSidePanel"
      :class="['fixed', 'top-20', 'right-4', 'p-2', 'rounded-full', 'shadow-lg', 'transition-colors', 'duration-500', 'ease-in-out', 'z-[31]', 'transform', darkMode ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300', isSidePanelVisible ? 'translate-x-[-275px] md:translate-x-[-375px]' : 'translate-x-0']"
    >
      <svg v-if="isSidePanelVisible" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <aside
      :class="['fixed', 'top-0', 'right-0', 'h-full', 'w-[250px]', 'md:w-[350px]', 'backdrop-blur-xl', 'shadow-2xl', 'z-[29]', 'transform', 'transition-transform', 'duration-500', 'ease-in-out', {'translate-x-0': isSidePanelVisible, 'translate-x-full': !isSidePanelVisible}, darkMode ? 'bg-slate-800/80' : 'bg-slate-200/80']"
    >
      <div :class="['p-6', 'h-full', 'flex', 'flex-col', 'justify-start', darkMode ? 'text-slate-100' : 'text-slate-950']">
        <h2 class="text-3xl font-bold mb-4">Detalii site:</h2>
        <p :class="['text-sm', darkMode ? 'text-slate-400' : 'text-slate-600']">
          <p class="text-sm font-light">Made by <a href="https://github.com/Keyrif" target="_blank" class="text-blue-500 hover:underline">Keyrif</a>, version: 0.8</p><br></br>
          <p class="text-sm font-light">Pagina proiect: <a href="https://github.com/Keyrif" target="_blank" class="text-blue-500 hover:underline">GITHUB</a></p><br></br>
          Surse de unde au fost preluate informatiile: 
          <br></br>- eJobs
          <Br></Br>- BestJobs
        </p>
      </div>
    </aside>
    <div :class="['w-full', 'flex', 'flex-col', 'items-center', 'justify-start', 'flex-grow', 'max-w-7xl', 'mx-auto']">
      <div class="w-full flex flex-col items-center justify-start p-4">
        <h1 
          :class="['font-extrabold', 'transition-all', 'duration-700', 'ease-in-out', 'text-center', 'cursor-pointer', 'relative', 'select-none', isContentVisible ? 'text-4xl md:text-5xl mt-[10vh]' : 'text-6xl sm:text-7xl md:text-9xl mt-[calc(40vh-100px)]', logoClicked ? (darkMode ? 'animate-glow-white' : 'animate-glow-black') : '', darkMode ? 'text-slate-100' : 'text-slate-950']"
          @click="handleLogoClick"
        >
          CE URMEAZĂ?
        </h1>
        <div v-if="!isContentVisible" class="mt-4">
          <span
            :class="[
              'text-lg',
              'md:text-xl',
              'font-semibold',
              'text-slate-400',
              'overflow-hidden',
              'whitespace-nowrap',
              'relative',
              'animate-text'
            ]"
          >
            INFORMAȚII DESPRE FACULTĂȚI SI JOBURI
          </span>
        </div>
        
        <SearchBar
          ref="searchBarRef"
          :faculties="faculties"
          :darkMode="darkMode"
          @update:filteredFaculties="updateFilteredFaculties"
          @update:hasSearched="updateHasSearched"
          @update:isScrolledDown="updateIsScrolledDown"
        />
        <div :class="['w-full', 'mt-4', 'md:mt-16', 'flex', 'flex-col', 'items-center', 'justify-center', 'transition-opacity', 'duration-500', 'animate-bounce-slow', { 'opacity-0': isContentVisible, 'opacity-100': !isContentVisible }]">
          <p class="text-lg font-semibold mb-2 text-center">Scrollează pentru a vedea toate facultățile.</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 mx-auto animate-scroll">
            <path d="M12 4.5A7.5 7.5 0 0 0 4.5 12a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 12 4.5zm0-1.5a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm.25 10.75V15h-.5v-1.75H9.5L12 10.75l2.5 2.5z"/>
          </svg>
        </div>
        <div v-if="isContentVisible" :class="['mt-4', 'font-semibold', 'text-base', 'text-center', 'transition-colors', 'duration-500', darkMode ? 'text-slate-400' : 'text-slate-600']">
          <span v-if="!hasSearched">
            Total facultăți: {{ faculties.length }}
          </span>
          <span v-else>
            Am găsit {{ filteredFaculties.length }} facultăți.
          </span>
        </div>
        
        <div 
          :class="['mt-12', 'flex', 'flex-col', 'items-center', 'p-8', 'transition-opacity', 'duration-700', 'ease-in-out', 'delay-500']"
          :style="{ opacity: isContentVisible ? 1 : 0 }"
        >
          <div :class="['grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8', 'w-full', 'max-w-7xl']">
            <template v-if="filteredFaculties.length > 0">
              <div
                v-for="(fac, index) in filteredFaculties"
                :key="index"
                :class="['p-8', 'rounded-2xl', 'backdrop-blur-md', 'border', 'text-center', 'transition-all', 'duration-300', 'transform', 'w-full', 'min-h-[150px]', 'flex', 'flex-col', 'justify-center', 'shadow-lg', 'hover:shadow-xl', 'relative', 'group', 'hover:scale-105', darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-200/60 border-slate-300']"
                @click="setSelectedFaculty(fac)"
              >
                <h3 :class="['font-semibold', 'text-2xl', darkMode ? 'text-white' : 'text-slate-950']">{{ fac.name }}</h3>
                <p :class="['mt-1', darkMode ? 'text-slate-400' : 'text-slate-600']">{{ fac.location }}</p>
              </div>
            </template>
            <div v-else-if="hasSearched" :class="['col-span-full', 'text-center', 'text-lg', darkMode ? 'text-slate-400' : 'text-slate-600']">
              Nu am găsit facultăți care să se potrivească.
            </div>
          </div>
        </div>
      </div>
    </div>
    <FacultyDetailsPopup 
      v-if="selectedFaculty"
      :faculty="selectedFaculty" 
      @close="setSelectedFaculty(null)" 
      :darkMode="darkMode"
    />

  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import FacultyDetailsPopup from './components/FacultyDetailsPopup.vue';
import SearchBar from './components/SearchBar.vue';
const faculties = ref([]);
const selectedFaculty = ref(null);
const logoClicked = ref(false);
const isAnimating = ref(false);
const isSidePanelVisible = ref(false); 
const filteredFaculties = ref([]);
const hasSearched = ref(false); 
const isScrolledDown = ref(false); 
const searchBarRef = ref(null); 

const isContentVisible = computed(() => hasSearched.value || isScrolledDown.value);

const dummyFaculties = [
    { name: 'Facultatea de Informatică', location: 'București' },
    { name: 'Facultatea de Electronică, Telecomunicații și Tehnologia Informației', location: 'Cluj-Napoca' },
    { name: 'Facultatea de Litere', location: 'Iași' },
    { name: 'Facultatea de Științe Politice', location: 'Timișoara' },
    { name: 'Facultatea de Drept', location: 'Brașov' },
    { name: 'Facultatea de Medicină', location: 'Craiova' },
    { name: 'Facultatea de Jurnalism și Științele Comunicării', location: 'Constanța' },
    { name: 'Facultatea de Matematică și Informatică', location: 'București' },
    { name: 'Facultatea de Istorie', location: 'Sibiu' },
    { name: 'Facultatea de Istorie', location: 'Sibiu' },
];

const getInitialDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  return savedMode !== null ? JSON.parse(savedMode) : false;
};

const darkMode = ref(getInitialDarkMode());

watch(darkMode, (newValue) => {
  localStorage.setItem('darkMode', JSON.stringify(newValue));
});

const handleLogoClick = () => {
  if (searchBarRef.value) {
    searchBarRef.value.reset();
  }
  hasSearched.value = false;
  isScrolledDown.value = false;
  logoClicked.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    logoClicked.value = false;
  }, 750);
};

const setSelectedFaculty = (fac) => {
  selectedFaculty.value = fac;
};
const toggleDarkModeWithAnimation = () => {
  isAnimating.value = true;
  setTimeout(() => {
    darkMode.value = !darkMode.value;
    isAnimating.value = false;
  }, 500);
};

const toggleSidePanel = () => {
  isSidePanelVisible.value = !isSidePanelVisible.value;
};

const updateFilteredFaculties = (newFaculties) => {
  filteredFaculties.value = newFaculties;
};

const updateHasSearched = (newHasSearched) => {
  hasSearched.value = newHasSearched;
};

const updateIsScrolledDown = (newIsScrolledDown) => {
  isScrolledDown.value = newIsScrolledDown;
};

onMounted(() => {
  faculties.value = dummyFaculties;
  filteredFaculties.value = dummyFaculties;
});
</script>

<style>
  html, body {
    margin: 0;
    min-height: 100vh;
  }
  body {
    overflow-x: hidden;
  }
  
  @keyframes glow-white {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2);
    }
    50% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.8);
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2);
    }
  }

  @keyframes glow-black {
    0% {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.8);
    }
    100% {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
  
  @keyframes scrollAnimation {
    0% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(12px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  .animate-scroll {
    animation: scrollAnimation 1.5s ease-in-out infinite;
  }

  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    50% {
      transform: translateY(-8px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }

  .animate-glow-white {
    animation: glow-white 0.4s ease-in-out;
  }
  .animate-glow-black {
    animation: glow-black 0.4s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes zoomIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .group:hover::before {
    transform: scale(1);
    opacity: 1;
  }
  
  .group::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid theme('colors.cyan.400');
    border-radius: theme('borderRadius.2xl');
    transform: scale(0.9);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    pointer-events: none; 
  }

  .group:active::before {
    border-color: theme('colors.cyan.300');
    transform: scale(1.05);
    transition-duration: 0.1s;
  }

  @keyframes animate-text {
    0% { width: 0; border-right: 3px solid; } 
    10% { width: 100%; } 
    70% { width: 100%; border-right: none; }
    80% { width: 0; border-right: 3px solid; } 
    100% { width: 0; border-right: none; } 
  }
  .animate-text {
    animation: animate-text 12s steps(20) infinite;
    display: inline-block;
  }
</style>
