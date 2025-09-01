<template>
  <div 
    :class="['fixed', 'inset-0', 'backdrop-blur-sm', 'flex', 'items-center', 'justify-center', 'p-4', 'z-[100]', 'transition-colors', 'duration-300', 'ease-out', 'animate-fade-in', darkMode ? 'bg-slate-950/80' : 'bg-slate-50/80']"
    @click.self="$emit('close')"
  >
    <div 
      :class="[
        darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200',
        'p-8', 'rounded-3xl', 'max-w-2xl', 'w-full', 'mx-4', 
        'shadow-[0_20px_50px_rgba(0,0,0,0.3)]', 'relative', 'border', 
        'overflow-y-auto', 'max-h-[90vh]', 'transition-transform', 'duration-300', 
        'ease-out', 'animate-zoom-in'
      ]"
    >
      <button 
        @click="closePopup" 
        :class="[
          'absolute', 'top-4', 'right-4', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 
          'rounded-full', 'bg-transparent', 'text-4xl', 'font-light', 
          'transition-all', 'duration-300',
          'hover:shadow-lg', 'hover:scale-110',
          darkMode ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-700' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
        ]"
      >
        &times;
      </button>
      
      <div class="flex flex-col items-center justify-center text-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" :class="['w-12 h-12 mb-3 transition-colors duration-300', darkMode ? 'text-cyan-400' : 'text-cyan-600']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 19.5z" />
          <path d="M20 17V5.5A2.5 2.5 0 0 0 17.5 3H6.5A2.5 2.5 0 0 0 4 5.5v11.5" />
        </svg>
        <h2 :class="['text-3xl', 'font-extrabold', 'transition-colors', darkMode ? 'text-white' : 'text-slate-950']">{{ faculty.name }}</h2>
      </div>
      
      <div class="space-y-6">
        <div :class="[darkMode ? 'bg-slate-800/50 border-cyan-700/50' : 'bg-slate-100/50 border-cyan-300/50', 'p-6', 'rounded-2xl', 'border-2', 'transition-colors', 'duration-300']">
          <div class="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 :class="['text-xl', 'font-semibold', darkMode ? 'text-white' : 'text-slate-950']">1. Durata studiilor</h3>
          </div>
          <p :class="[darkMode ? 'text-slate-300' : 'text-slate-700']">{{ facultyDetails.duration }} ani</p>
        </div>

        <div :class="[darkMode ? 'bg-slate-800/50 border-cyan-700/50' : 'bg-slate-100/50 border-cyan-300/50', 'p-6', 'rounded-2xl', 'border-2', 'transition-colors', 'duration-300']">
          <div class="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h3 :class="['text-xl', 'font-semibold', darkMode ? 'text-white' : 'text-slate-950']">2. Ce studiezi</h3>
          </div>
          <p :class="[darkMode ? 'text-slate-300' : 'text-slate-700']">{{ facultyDetails.study }}</p>
        </div>
        
        <div :class="[darkMode ? 'bg-slate-800/50 border-cyan-700/50' : 'bg-slate-100/50 border-cyan-300/50', 'p-6', 'rounded-2xl', 'border-2', 'transition-colors', 'duration-300']">
          <div class="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h3 :class="['text-xl', 'font-semibold', darkMode ? 'text-white' : 'text-slate-950']">3. Salarii medii pe job</h3>
          </div>
          <div class="space-y-4">
            <div v-for="job in facultyDetails.jobs" :key="job.name" class="p-4 rounded-xl" :class="[darkMode ? 'bg-slate-700/50' : 'bg-slate-200/50']">
              <h4 :class="['font-bold text-lg', darkMode ? 'text-white' : 'text-slate-950']">{{ job.name }}</h4>
              <p :class="['mt-1 text-sm', darkMode ? 'text-slate-300' : 'text-slate-700']">
                Salariu mediu: <span class="font-bold text-base text-cyan-500">{{ extractAverageSalary(job.salaries) }} RON/lună</span>
                <br>
                Interval: <span class="text-sm font-semibold">{{ job.salaries }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';

const props = defineProps({
  faculty: Object,
  darkMode: Boolean,
});

const emits = defineEmits(['close']);

const details = ref({
  'Facultatea de Informatică': {
    duration: 3,
    study: 'Studii aprofundate în algoritmi, structuri de date, programare orientată pe obiecte, baze de date, rețele de calculatoare și inteligență artificială.',
    jobs: [
      { name: 'Programator', salaries: 'Între 6.000 și 9.000 RON pe lună' },
      { name: 'Inginer software', salaries: 'Între 8.000 și 12.000 RON pe lună' },
      { name: 'Analist de date', salaries: 'Între 7.000 și 10.000 RON pe lună' },
      { name: 'Administrator de rețea', salaries: 'Între 6.500 și 9.500 RON pe lună' },
      { name: 'Specialist în securitate cibernetică', salaries: 'Între 9.000 și 15.000 RON pe lună' }
    ],
    keywords: ['itist', 'calculator', 'it', 'programare', 'programator', 'soft', 'tehnologie', 'informatică']
  },
  'Facultatea de Electronică, Telecomunicații și Tehnologia Informației': {
    duration: 4,
    study: 'Concepte fundamentale de electronică, circuite integrate, sisteme de comunicații, microelectronică, inginerie biomedicală și programare în sisteme embedded.',
    jobs: [
      { name: 'Inginer electronică', salaries: 'Între 5.500 și 8.000 RON pe lună' },
      { name: 'Inginer telecomunicații', salaries: 'Între 6.000 și 9.000 RON pe lună' },
      { name: 'Inginer de automatizări', salaries: 'Între 7.000 și 10.000 RON pe lună' },
      { name: 'Proiectant de circuite integrate', salaries: 'Între 8.000 și 12.000 RON pe lună' }
    ],
    keywords: ['electronica', 'telecomunicatii', 'embedded', 'tehnologie', 'inginerie', 'it', 'calculator']
  },
  'Facultatea de Litere': {
    duration: 3,
    study: 'Literatură română și universală, lingvistică, studii culturale, științele comunicării, istorie literară și teoria textului.',
    jobs: [
      { name: 'Profesor de limba și literatura română', salaries: 'Între 3.000 și 4.500 RON pe lună' },
      { name: 'Traducător', salaries: 'Între 3.500 și 6.000 RON pe lună' },
      { name: 'Jurnalist', salaries: 'Între 3.500 și 5.000 RON pe lună' },
      { name: 'Copywriter', salaries: 'Între 4.000 și 6.000 RON pe lună' },
      { name: 'Editor', salaries: 'Între 3.000 și 5.000 RON pe lună' }
    ],
    keywords: ['literatura', 'romana', 'traducere', 'jurnalism', 'comunicare']
  },
  'Facultatea de Științe Politice': {
    duration: 3,
    study: 'Sisteme politice, relații internaționale, drept public și constituțional, sociologie politică, analiză de politici publice și administrație publică.',
    jobs: [
      { name: 'Politolog', salaries: 'Între 4.000 și 6.000 RON pe lună' },
      { name: 'Analist de politici publice', salaries: 'Între 5.000 și 8.000 RON pe lună' },
      { name: 'Funcționar în administrația publică', salaries: 'Între 4.000 și 6.500 RON pe lună' },
      { name: 'Expert în relații internaționale', salaries: 'Între 6.000 și 8.000 RON pe lună' },
      { name: 'Consultant politic', salaries: 'Între 5.500 și 9.000 RON pe lună' }
    ],
    keywords: ['politica', 'politolog', 'relatii internationale', 'guvern', 'administratie', 'drept']
  },
  'Facultatea de Drept': {
    duration: 4,
    study: 'Principii de bază ale dreptului, drept civil, drept penal, drept constituțional, drept administrativ și procedură civilă/penală.',
    jobs: [
      { name: 'Avocat', salaries: 'Între 4.500 și 15.000 RON pe lună' },
      { name: 'Judecător', salaries: 'Între 8.000 și 15.000+ RON pe lună' },
      { name: 'Procuror', salaries: 'Între 7.500 și 14.000 RON pe lună' },
      { name: 'Consilier juridic', salaries: 'Între 5.000 și 9.000 RON pe lună' },
      { name: 'Notar public', salaries: 'Între 6.000 și 12.000 RON pe lună' },
      { name: 'Executor judecătoresc', salaries: 'Între 5.500 și 10.000 RON pe lună' }
    ],
    keywords: ['drept', 'avocat', 'judecator', 'procuror', 'juridic']
  },
  'Facultatea de Medicină': {
    duration: 6,
    study: 'Anatomie, fiziologie, biochimie, farmacologie, patologie, microbiologie și clinică medicală în diverse specializări.',
    jobs: [
      { name: 'Medic specialist', salaries: 'Între 8.000 și 20.000+ RON pe lună' },
      { name: 'Medic de familie', salaries: 'Între 5.000 și 10.000 RON pe lună' },
      { name: 'Chirurg', salaries: 'Între 12.000 și 30.000+ RON pe lună' },
      { name: 'Cercetător în domeniul medical', salaries: 'Între 6.000 și 15.000 RON pe lună' }
    ],
    keywords: ['medicina', 'doctor', 'medic', 'chirurgie', 'spital', 'sanatate']
  },
  'Facultatea de Jurnalism și Științele Comunicării': {
    duration: 3,
    study: 'Teorii ale comunicării, etică jurnalistică, tehnici de investigație, scriere creativă, producție media și relații publice.',
    jobs: [
      { name: 'Jurnalist', salaries: 'Între 3.500 și 5.500 RON pe lună' },
      { name: 'Reporter', salaries: 'Între 3.500 și 6.000 RON pe lună' },
      { name: 'Redactor', salaries: 'Între 4.000 și 7.000 RON pe lună' },
      { name: 'Producător media', salaries: 'Între 5.000 și 8.000 RON pe lună' },
      { name: 'Specialist în comunicare', salaries: 'Între 4.500 și 7.500 RON pe lună' },
      { name: 'Purtător de cuvânt', salaries: 'Între 6.000 și 9.000 RON pe lună' }
    ],
    keywords: ['jurnalism', 'comunicare', 'media', 'stiri', 'reporter', 'relatii publice']
  },
  'Facultatea de Matematică și Informatică': {
    duration: 3,
    study: 'Matematică superioară, algebră, analiză matematică, logică, programare, structuri de date, algoritmi și inteligență artificială.',
    jobs: [
      { name: 'Profesor de matematică', salaries: 'Între 5.000 și 7.000 RON pe lună' },
      { name: 'Analist cantitativ', salaries: 'Între 8.000 și 12.000 RON pe lună' },
      { name: 'Programator', salaries: 'Între 6.000 și 10.000 RON pe lună' },
      { name: 'Data Scientist', salaries: 'Între 9.000 și 15.000 RON pe lună' },
      { name: 'Criptograf', salaries: 'Între 10.000 și 18.000 RON pe lună' }
    ],
    keywords: ['matematica', 'informatică', 'matematician', 'programare', 'itist', 'calculator']
  },
  'Facultatea de Istorie': {
    duration: 3,
    study: 'Istoria României, istoria universală, arheologie, istoriografie, științe auxiliare ale istoriei și studii muzeale.',
    jobs: [
      { name: 'Profesor de istorie', salaries: 'Între 3.000 și 4.500 RON pe lună' },
      { name: 'Cercetător', salaries: 'Între 4.000 și 6.000 RON pe lună' },
      { name: 'Arheolog', salaries: 'Între 3.500 și 5.500 RON pe lună' },
      { name: 'Muzeograf', salaries: 'Între 3.000 și 5.000 RON pe lună' },
      { name: 'Ghid turistic', salaries: 'Între 3.500 și 5.500 RON pe lună' },
      { name: 'Analist cultural', salaries: 'Între 4.000 și 6.500 RON pe lună' }
    ],
    keywords: ['istorie', 'arheologie', 'cercetare', 'muzeu', 'muzeograf', 'cultura']
  },
});

const facultyDetails = computed(() => {
  return details.value[props.faculty.name] || {
    duration: 'Necunoscut',
    study: 'Informații indisponibile.',
    jobs: [],
  };
});

function extractAverageSalary(salaryString) {
  if (!salaryString) {
    return 'N/A';
  }
  const matches = salaryString.match(/(\d+\.?\d*)\s*și\s*(\d+\.?\d*)/);
  if (matches && matches.length === 3) {
    const minSalary = parseFloat(matches[1].replace(',', ''));
    const maxSalary = parseFloat(matches[2].replace(',', ''));
    const average = (minSalary + maxSalary) / 2;
    return Math.round(average).toLocaleString('ro-RO');
  }
  return 'N/A';
}

const closePopup = () => {
  document.body.classList.remove('overflow-hidden');
  emits('close');
};

watch(() => props.faculty, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}, { immediate: true });

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});
</script>
