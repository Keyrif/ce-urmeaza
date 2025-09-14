const universities = [

  {
    name: "Facultatea de Contabilitate și Informatică de Gestiune",
    location: "București",
    university: "Academia de Studii Economice (ASE)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "contabilitate", "informatica de gestiune", "finante", "audit", "impozite", "cig", "ase", "excel"
    ],
    salary: { min: 3000, max: 9000 },
    details: {
      duration: 3,
      study: "Contabilitate financiară, audit, fiscalitate, informatică aplicată în gestiune.",
      jobs: [
        { name: "Contabil junior", salary: "3000 - 4000 RON" },
        { name: "Contabil", salary: "4000 - 7000 RON" },
        { name: "Auditor financiar", salary: "4000 - 9000 RON" },
        { name: "Analist financiar", salary: "4500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Marketing",
    location: "București",
    university: "Academia de Studii Economice (ASE)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "marketing", "publicitate", "cercetare de marketing", "ase", "promovare", "brand", 
      "comunicare", "comportamentul consumatorului", "publicitate"
    ],
    salary: { min: 3500, max: 8000 },
    details: {
      duration: 3,
      study: "Marketing strategic, comunicare de marketing, cercetare de marketing, comportamentul consumatorului, brand management.",
      jobs: [
        { name: "Specialist Marketing", salary: "3500 - 6500 RON" },
        { name: "Manager de Brand", salary: "5000 - 8000 RON" },
        { name: "Analist de piață", salary: "4000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Business și Turism",
    location: "București",
    university: "Academia de Studii Economice (ASE)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "business", "turism", "hotel", "management", "ase", "bt", "servicii", "biznis", "bisnis"
    ],
    salary: { min: 3000, max: 7000 },
    details: {
      duration: 3,
      study: "Marketing în turism, managementul hotelier, economie, managementul afacerilor.",
      jobs: [
        { name: "Manager turism", salary: "4000 - 7000 RON" },
        { name: "Consilier de vânzări", salary: "3000 - 5500 RON" },
        { name: "Ghid turistic", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Electronică, Telecomunicații și Tehnologia Informației",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "electronica", "telecomunicatii", "tehnologia informatiei", "etti", "comunicatii", 
      "circuite", "retele", "upb", "politehnica", "electrician"
    ],
    salary: { min: 4500, max: 11000 },
    details: {
      duration: 4,
      study: "Circuite electronice, semnale și sisteme, comunicații digitale, microelectronică, inginerie biomedicală.",
      jobs: [
        { name: "Inginer de Rețea", salary: "5000 - 9000 RON" },
        { name: "Inginer de Telecomunicații", salary: "5500 - 11000 RON" },
        { name: "Inginer de Cercetare și Dezvoltare", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie în Limbi Străine",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "fils", "limbi straine", "inginerie", "franceza", "engleza", "germana", 
      "politehnica", "upb"
    ],
    salary: { min: 4000, max: 10000 },
    details: {
      duration: 4,
      study: "Curriculum similar cu facultățile de inginerie tradiționale, dar predat integral în engleză, franceză sau germană.",
      jobs: [
        { name: "Inginer de proiect", salary: "5000 - 10000 RON" },
        { name: "Inginer mecanic", salary: "4500 - 9000 RON" },
        { name: "Inginer de producție", salary: "4000 - 8500 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină Generală",
    location: "București",
    university: "Universitatea de Medicină și Farmacie Carol Davila (UMFCD)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "medicina", "doctor", "chirurgie", "sanatate", "medic", "clinica", "spital",
      "umfcd", "umf carol davila", "farmacie", "stomatologie", "kinetoterapie",
      "anatomie", "fiziologie", "farmacologie", "pediatrie", "urgenta",
      "medicin", "chrirugie", "sanate", "farmaci", "medc", "cilnica", "sptal", 
      "umf", "umcf", "stomoatologie", "kineterapie", "fizologie", "farmacologie", 
      "pediatre", "urgent"
    ],
    salary: { min: 3000, max: 30000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, farmacologie, medicină internă, chirurgie, pediatrie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" },
        { name: "Chirurg", salary: "12000 - 25000 RON" },
        { name: "Medic de familie", salary: "5000 - 8000 RON" },
        { name: "Medic de urgență", salary: "8000 - 12000 RON" },
        { name: "Medic primar", salary: "15000 - 30000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Automatică și Calculatoare",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "politehnica", "upb", "automatica", "calculatoare", "inginerie", "robotica", "sisteme",
      "programare", "hardware", "software", "circuite", "retele", "electronica",
      "automaticaa", "calculatoere", "politenica", "polihnica", "automatca", 
      "calculatoare", "inginere", "roboticaa", "sistem", "programaare", "hrdware", 
      "softwar", "circuit", "retel", "electronic", "mate"
    ],
    salary: { min: 4000, max: 25000 },
    details: {
      duration: 4,
      study: "Programare, sisteme de operare, rețele de calculatoare, inteligență artificială, robotică, electronică digitală.",
      jobs: [
        { name: "Inginer software", salary: "7000 - 15000 RON" },
        { name: "Dezvoltator embedded", salary: "8000 - 18000 RON" },
        { name: "Inginer de rețea", salary: "6000 - 10000 RON" },
        { name: "Proiectant circuite", salary: "9000 - 17000 RON" },
        { name: "Cercetător în robotică", salary: "10000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)",
    location: "București",
    university: "Academia de Studii Economice (ASE)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "ase", "csie", "it", "programare", "informatica", "software",
      "cybernetics", "statistics", "economic informatics", "calculatoare",
      "programator", "analist", "inginer software", "consultant IT", "specialist AI",
      "programere", "informaticaa", "calculetoare", "pogramare", "informatică", "informatic", 
      "softwar", "cybernatic", "statistica", "statistic", "economik", "e-conomic", 
      "calcutor", "computere", "analist", "softare", "consultan", 
      "spcialist", "baze de date", "algoritmi", 
      "matematica", "economie", "cibernetica"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 3,
      study: "baze de date, programare, statistică, analiză, economie aplicată, dezvoltarea și introducerea software-ului aplicat",
      jobs: [
        { name: "Programator junior", salary: "3000 - 5000 RON" },
        { name: "Programator C++/Java/Python/.NET", salary: "6500 - 15000 RON" },
        { name: "Programator Javascript", salary: "5000 - 19000 RON" },
        { name: "Inginer Software", salary: "6000 - 16000 RON" },
        { name: "Backend Developer", salary: "6000 - 18000 RON" },
        { name: "Frontend Developer", salary: "5000 - 13000 RON" },
        { name: "Analist Date", salary: "4000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "drept", "ub", "avocat", "judecator", "notar", "consilier juridic", 
      "politici publice", "stiinte juridice", "legislatie", "constitutie", 
      "drept international", "drept civil", "drept penal", "avocatura", 
      "juridic", "lege", "drept", "jurist", "judecatori", "notari", "avocati",
      "dret", "drept", "juvatar", "conselier", "juridic", "legilatie", 
      "constitut", "unibuc", "universitatea bucuresti", "internatioal"
    ],
    salary: { min: 3500, max: 35000 },
    details: {
      duration: 4,
      study: "Drept civil, drept penal, drept administrativ, dreptul muncii, drept european, drept internațional public și privat.",
      jobs: [
        { name: "Consilier juridic", salary: "3500 - 8000 RON" },
        { name: "Avocat stagiar", salary: "4000 - 7000 RON" },
        { name: "Notar", salary: "9000 - 20000 RON" },
        { name: "Procuror/Judecător", salary: "12000 - 35000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arhitectură și Urbanism",
    location: "București",
    university: "Universitatea de Arhitectură și Urbanism Ion Mincu (UAUIM)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "arhitectura", "urbanism", "ion mincu", "uauim", "constructii", 
      "design interior", "peisagistica", "proiectare", "inginerie civila", 
      "urbanist", "arhitect", "constructor", "inginer", "planificare", 
      "urbanism", "arhitecti", "urbanisti",
      "arhitertura", "arhitctura", "urbanis", "urbanismu", "design", "intrior", 
      "peisagistik", "proiectare"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 6,
      study: "Proiectare de arhitectură, istoria arhitecturii, urbanism, structuri de rezistență, desen tehnic, design interior.",
      jobs: [
        { name: "Arhitect junior", salary: "4000 - 7000 RON" },
        { name: "Arhitect", salary: "7000 - 15000 RON" },
        { name: "Urbanist", salary: "6000 - 12000 RON" },
        { name: "Proiectant", salary: "8000 - 16000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Economie și Administrarea Afacerilor",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "iasi", "uaic", "economie", "administrarea afacerilor", "management", 
      "marketing", "finante", "contabilitate", "business", "afaceri", 
      "economist", "manager", "contabil", "analist financiar", "marketer",
      "administrere", "afaceri", "management", "managment", "marketng", 
      "finate", "contabilitat"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Microeconomie, macroeconomie, managementul resurselor umane, marketing, finanțe corporative, contabilitate.",
      jobs: [
        { name: "Asistent manager", salary: "2800 - 4500 RON" },
        { name: "Specialist marketing", salary: "3500 - 7000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "cluj-napoca", "ubb", "litere", "filologie", "lingvistica", "literatura", 
      "jurnalism", "traducere", "engleza", "franceza", "romana", "profesor", 
      "traducator", "jurnalist", "redactor", "scriitor", "filolog", "literat", 
      "litere", "litere", "filologie", "filolog", "lingvistica", "lingvistic", 
      "literatua", "cluj napoca", "jurnalism", "jurnalis", "traducere", "traducator"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Teoria literaturii, gramatica limbii române, studii de cultură și civilizație, traducere și interpretare, jurnalism.",
      jobs: [
        { name: "Profesor", salary: "2500 - 6000 RON" },
        { name: "Traducător/Interpret", salary: "3000 - 8000 RON" },
        { name: "Jurnalist/Redactor", salary: "3000 - 7000 RON" },
        { name: "Copywriter", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică",
    location: "Timișoara",
    university: "Universitatea Politehnica Timișoara (UPT)",
    keywords: [
      "timisoara", "upt", "inginerie mecanica", "mecanica", "mecanisme", 
      "motoare", "roboti", "autovehicule", "masini", "mecanic", "inginer", 
      "proiectant", "tehnician", "mecanic auto", "inginerie", "mecanic", 
      "autovehicle", "masini",
      "inginerie", "inginerie", "mecanika", "mecansime", "motore", "rooti",
      "autovehicule", "masini", "mecanic", "ingenier"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Rezistența materialelor, termodinamică, proiectarea mașinilor, robotică, inginerie auto.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Proiectant sisteme mecanice", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "4500 - 9000 RON" },
        { name: "Inginer auto", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Fizică",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "fizica", "ub", "cercetare", "laborator", "fenomene", "fizician", 
      "profesor", "cercetator", "inginer nuclear", "fizica teoretica", 
      "fizica aplicata", "unibuc", "universitatea bucuresti", "fzik", "fizic", "cerceare", "laborator"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Fizică cuantică, fizică nucleară, optică, fizica solidului, astrofizică.",
      jobs: [
        { name: "Profesor de fizică", salary: "2800 - 6000 RON" },
        { name: "Cercetător științific", salary: "5000 - 15000 RON" },
        { name: "Inginer în domeniul nuclear", salary: "8000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Chimie",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "chimie", "uaic", "farmacist", "chimist", "cercetator", "laborator", 
      "chimie organica", "chimie anorganica", "analist de laborator", 
      "productie", "industria chimica", "cosmetice", "medicamente",
      "chimie", "chemie", "farmcist", "chimist", "cercetator"
    ],
    salary: { min: 3000, max: 12000 },
    details: {
      duration: 3,
      study: "Chimie organică, chimie anorganică, biochimie, chimie analitică, fizico-chimie.",
      jobs: [
        { name: "Analist de laborator", salary: "3000 - 6000 RON" },
        { name: "Chimist în industrie", salary: "4000 - 8000 RON" },
        { name: "Cercetător", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Sociologie și Asistență Socială",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "sociologie", "asistenta sociala", "ub", "psihologie", "cercetare sociala", 
      "comunitate", "ong", "asistent social", "sociolog", "consilier", 
      "analist de politici", "unibuc", "universitatea bucuresti", "socilog", "asistenta sociala", "sociologi"
    ],
    salary: { min: 2500, max: 9000 },
    details: {
      duration: 3,
      study: "Sociologie generală, asistență socială, psihologie socială, metodologie a cercetării, demografie.",
      jobs: [
        { name: "Asistent social", salary: "2500 - 5000 RON" },
        { name: "Sociolog", salary: "3000 - 6000 RON" },
        { name: "Consilier", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "stiinte politice", "ubb", "relatii internationale", "diplomatie", 
      "politolog", "analist politic", "consultant", "politici publice", 
      "politologie", "relatii", "internationale", "diplomatie", 
      "politicolog", "cluj napoca", "analist", "politic"
    ],
    salary: { min: 3000, max: 11000 },
    details: {
      duration: 3,
      study: "Sisteme politice, relații internaționale, drept constituțional, istoria ideilor politice, guvernanță.",
      jobs: [
        { name: "Analist politic", salary: "3000 - 7000 RON" },
        { name: "Consilier parlamentar", salary: "4000 - 9000 RON" },
        { name: "Diplomat", salary: "6000 - 11000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Psihologie și Științe ale Educației",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "psihologie", "stiinte ale educatiei", "uvt", "psiholog", "pedagog", 
      "consiliere", "terapie", "resurse umane", "psihiatrie", "profesor", 
      "educatie", "psihologic", "psiologie", "terapist", "psihologi", "educaie",
      "pishologie", "shihologie", "psiologie"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Psihologie clinică, psihologie organizațională, pedagogie, psihologia dezvoltării, consiliere psihologică.",
      jobs: [
        { name: "Psiholog clinician", salary: "3500 - 8000 RON" },
        { name: "Profesor", salary: "2800 - 6000 RON" },
        { name: "Consilier în resurse umane", salary: "4000 - 10000 RON" },
        { name: "Psiholog în organizații", salary: "5000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Filosofie",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "istorie", "filosofie", "ubb", "istoric", "filosof", "cercetator", 
      "profesor", "muzeograf", "arheolog", "studiu istoric", "cercetare",
      "istore", "filosfie", "filozofie", "istoric", "cercetator", "profesor", 
      "muzeograf", "cluj napoca", "arheolog"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria Antică, istoria modernă, etica, logica, metafizica, filosofia științei.",
      jobs: [
        { name: "Profesor de istorie/filosofie", salary: "2600 - 5500 RON" },
        { name: "Cercetător științific", salary: "3000 - 8000 RON" },
        { name: "Muzeograf", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Matematică și Informatică",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "matematica", "informatică", "ub", "programator", "analist", "cercetator", 
      "profesor", "date", "unibuc", "universitatea bucuresti", "algoritmi", "ciorna", "mat", "info", "matematic", 
      "informatic"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 3,
      study: "Analiză matematică, algebră, geometrie, programare avansată, baze de date, inteligență artificială.",
      jobs: [
        { name: "Programator", salary: "4000 - 15000 RON" },
        { name: "Analist de date", salary: "5000 - 12000 RON" },
        { name: "Cercetător în matematică", salary: "4500 - 18000 RON" },
        { name: "Profesor", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Aerospațială",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie", "aerospațială", "upb", "aeronautica", "avioane", "rachete", 
      "spatiu", "drone", "aerodinamica", "inginer", "proiectant", "pilot", 
      "cercetator", "inginer", "aerospaial", "aeronautica", "aeronave", "avioane", "spatiu", 
      "dron", "aerodinamica", "inginer"
    ],
    salary: { min: 4500, max: 25000 },
    details: {
      duration: 4,
      study: "Aerodinamica, structuri aerospațiale, propulsia, navigația aeriană, materiale avansate.",
      jobs: [
        { name: "Inginer de proiectare", salary: "6000 - 15000 RON" },
        { name: "Inginer de întreținere", salary: "5000 - 10000 RON" },
        { name: "Cercetător în domeniul aerospațial", salary: "8000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină Veterinară",
    location: "București",
    university: "Universitatea de Științe Agronomice și Medicină Veterinară (USAMV)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "medicina veterinara", "usamv", "doctor", "veterinar", "animale", "ferma", 
      "sanatate", "boli", "animale de companie", "medicina", "veterinara", 
      "veterinar", "animale", "farmacie", "sanatate"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 6,
      study: "Anatomia animalelor, patologie, chirurgie veterinară, farmacologie, zootehnie.",
      jobs: [
        { name: "Medic veterinar", salary: "4000 - 10000 RON" },
        { name: "Cercetător în medicină veterinară", salary: "5000 - 12000 RON" },
        { name: "Medic de urgență veterinară", salary: "6000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Silvicultură și Exploatări Forestiere",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "silvicultura", "exploatari forestiere", "brasov", "unitbv", "padure", 
      "silvicultor", "inginer silvic", "ecolog", "biolog", "exploatari", 
      "forestiere", "padure"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 4,
      study: "Ecologie forestieră, dendrometrie, amenajarea pădurilor, exploatări forestiere, managementul resurselor cinegetice.",
      jobs: [
        { name: "Inginer silvic", salary: "4000 - 8000 RON" },
        { name: "Silvicultor", salary: "3500 - 7000 RON" },
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Electrică",
    location: "Timișoara",
    university: "Universitatea Politehnica Timișoara (UPT)",
    keywords: [
      "inginerie electrica", "timisoara", "upt", "electrician", "inginer", 
      "electronica", "energie", "sisteme electrice", "automatizari", "retele",
      "inginerie", "electric", "electrician", "inginer", "electronica", "energie",
      "sistem", "electric", "automatizare", "rete"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Circuite electrice, mașini electrice, sisteme de energie, electronică de putere, automatizări industriale.",
      jobs: [
        { name: "Inginer electrician", salary: "5000 - 10000 RON" },
        { name: "Inginer de automatizări", salary: "6000 - 12000 RON" },
        { name: "Proiectant de instalații electrice", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Muzică",
    location: "București",
    university: "Universitatea Națională de Muzică București (UNMB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "muzica", "unmb", "artist", "instrumentist", "cantaret", "dirijor", 
      "compozitor", "muzicolog", "profesor de muzica", "educatie muzicala", 
      "interpretare muzicala", "muzica", "instrumentist", "cantaret", 
      "dirijor", "compozitor", "muzicolog", "profesor"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Teorie muzicală, istoria muzicii, interpretare instrumentală, dirijat, compoziție, pedagogie muzicală.",
      jobs: [
        { name: "Profesor de muzică", salary: "2500 - 5000 RON" },
        { name: "Muzician în orchestră", salary: "3000 - 8000 RON" },
        { name: "Compozitor", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Jurnalism și Științele Comunicării",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "jurnalism", "stiintele comunicarii", "ub", "comunicare", "media", 
      "redactor", "jurnalist", "reporter", "relatii publice", "publice", 
      "jurnalism", "jurnalism", "stiintele", "comunicarii", "comunicare", 
      "media", "redactor", "unibuc", "universitatea bucuresti", "jurnalist", "reporter", "relatii publice"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Teoria comunicării, etica jurnalismului, scriere creativă, jurnalism online, relații publice, publicitate.",
      jobs: [
        { name: "Reporter/Redactor", salary: "2800 - 6000 RON" },
        { name: "Specialist în PR", salary: "4000 - 9000 RON" },
        { name: "Manager de comunicare", salary: "6000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte Plastice și Design",
    location: "Cluj-Napoca",
    university: "Universitatea de Artă și Design din Cluj-Napoca (UAD)",
    keywords: [
      "arte plastice", "design", "uad", "grafica", "pictura", "sculptura", 
      "fotografie", "designer", "grafician", "pictor", "sculptor", "fotograf",
      "arte", "plastic", "cluj napoca", "design", "grafica", "pictur", "sculptura", "fotografie"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Teoria artei, istoria artei, desen, pictură, sculptură, grafică, design vestimentar, design de produs.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Artist plastic", salary: "2500 - 7000 RON" },
        { name: "Designer vestimentar", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Construcții",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "constructii", "tuiasi", "inginer", "arhitect", "structuri", 
      "drumuri", "poduri", "inginerie civila", "santier", "geodezie", 
      "instalatii", "hidrotehnica", "constructii", "constructor", 
      "arhitect", "structuri", "drumuri", "poduri", "geodezie", 
      "instalatii"
    ],
    salary: { min: 3500, max: 20000 },
    details: {
      duration: 4,
      study: "Rezistența materialelor, proiectarea structurilor, geodezie, construcții hidrotehnice, managementul șantierelor.",
      jobs: [
        { name: "Inginer constructor", salary: "5000 - 10000 RON" },
        { name: "Proiectant de structuri", salary: "6000 - 12000 RON" },
        { name: "Șef de șantier", salary: "7000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geografie",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "geografie", "ubb", "geograf", "profesor", "cartografie", 
      "turism", "geologie", "mediu", "topografie", "geografie", 
      "geograf", "cluj napoca", "cartografie", "turism", "geologie", "mediu", 
      "topografie"
    ],
    salary: { min: 2500, max: 9000 },
    details: {
      duration: 3,
      study: "Geografie fizică, geografie umană, cartografie, geomorfologie, climatologie, turism.",
      jobs: [
        { name: "Profesor de geografie", salary: "2500 - 5500 RON" },
        { name: "Specialist în turism", salary: "3000 - 7000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Electronică, Telecomunicații și Tehnologia Informației",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "electronica", "telecomunicatii", "tehnologia informatiei", "utcn", 
      "inginer", "retele", "comunicatii", "robotica", "hardware", "software",
      "electronica", "telecomunicati", "tehnologia", "informatiei", "utcn", 
      "inginer", "cluj napoca", "rete", "comunicatii", "robotica", "hardware", "software"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Procesare semnal, circuite integrate, rețele de comunicații, sisteme de operare, robotică.",
      jobs: [
        { name: "Inginer electronist", salary: "5000 - 12000 RON" },
        { name: "Inginer de telecomunicații", salary: "6000 - 15000 RON" },
        { name: "Dezvoltator de software", salary: "7000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Teatru și Film",
    location: "București",
    university: "Universitatea Națională de Artă Teatrală și Cinematografică (UNATC)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "teatru", "film", "unatc", "actor", "regizor", "scenarist", "dramaturg", 
      "producator", "muzica", "regie", "scenografie", "actorie", "filologie",
      "theatru", "filmm", "actor", "reggizor", "scenarist", "dramaturg", 
      "producator", "muzic"
    ],
    salary: { min: 2500, max: 15000 },
    details: {
      duration: 3,
      study: "Actorie, regie, scenografie, muzică de film, dramaturgie, filmologie.",
      jobs: [
        { name: "Actor", salary: "2500 - 8000 RON" },
        { name: "Regizor", salary: "4000 - 15000 RON" },
        { name: "Scenarist", salary: "3000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice, Administrative și ale Comunicării",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "stiinte politice", "administrative", "comunicare", "ubb", "politologie", 
      "administratia publica", "relatii publice", "jurnalism", "consultant",
      "politologie", "cluj napoca", "administrativ", "comunicare", "relatii publice", 
      "jurnalism"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, relații publice, publicitate, comunicare media.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Consultant politic", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Târgu Mureș",
    university: "Universitatea de Medicină, Farmacie, Științe și Tehnologie (UMFST)",
    keywords: [
      "medicina", "farmacie", "targu mures", "umfst", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "cercetare medicala", "farmacologie",
      "medicin", "farmaci", "farmacist", "sante", "spital", "clinica"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, stomatologie, nutriție, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Civilă și de Instalații",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "inginerie civila", "instalatii", "iasi", "tuiasi", "constructii", 
      "instalatii sanitare", "termice", "electrice", "sisteme", "proiectant",
      "inginer", "constructor", "inginer", "civil", "instalati", "constructi",
      "sanitare", "termice", "electrice", "sisteme", "proiectant"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Construcții civile și industriale, instalații sanitare, termice și electrice, managementul proiectelor de construcții.",
      jobs: [
        { name: "Inginer de instalații", salary: "5000 - 10000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" },
        { name: "Responsabil de proiect", salary: "8000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Chimie și Inginerie Chimică",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "chimie", "inginerie chimica", "ubb", "chimist", "inginer", 
      "cercetator", "industria chimica", "petrol", "farmacie", "alimentara",
      "chimie", "inginerie", "chimica", "chimist", "inginer", "cercetator",
      "industria", "cluj napoca", "chimica", "petrol", "farmacie", "alimentara"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Chimie organică, inginerie de proces, tehnologii chimice, polimeri, biochimie.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Analist de calitate", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "stiinte economice", "oradea", "economie", "finante", "contabilitate", 
      "management", "marketing", "business", "afaceri", "economist", 
      "manager", "contabil", "analist financiar", "marketer",
      "stiinte", "economice", "economie", "finate", "contabilitat", 
      "management", "marketing", "business", "afaceri"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Microeconomie, macroeconomie, management, marketing, finanțe-bănci, contabilitate.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Educație Fizică și Sport",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "educatie fizica", "sport", "pitesti", "profesor", "antrenor", "kinetoterapeut", 
      "nutritie", "atletism", "jocuri sportive", "sportiv", "antrenament",
      "educatie", "fizica", "sport", "profesor", "antrenor", "kinetoterapeut"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Anatomie funcțională, fiziologia efortului, teoria și metodologia antrenamentului, kinetoterapie, nutriție sportivă.",
      jobs: [
        { name: "Profesor de educație fizică", salary: "2500 - 5000 RON" },
        { name: "Antrenor sportiv", salary: "3000 - 8000 RON" },
        { name: "Kinetoterapeut", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică și Electrică",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "inginerie", "mecanica", "electrica", "brasov", "unitbv", "inginer", 
      "proiectant", "mecanic", "electrician", "roboti", "autovehicule", 
      "inginerie", "mecanic", "electric", "roboti", "autovehicule"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Sisteme mecanice, mașini electrice, electronică de putere, robotică industrială, tehnologia materialelor.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Inginer electrician", salary: "5000 - 10000 RON" },
        { name: "Inginer de mentenanță", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Horticultură",
    location: "București",
    university: "Universitatea de Științe Agronomice și Medicină Veterinară (USAMV)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "horticultura", "usamv", "agronomie", "peisagistica", "gradini", 
      "plante", "agronom", "inginer horticol", "peisagist", "ferma", 
      "gradinarit", "agricultura",
      "horticultura", "agronom", "peisagistic", "gradini", "plant"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 4,
      study: "Producția de fructe și legume, floricultură, peisagistică, viticultură, pomicultură.",
      jobs: [
        { name: "Inginer horticol", salary: "3500 - 7000 RON" },
        { name: "Peisagist", salary: "3000 - 8000 RON" },
        { name: "Consultant în agricultură", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie a Sistemelor Biotehnice",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie", "sisteme", "biotehnice", "upb", "biotehnologie", "biologie", 
      "inginerie genetica", "bioinginerie", "medicina", "cercetare", 
      "bioinginer", "cercetator", "specialist in biotehnologie",
      "biotehnic", "biotehnolog", "biologie", "inginerie"
    ],
    salary: { min: 4000, max: 18000 },
    details: {
      duration: 4,
      study: "Inginerie genetică, bioprocese, echipamente medicale, bioinformatică, materiale biocompatibile.",
      jobs: [
        { name: "Inginer biotehnic", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "6000 - 15000 RON" },
        { name: "Specialist în controlul calității", salary: "4000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geologie și Geofizică",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "geologie", "geofizica", "ub", "petrol", "gaze", "minerale", 
      "resurse naturale", "cercetare", "geolog", "geofizician", 
      "analist", "cercetator", "inginer", "geologie", "geofizica", 
      "geolog", "geofizician", "unibuc", "universitatea bucuresti", "cercetator"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 3,
      study: "Mineralogie, petrologie, geologie structurală, geofizică de explorare, hidrogeologie.",
      jobs: [
        { name: "Geolog de explorare", salary: "5000 - 12000 RON" },
        { name: "Geofizician", salary: "6000 - 15000 RON" },
        { name: "Cercetător", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Comunicării și Relații Internaționale",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "stiinte", "comunicare", "relatii internationale", "oradea", "jurnalist", 
      "diplomat", "analist politic", "relatii publice", "media", "politica", 
      "interna", "internationala", "stiinte", "comunicare", "relatii", 
      "international"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Teoria comunicării, jurnalism, relații publice, drept internațional, politici externe, diplomație.",
      jobs: [
        { name: "Jurnalist", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Consilier în diplomație", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Design de Produs și Mediu",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "design", "produs", "mediu", "brasov", "unitbv", "designer", "inginer", 
      "produs industrial", "design de interior", "designer", "grafic", 
      "inginer", "produs", "mediu", "design", "interior"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 4,
      study: "Design industrial, grafică asistată de calculator, materiale noi, design de interior, design durabil.",
      jobs: [
        { name: "Designer de produs", salary: "4000 - 9000 RON" },
        { name: "Inginer de produs", salary: "5000 - 12000 RON" },
        { name: "Designer de interior", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie în Limbi Străine",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie", "limbi straine", "upb", "tehnologie", "multilingv", 
      "software", "inginer", "traducator tehnic", "traducator", "soft"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Sisteme informatice, electronică, mecanică, management, limbi străine (engleză, franceză, germană).",
      jobs: [
        { name: "Inginer software multilingv", salary: "7000 - 18000 RON" },
        { name: "Traducător tehnic", salary: "5000 - 10000 RON" },
        { name: "Consultant IT", salary: "8000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Psihologie și Științe ale Educației",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "psihologie", "stiinte ale educatiei", "ub", "psiholog", "pedagog", 
      "consilier", "terapie", "resurse umane", "psihiatrie", "profesor", 
      "educatie", "psihologic", "psiologie", "terapist", "psihologi", "educaie",
      "pishologie", "shihologie", "psiologie", "unibuc", "universitatea bucuresti", "educat", "stiinte", "educatiei"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Psihologie clinică, psihologia educației, pedagogie, psihologia dezvoltării, consiliere psihologică.",
      jobs: [
        { name: "Psiholog clinician", salary: "3500 - 8000 RON" },
        { name: "Profesor", salary: "2800 - 6000 RON" },
        { name: "Consilier în resurse umane", salary: "4000 - 10000 RON" },
        { name: "Psiholog în organizații", salary: "5000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină Dentară",
    location: "Timișoara",
    university: "Universitatea de Medicină și Farmacie Victor Babeș (UMFT)",
    keywords: [
      "medicina dentara", "timisoara", "umft", "dentist", "stomatolog", 
      "stomatologie", "ortodont", "chirurgie orala", "protetica dentara", 
      "igiena orala", "medicina", "dentara", "dentist", "stomatolog", "ortodont",
      "chirurgie", "orala"
    ],
    salary: { min: 4000, max: 25000 },
    details: {
      duration: 6,
      study: "Anatomie și fiziologie orală, protetică, chirurgie orală și maxilo-facială, ortodonție, endodonție.",
      jobs: [
        { name: "Medic stomatolog", salary: "5000 - 15000 RON" },
        { name: "Chirurg oral", salary: "10000 - 25000 RON" },
        { name: "Ortodont", salary: "12000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Silvicultură",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "silvicultura", "suceava", "usv", "padure", "forestier", "inginer", 
      "ecolog", "biolog", "silvicultor", "conservare", "mediu", 
      "silvicultura", "silvicultur", "padure", "forestier", "inginer", 
      "ecolog", "biolog", "conservare"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 4,
      study: "Dendrometrie, amenajarea pădurilor, ecologie forestieră, managementul resurselor naturale, protecția mediului.",
      jobs: [
        { name: "Inginer silvic", salary: "4000 - 8000 RON" },
        { name: "Silvicultor", salary: "3500 - 7000 RON" },
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Naturii și Agronomie",
    location: "Târgu Jiu",
    university: "Universitatea Constantin Brâncuși",
    keywords: [
      "stiinte ale naturii", "agronomie", "targu jiu", "agricultura", 
      "biologie", "ecologie", "biochimie", "agronom", "ecolog", "biolog",
      "stiinte", "naturii", "agronomie", "agricultur", "biologie", 
      "ecologie", "biochimie", "agronom", "ecolog", "biolog"
    ],
    salary: { min: 2800, max: 9000 },
    details: {
      duration: 4,
      study: "Biologie, ecologie, chimie, agrochimie, tehnologii agricole, protecția plantelor.",
      jobs: [
        { name: "Inginer agronom", salary: "3500 - 7000 RON" },
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" },
        { name: "Cercetător", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Geografie",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "istorie", "geografie", "constanta", "ovidius", "istoric", "geograf", 
      "profesor", "muzeograf", "arheolog", "turism", "istorie", "geografie", 
      "istoric", "geograf", "profesor", "muzeograf", "arheolog", "turism"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria Antică, istoria modernă, geografia fizică, geografia umană, arheologie, cartografie.",
      jobs: [
        { name: "Profesor de istorie/geografie", salary: "2600 - 5500 RON" },
        { name: "Cercetător", salary: "3000 - 8000 RON" },
        { name: "Ghid turistic", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Energetică",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie energetica", "upb", "energie", "electrica", "termica", 
      "energie regenerabila", "petrol", "gaze", "inginer", "consultant",
      "inginerie", "energetic", "energie", "electrica", "termica", "regenerabila"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Termodinamică, centrale electrice, rețele electrice, energie regenerabilă (solar, eolian), management energetic.",
      jobs: [
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "5000 - 10000 RON" },
        { name: "Consultant în energie regenerabilă", salary: "7000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Jurnalism, Relații Publice și Științele Comunicării",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "jurnalism", "relatii publice", "comunicare", "iasi", "uaic", "jurnalist", 
      "reporter", "relatii", "comunicare", "media", "pr", "publicitate", 
      "jurnalist", "reporter", "relatii", "publice", "comunicare", "media", 
      "pr", "publicitate"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Teoria comunicării, jurnalism scris și audio-vizual, relații publice, publicitate, sociologia mass-media.",
      jobs: [
        { name: "Jurnalist", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Manager de comunicare", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură Navală",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "inginerie navala", "arhitectura navala", "galati", "inginer", 
      "arhitect", "nave", "constructii navale", "mecanica", "hidraulica",
      "inginerie", "navala", "arhitectur", "navala", "nave", "constructii", 
      "mecanica", "hidraulica"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Proiectarea navelor, hidrodinamică, structuri navale, propulsie navală, construcții și reparații de nave.",
      jobs: [
        { name: "Inginer naval", salary: "6000 - 15000 RON" },
        { name: "Arhitect naval", salary: "7000 - 18000 RON" },
        { name: "Manager de proiect naval", salary: "9000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Teologie Ortodoxă",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "teologie ortodoxa", "ubb", "preot", "teolog", "religie", "biserica", 
      "pastor", "educatie religioasa", "istoria bisericii", "teologie", 
      "ortodoxa", "cluj napoca", "religie", "biserica", "pastor"
    ],
    salary: { min: 2000, max: 6000 },
    details: {
      duration: 4,
      study: "Teologie dogmatică, etică creștină, istoria bisericii, drept canonic, liturgică, teologie morală.",
      jobs: [
        { name: "Preot", salary: "2000 - 5000 RON" },
        { name: "Profesor de religie", salary: "2500 - 4500 RON" },
        { name: "Ghid spiritual", salary: "2000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geografie, Turism și Sport",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "geografie", "turism", "sport", "constanta", "ovidius", "turist", 
      "ghid turistic", "antrenor", "geograf", "organizator de evenimente",
      "geografie", "turism", "sport", "turist", "ghid", "antrenor", "geograf"
    ],
    salary: { min: 2500, max: 9000 },
    details: {
      duration: 3,
      study: "Geografie turistică, managementul destinațiilor turistice, kinetoterapie, management sportiv, organizarea evenimentelor.",
      jobs: [
        { name: "Specialist în turism", salary: "3000 - 7000 RON" },
        { name: "Antrenor", salary: "2500 - 6000 RON" },
        { name: "Organizator de evenimente", salary: "3500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică și Protecția Mediului",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "inginerie chimica", "protectia mediului", "iasi", "tuiasi", "inginer", 
      "chimist", "ecolog", "poluare", "reciclare", "resurse", "inginerie", 
      "chimica", "protectia", "mediului", "chimist", "ecolog"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, controlul poluării, tratarea apei, managementul deșeurilor, tehnologii ecologice.",
      jobs: [
        { name: "Inginer de mediu", salary: "5000 - 10000 RON" },
        { name: "Consultant de mediu", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Biologie și Geologie",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "biologie", "geologie", "ubb", "biolog", "geolog", "cercetator", 
      "profesor", "laborator", "paleontologie", "minerale", "plante", "animale",
      "biologie", "cluj napoca", "geologie", "biolog", "geolog", "cercetator", "profesor"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Biologie celulară, genetică, zoologie, botanică, mineralogie, geologie structurală.",
      jobs: [
        { name: "Biolog", salary: "3000 - 6000 RON" },
        { name: "Cercetător", salary: "4000 - 9000 RON" },
        { name: "Profesor", salary: "2800 - 5500 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Automatică, Calculatoare și Inginerie Electrică",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "automatica", "calculatoare", "inginerie electrica", "brasov", "unitbv",
      "inginer", "programator", "electronist", "robotica", "automation", 
      "automatizare", "automatic", "calculatoare", "inginerie", "electric"
    ],
    salary: { min: 4000, max: 25000 },
    details: {
      duration: 4,
      study: "Sisteme de control automat, programare, electronică, robotică, inteligență artificială, sisteme embedded.",
      jobs: [
        { name: "Inginer automatist", salary: "6000 - 15000 RON" },
        { name: "Programator embedded", salary: "7000 - 18000 RON" },
        { name: "Inginer electrician", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Administrație Publică",
    location: "București",
    university: "Școala Națională de Studii Politice și Administrative (SNSPA)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "administratia publica", "snspa", "politica", "guvern", "management", 
      "functii publice", "consultant", "politici", "administrare", "administratie",
      "publica", "guvern", "management", "functii", "publice"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Administrație publică, politici publice, drept administrativ, management public, relații internaționale.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină",
    location: "Craiova",
    university: "Universitatea de Medicină și Farmacie din Craiova",
    keywords: [
      "medicina", "craiova", "umf craiova", "doctor", "sanatate", "spital", 
      "clinica", "chirurgie", "farmacie", "stomatologie", "medicin", 
      "doctor", "sanate", "spital"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, farmacologie, medicină internă, chirurgie, pediatrie, ginecologie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" },
        { name: "Chirurg", salary: "12000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice și Gestiunea Afacerilor",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "stiinte economice", "gestiunea afacerilor", "cluj-napoca", "ubb", 
      "economie", "finante", "contabilitate", "management", "business", 
      "gestiune", "finantist", "contabil", "manager", "business", 
      "economist", "cluj napoca", "gestiunea", "afacerilor"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Management, finanțe, contabilitate, marketing, gestiune, economia afacerilor.",
      jobs: [
        { name: "Manager", salary: "3500 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Administrative",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "drept", "stiinte administrative", "iasi", "uaic", "avocat", "judecator", 
      "notar", "consilier", "juridic", "lege", "administrativ", "drept", 
      "stiinte", "administrativ", "avocat", "judecator", "notar", 
      "consilier", "juridic"
    ],
    salary: { min: 3500, max: 25000 },
    details: {
      duration: 4,
      study: "Drept civil, drept penal, drept administrativ, dreptul muncii, administrație publică.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Funcționar public", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte Vizuale și Design",
    location: "Iași",
    university: "Universitatea Națională de Arte George Enescu (UNAGE)",
    keywords: [
      "arte vizuale", "design", "iasi", "unage", "pictura", "sculptura", 
      "grafica", "fotografie", "designer", "grafician", "pictor", "sculptor",
      "arte", "vizuale", "design", "pictura", "sculptura", "grafica", 
      "fotografie", "designer", "grafician"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Pictură, sculptură, grafică, artă murală, fotografie-video, design vestimentar, design industrial.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Artist", salary: "2500 - 7000 RON" },
        { name: "Designer de interior", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie chimica", "upb", "chimist", "inginer", "cercetator", 
      "industria chimica", "petrol", "farmacie", "alimentara", "inginerie", 
      "chimica", "chimist", "inginer", "cercetator", "industria", "chimica"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Inginerie de proces, tehnologii chimice, polimeri, biochimie, securitate și sănătate în muncă.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Specialist în controlul calității", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Mediului",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "stiinte", "mediului", "ubb", "ecolog", "biolog", "cercetator", 
      "poluare", "reciclare", "resurse", "protecția mediului", 
      "ecologie", "cluj napoca", "biologie", "cercetator"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Poluare și protecția mediului, managementul deșeurilor, resurse de apă, sisteme informaționale geografice (GIS).",
      jobs: [
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" },
        { name: "Cercetător ecolog", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geografie",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "geografie", "iasi", "uaic", "geograf", "profesor", "cartografie", 
      "turism", "geologie", "mediu", "topografie", "geografie", "geograf", 
      "profesor", "cartografie", "turism", "geologie", "mediu", 
      "topografie"
    ],
    salary: { min: 2500, max: 9000 },
    details: {
      duration: 3,
      study: "Geografie fizică, geografie umană, cartografie, geomorfologie, climatologie, turism.",
      jobs: [
        { name: "Profesor de geografie", salary: "2500 - 5500 RON" },
        { name: "Specialist în turism", salary: "3000 - 7000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Teologie",
    location: "Târgoviște",
    university: "Universitatea Valahia din Târgoviște",
    keywords: [
      "istorie", "teologie", "targoviste", "valahia", "istoric", "preot", 
      "teolog", "profesor", "cercetator", "religie", "istorie", "teologie", 
      "istoric", "preot", "teolog", "profesor", "cercetator", "religie"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria medie, istoria modernă, teologie dogmatică, drept canonic, istoria bisericii.",
      jobs: [
        { name: "Profesor", salary: "2600 - 5500 RON" },
        { name: "Preot", salary: "2000 - 5000 RON" },
        { name: "Cercetător", salary: "3000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Muzică și Teatru",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "muzica", "teatru", "timisoara", "uvt", "cantaret", "actor", "instrumentist", 
      "regizor", "profesor", "interpretare", "muzicala", "actorie", "regie", 
      "scenografie", "muzica", "teatru", "cantaret", "actor", "instrumentist", 
      "regizor", "profesor"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Muzicologie, pedagogie muzicală, interpretare instrumentală, actorie, regie, scenografie.",
      jobs: [
        { name: "Profesor de muzică/teatru", salary: "2500 - 5000 RON" },
        { name: "Artist independent", salary: "2500 - 8000 RON" },
        { name: "Muzician în orchestră", salary: "3000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "medicina", "farmacie", "oradea", "doctor", "farmacist", "sanatate", 
      "spital", "clinica", "medicin", "farmaci", "doctor", "sanatate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, farmacologie, medicină generală, biochimie farmaceutică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe ale Comunicării",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "litere", "stiintele comunicarii", "suceava", "usv", "jurnalism", 
      "comunicare", "relatii publice", "jurnalist", "redactor", "profesor",
      "litere", "stiintele", "comunicarii", "jurnalism", "comunicare", 
      "relatii", "publice", "jurnalist"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură română, limbi străine, jurnalism, relații publice, publicitate, sociologie.",
      jobs: [
        { name: "Profesor de română/engleză", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Specialist în comunicare", salary: "3500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Educației",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "stiintele educatiei", "pitesti", "pedagog", "profesor", "invatator", 
      "educatie", "psihologie", "invatamant primar", "prescolar",
      "stiinte", "educatiei", "pedagog", "profesor", "invatator", "educatie"
    ],
    salary: { min: 2500, max: 7000 },
    details: {
      duration: 3,
      study: "Pedagogie, psihologia educației, didactica specialităților, management educațional, asistență psihopedagogică.",
      jobs: [
        { name: "Învățător/Educator", salary: "2500 - 5000 RON" },
        { name: "Profesor", salary: "3000 - 6000 RON" },
        { name: "Consilier școlar", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "inginerie", "brasov", "unitbv", "mecanica", "electrica", "electronica", 
      "inginer", "proiectant", "tehnician", "inginer", "mecanica", "electrica",
      "electronica", "proiectant", "tehnician"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Mecanică, electrică, electronică, mecatronică, autovehicule rutiere, tehnologia construcțiilor de mașini.",
      jobs: [
        { name: "Inginer de proces", salary: "5000 - 10000 RON" },
        { name: "Inginer proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Psihologie și Științele Comunicării",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "psihologie", "stiintele comunicarii", "iasi", "uaic", "psiholog", 
      "consilier", "jurnalist", "comunicare", "relatii publice", "psiholog", 
      "consilier", "jurnalist", "comunicare", "relatii publice"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Psihologie socială, psihologia personalității, comunicare publică, relații publice, publicitate.",
      jobs: [
        { name: "Consilier psihologic", salary: "3500 - 8000 RON" },
        { name: "Specialist în PR", salary: "4000 - 9000 RON" },
        { name: "Psiholog organizațional", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Sociale",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "drept", "stiinte sociale", "craiova", "avocat", "judecator", "asistent social", 
      "sociolog", "drept", "sociale", "avocat", "judecator", "asistent", "social"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, sociologie, asistență socială, politici sociale.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Asistent social", salary: "3000 - 6000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "medicina", "farmacie", "galati", "doctor", "farmacist", "spital", 
      "sanatate", "medicin", "farmaci", "spital", "sanatate"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, nutriție și dietetică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Asistent medical", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Civilă și Mecanică",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie", "civila", "mecanica", "pitesti", "inginer", "constructor", 
      "mecanic", "proiectant", "inginer", "civil", "mecanic", "proiectant"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Construcții civile, inginerie mecanică, materiale de construcție, autovehicule rutiere.",
      jobs: [
        { name: "Inginer constructor", salary: "5000 - 10000 RON" },
        { name: "Inginer mecanic", salary: "4500 - 9000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Teologie",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "litere", "teologie", "pitesti", "profesor", "jurnalist", "preot", 
      "traducator", "litere", "teologie", "profesor", "jurnalist", "preot"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, jurnalism, teologie, istoria bisericii.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte Plastice",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "arte plastice", "timisoara", "uvt", "pictura", "sculptura", "grafica", 
      "artist", "pictor", "sculptor", "grafician", "galerist", "curator", 
      "arte", "plastic", "pictura", "sculptura", "grafica"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Desen, pictură, sculptură, grafică, istoria artei, estetică.",
      jobs: [
        { name: "Artist", salary: "2500 - 7000 RON" },
        { name: "Profesor de arte", salary: "2800 - 5500 RON" },
        { name: "Restaurator de artă", salary: "3500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică, Industrială și Maritimă",
    location: "Constanța",
    university: "Universitatea Maritimă din Constanța",
    keywords: [
      "inginerie", "mecanica", "industriala", "maritima", "constanta", "nave", 
      "motoare", "marin", "inginer", "mecanic", "marinar", "mecanica", 
      "industriala", "maritima", "nave", "motoare", "marinar"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Propulsia navelor, motoare, sisteme hidraulice, automatizări navale, management maritim.",
      jobs: [
        { name: "Inginer mecanic", salary: "6000 - 15000 RON" },
        { name: "Ofițer mecanic de navă", salary: "8000 - 20000 RON" },
        { name: "Manager în transporturi navale", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Târgoviște",
    university: "Universitatea Valahia din Târgoviște",
    keywords: [
      "stiinte economice", "targoviste", "valahia", "economie", "finante", 
      "contabilitate", "management", "marketing", "economist", "contabil", 
      "manager", "analist financiar", "stiinte", "economice", "economie", 
      "finate", "contabilitat", "management", "marketing"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate și informatică de gestiune, marketing, management.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Alimentară",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "inginerie alimentara", "iasi", "tuiasi", "inginer", "alimente", 
      "tehnologie alimentara", "control calitate", "siguranta alimentara",
      "inginerie", "alimentara", "alimente", "tehnologie", "alimentara"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia produselor alimentare, microbiologie, siguranța alimentară, controlul calității, managementul producției.",
      jobs: [
        { name: "Inginer în industria alimentară", salary: "5000 - 10000 RON" },
        { name: "Specialist control calitate", salary: "4500 - 9000 RON" },
        { name: "Manager de producție", salary: "6000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Politice",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "drept", "stiinte politice", "galati", "avocat", "judecator", "politolog", 
      "analist politic", "relatii internationale", "drept", "stiinte", 
      "politice", "avocat", "judecator", "politolog", "analist"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, drept internațional, științe politice, administrație publică.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Analist politic", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Limbi Străine",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "litere", "limbi straine", "ub", "profesor", "traducator", "interpret", 
      "jurnalist", "redactor", "limba engleza", "limba franceza", "litere", 
      "limbi", "straine", "profesor", "traducator", "unibuc", "universitatea bucuresti", "interpret", "jurnalist"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Literatură română, literatură universală, traducere, interpretare, studii culturale, lingvistică.",
      jobs: [
        { name: "Profesor", salary: "2500 - 6000 RON" },
        { name: "Traducător/Interpret", salary: "3000 - 8000 RON" },
        { name: "Jurnalist/Redactor", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte și Design",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "arte", "design", "brasov", "unitbv", "pictura", "grafica", "sculptura", 
      "design grafic", "design vestimentar", "arte", "design", "pictura", 
      "grafica", "sculptura", "design", "grafic", "design", "vestimentar"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Pictură, grafică, sculptură, artă murală, design grafic, design vestimentar, fotografie.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Artist plastic", salary: "2500 - 7000 RON" },
        { name: "Designer vestimentar", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Matematică și Informatică",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "matematica", "informatica", "cluj-napoca", "ubb", "programator", "analist", 
      "cercetator", "profesor", "date", "algoritmi", "ciorna", "mat", "info", 
      "matematic", "cluj napoca", "informatic"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 3,
      study: "Analiză matematică, algebră, programare avansată, baze de date, inteligență artificială.",
      jobs: [
        { name: "Programator", salary: "4000 - 15000 RON" },
        { name: "Analist de date", salary: "5000 - 12000 RON" },
        { name: "Cercetător în matematică", salary: "4500 - 18000 RON" },
        { name: "Profesor", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Științe Biologice",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "medicina", "stiinte biologice", "brasov", "unitbv", "doctor", "biolog", 
      "sanatate", "spital", "clinica", "cercetare medicala", "biologie", 
      "medicina", "biolog", "sanatate", "spital", "clinica"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, biologie celulară, biochimie, medicină generală, sănătate publică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Biolog de laborator", salary: "3500 - 7000 RON" },
        { name: "Asistent medical", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Economică și Logistică",
    location: "București",
    university: "Universitatea Politehnica din București (UPB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "inginerie economica", "logistica", "upb", "inginer", "economist", 
      "logistician", "management", "proiect", "supply chain", "inginer", 
      "economic", "logistica", "management", "proiect", "supply"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Economie, logistică, managementul producției, marketing industrial, sisteme de transport, gestiunea stocurilor.",
      jobs: [
        { name: "Inginer logist", salary: "5000 - 10000 RON" },
        { name: "Analist supply chain", salary: "6000 - 12000 RON" },
        { name: "Manager de proiect", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Teologie Romano-Catolică",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "teologie", "romano-catolica", "ubb", "preot", "teolog", "religie", 
      "biserica", "pastor", "educatie religioasa", "istoria bisericii",
      "teologie", "cluj napoca", "romano-catolic", "preot", "teolog", "religie", "biserica"
    ],
    salary: { min: 2000, max: 6000 },
    details: {
      duration: 4,
      study: "Teologie dogmatică, drept canonic, etică creștină, istoria bisericii, liturgică.",
      jobs: [
        { name: "Preot", salary: "2000 - 5000 RON" },
        { name: "Profesor de religie", salary: "2500 - 4500 RON" },
        { name: "Ghid spiritual", salary: "2000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Horticultură, Silvicultură și Inginerie",
    location: "Timișoara",
    university: "Universitatea de Științe Agricole și Medicină Veterinară (USAMVBT)",
    keywords: [
      "horticultura", "silvicultura", "inginerie", "timisoara", "usamvbt", 
      "agronomie", "padure", "gradini", "inginer", "agronom", "silvicultor", 
      "peisagist", "agricultura", "horticultur", "silvicultur", "inginerie",
      "agronomie", "padure", "gradini"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 4,
      study: "Horticultură, silvicultură, peisagistică, tehnologia prelucrării lemnului, managementul resurselor forestiere.",
      jobs: [
        { name: "Inginer horticol", salary: "3500 - 7000 RON" },
        { name: "Silvicultor", salary: "3000 - 8000 RON" },
        { name: "Inginer în industria lemnului", salary: "4000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Limbi Străine",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "litere", "limbi straine", "cluj-napoca", "ubb", "profesor", 
      "traducator", "interpret", "jurnalist", "redactor", "limba engleza", 
      "limba franceza", "limba germana", "litere", "limbi", "straine", 
      "profesor", "cluj napoca", "traducator", "interpret", "jurnalist"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Literatură română, literatură universală, traducere, interpretare, studii culturale, lingvistică.",
      jobs: [
        { name: "Profesor", salary: "2500 - 6000 RON" },
        { name: "Traducător/Interpret", salary: "3000 - 8000 RON" },
        { name: "Jurnalist/Redactor", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Chimie, Biologie, Geografie",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "chimie", "biologie", "geografie", "galati", "chimist", "biolog", 
      "geograf", "profesor", "cercetator", "mediu", "chimie", "biologie", 
      "geografie", "chimist", "biolog", "geograf"
    ],
    salary: { min: 2800, max: 9000 },
    details: {
      duration: 3,
      study: "Chimie generală, biologie celulară, ecologie, geografie fizică, geografie umană.",
      jobs: [
        { name: "Chimist de laborator", salary: "3000 - 6000 RON" },
        { name: "Biolog", salary: "2800 - 6000 RON" },
        { name: "Profesor", salary: "2500 - 5500 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "inginerie", "arhitectura", "sibiu", "ulbs", "inginer", "arhitect", 
      "constructii", "design", "proiectant", "mecanica", "electronica",
      "inginerie", "arhitectur", "inginer", "arhitect", "constructi", "design"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electronică, construcții civile, arhitectură, design interior.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Arhitect", salary: "6000 - 12000 RON" },
        { name: "Proiectant", salary: "5500 - 11000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "București",
    university: "Școala Națională de Studii Politice și Administrative (SNSPA)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "stiinte politice", "administrative", "snspa", "politica", "guvern", 
      "management", "functii publice", "consultant", "politici", 
      "stiinte", "politice", "administrative", "politica", "guvern", 
      "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină",
    location: "Iași",
    university: "Universitatea de Medicină și Farmacie Grigore T. Popa (UMF Iasi)",
    keywords: [
      "medicina", "iasi", "umf iasi", "doctor", "sanatate", "spital", "clinica", 
      "chirurgie", "farmacie", "stomatologie", "medicin", "doctor", "sanate", 
      "spital"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, farmacologie, medicină internă, chirurgie, pediatrie, ginecologie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" },
        { name: "Chirurg", salary: "12000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Juridice",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "stiinte juridice", "sibiu", "ulbs", "drept", "avocat", "judecator", 
      "notar", "consilier", "juridic", "lege", "drept", "juridic", "avocat", 
      "judecator", "notar", "consilier"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, dreptul muncii, drept internațional, drept european.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Judecător", salary: "10000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Electronică și Telecomunicații",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie electronica", "telecomunicatii", "pitesti", "inginer", 
      "electronist", "telecomunicatii", "retele", "comunicatii", "hardware", 
      "software", "inginerie", "electronica", "telecomunicati", "retele"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Circuite electronice, semnale, sisteme de comunicații, microprocesoare, rețele de calculatoare.",
      jobs: [
        { name: "Inginer electronist", salary: "5000 - 10000 RON" },
        { name: "Inginer de telecomunicații", salary: "6000 - 12000 RON" },
        { name: "Dezvoltator embedded", salary: "6500 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere, Istorie și Teologie",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "litere", "istorie", "teologie", "constanta", "ovidius", "profesor", 
      "istoric", "teolog", "jurnalist", "traducator", "litere", "istorie", 
      "teologie", "profesor", "istoric", "teolog"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură română, limbi străine, istorie universală, istoria bisericii, teologie ortodoxă.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică și Maritimă",
    location: "Constanța",
    university: "Universitatea Maritimă din Constanța",
    keywords: [
      "inginerie mecanica", "maritima", "constanta", "nave", "motoare", 
      "marin", "inginer", "mecanic", "marinar", "inginerie", "mecanic", 
      "maritim", "nave", "motoare", "marinar"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Propulsia navelor, motoare, sisteme hidraulice, automatizări navale, management maritim.",
      jobs: [
        { name: "Inginer naval", salary: "6000 - 15000 RON" },
        { name: "Ofițer mecanic de navă", salary: "8000 - 20000 RON" },
        { name: "Manager în transporturi navale", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Educației, Psihologie și Sociologie",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "educatie", "psihologie", "sociologie", "suceava", "usv", "profesor", 
      "psiholog", "sociolog", "asistent social", "educatie", "psihologie", 
      "sociologie", "profesor", "psiholog", "sociolog"
    ],
    salary: { min: 2500, max: 9000 },
    details: {
      duration: 3,
      study: "Pedagogie, psihologia dezvoltării, sociologie, asistență socială, management educațional.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Psiholog", salary: "3000 - 7000 RON" },
        { name: "Asistent social", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice și Drept",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "stiinte economice", "drept", "pitesti", "economist", "contabil", 
      "avocat", "judecator", "analist financiar", "economie", "finante", "lege",
      "stiinte", "economice", "drept", "economist", "contabil", "avocat", "judecator"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, drept civil, drept penal, dreptul muncii.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe Umaniste",
    location: "Târgoviște",
    university: "Universitatea Valahia din Târgoviște",
    keywords: [
      "litere", "stiinte umaniste", "targoviste", "valahia", "profesor", 
      "traducator", "jurnalist", "redactor", "istoric", "litere", "stiinte", 
      "umaniste", "profesor", "traducator", "jurnalist"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, istorie, jurnalism, comunicare, studii culturale.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină Veterinară",
    location: "Cluj-Napoca",
    university: "Universitatea de Științe Agricole și Medicină Veterinară (USAMV)",
    keywords: [
      "medicina veterinara", "cluj-napoca", "usamv", "veterinar", "animale", 
      "sanatate", "boli", "ferma", "chirurgie", "veterinar", "medicina", 
      "veterinara", "cluj napoca", "animal", "sanatate"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 6,
      study: "Anatomie și fiziologie animală, patologie, chirurgie, farmacologie veterinară, zootehnie.",
      jobs: [
        { name: "Medic veterinar", salary: "4000 - 10000 RON" },
        { name: "Cercetător", salary: "5000 - 12000 RON" },
        { name: "Specialist în nutriție animală", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură Navală",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "inginerie navala", "arhitectura navala", "constanta", "ovidius", "inginer", 
      "arhitect", "nave", "constructii navale", "mecanica", "hidraulica",
      "inginerie", "navala", "arhitectur", "navala", "nave", "constructii"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Proiectarea navelor, hidrodinamică, structuri navale, propulsie navală, construcții și reparații de nave.",
      jobs: [
        { name: "Inginer naval", salary: "6000 - 15000 RON" },
        { name: "Arhitect naval", salary: "7000 - 18000 RON" },
        { name: "Manager de proiect naval", salary: "9000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "inginerie mecanica", "galati", "inginer", "mecanic", "proiectant", 
      "masini", "mecanica", "termica", "inginerie", "mecanica", "inginer", 
      "mecanic", "proiectant"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia materialelor, rezistența materialelor, termodinamică, proiectarea mașinilor, automatizări.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "stiinte economice", "constanta", "ovidius", "economie", "finante", 
      "contabilitate", "management", "marketing", "economist", "contabil", 
      "manager", "analist financiar", "stiinte", "economice", "economie", 
      "finate", "contabilitat", "management", "marketing"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe, contabilitate, marketing, management, turism.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Arte",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "litere", "arte", "brasov", "unitbv", "profesor", "traducator", 
      "jurnalist", "artist", "pictor", "sculptor", "grafician", "litere", 
      "arte", "profesor", "traducator", "jurnalist", "artist"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, jurnalism, pictură, sculptură, grafică, design vestimentar.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" },
        { name: "Designer grafic", salary: "3000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Tehnologia Informației",
    location: "București",
    university: "Academia Tehnică Militară Ferdinand I",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "tehnologia informatiei", "militara", "ferdinand I", "inginer", 
      "programator", "cibernetica", "calculatoare", "securitate", 
      "it", "informatician", "tehnologia", "informatiei", "militara", 
      "inginer", "programator", "cibernetica"
    ],
    salary: { min: 4500, max: 20000 },
    details: {
      duration: 4,
      study: "Securitatea cibernetică, sisteme informatice, inteligență artificială, rețele de calculatoare, programare.",
      jobs: [
        { name: "Inginer de securitate cibernetică", salary: "8000 - 20000 RON" },
        { name: "Programator", salary: "7000 - 18000 RON" },
        { name: "Analist de sisteme", salary: "6000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Energetică",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "inginerie energetica", "utcn", "energie", "electrica", "termica", 
      "energie regenerabila", "petrol", "gaze", "inginer", "consultant",
      "inginerie", "cluj napoca", "energetic", "energie", "electrica", "termica", "regenerabila"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Termodinamică, centrale electrice, rețele electrice, energie regenerabilă (solar, eolian), management energetic.",
      jobs: [
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "5000 - 10000 RON" },
        { name: "Consultant în energie regenerabilă", salary: "7000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Timișoara",
    university: "Universitatea de Medicină și Farmacie Victor Babeș (UMFT)",
    keywords: [
      "medicina", "farmacie", "timisoara", "umft", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "medicin", "farmaci", "doctor", 
      "sanate", "spital"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, nutriție și dietetică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "stiinte economice", "sibiu", "ulbs", "economie", "finante", 
      "contabilitate", "management", "marketing", "economist", "contabil", 
      "manager", "analist financiar", "stiinte", "economice", "economie", 
      "finate", "contabilitat", "management", "marketing"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, marketing, management, administrarea afacerilor.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie a Sistemelor Biotehnice",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "inginerie", "sisteme", "biotehnice", "utcn", "biotehnologie", "biologie", 
      "inginerie genetica", "bioinginerie", "medicina", "cercetare", 
      "bioinginer", "cercetator", "specialist in biotehnologie", "biotehnologic",
      "biotehnica", "cluj napoca", "biotehnologie", "biologie", "inginerie", "genetic"
    ],
    salary: { min: 4000, max: 18000 },
    details: {
      duration: 4,
      study: "Inginerie genetică, bioprocese, echipamente medicale, bioinformatică, materiale biocompatibile.",
      jobs: [
        { name: "Inginer biotehnic", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "6000 - 15000 RON" },
        { name: "Specialist în controlul calității", salary: "4000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Jurnalism și Științele Comunicării",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "jurnalism", "stiintele comunicarii", "pitesti", "jurnalist", "reporter", 
      "redactor", "relatii publice", "comunicare", "media", "jurnalism", 
      "stiintele", "comunicarii", "jurnalist", "reporter", "redactor"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Teoria comunicării, jurnalism scris și audio-vizual, relații publice, publicitate, sociologia mass-media.",
      jobs: [
        { name: "Jurnalist", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Manager de comunicare", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Economice",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "drept", "stiinte economice", "oradea", "avocat", "judecator", "economist", 
      "contabil", "analist financiar", "drept", "stiinte", "economice", 
      "avocat", "judecator", "economist", "contabil"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, economie, finanțe, contabilitate.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Economist", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică și Protecția Mediului",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "inginerie chimica", "protectia mediului", "cluj-napoca", "utcn", 
      "inginer", "chimist", "ecolog", "poluare", "reciclare", "resurse", 
      "inginerie", "cluj napoca", "chimica", "protectia", "mediului", "inginer", "chimist"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, controlul poluării, tratarea apei, managementul deșeurilor, tehnologii ecologice.",
      jobs: [
        { name: "Inginer de mediu", salary: "5000 - 10000 RON" },
        { name: "Consultant de mediu", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere, Istorie și Teologie",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "litere", "istorie", "teologie", "sibiu", "ulbs", "profesor", 
      "istoric", "teolog", "jurnalist", "traducator", "litere", 
      "istorie", "teologie", "profesor", "istoric", "teolog"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură română, limbi străine, istorie universală, istoria bisericii, teologie ortodoxă.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "medicina", "farmacie", "sibiu", "ulbs", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "medicin", "farmaci", "doctor", 
      "sanate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică și Electrică",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie", "mecanica", "electrica", "pitesti", "inginer", "proiectant", 
      "mecanic", "electrician", "roboti", "autovehicule", "inginerie", 
      "mecanic", "electric", "roboti", "autovehicule"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Sisteme mecanice, mașini electrice, electronică de putere, robotică industrială, autovehicule rutiere.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Inginer electrician", salary: "5000 - 10000 RON" },
        { name: "Inginer de mentenanță", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe Sociale",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "litere", "stiinte sociale", "craiova", "profesor", "jurnalist", 
      "asistent social", "sociolog", "litere", "sociale", "profesor", 
      "jurnalist", "asistent", "social"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, jurnalism, sociologie, asistență socială, istorie.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Asistent social", salary: "2800 - 6000 RON" },
        { name: "Jurnalist", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Științe Umaniste",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "medicina", "stiinte umaniste", "brasov", "unitbv", "doctor", "psiholog", 
      "sociolog", "istoric", "asistent medical", "medicin", "stiinte", 
      "umaniste", "doctor", "psiholog", "sociolog", "istoric"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, medicină dentară, asistență medicală, psihologie, sociologie, istorie.",
      jobs: [
        { name: "Medic", salary: "7000 - 15000 RON" },
        { name: "Asistent medical", salary: "3000 - 6000 RON" },
        { name: "Psiholog clinician", salary: "3500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Științe Aplicate",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "inginerie", "stiinte aplicate", "constanta", "ovidius", "inginer", 
      "matematician", "fizician", "chimist", "biolog", "inginerie", 
      "stiinte", "aplicate", "inginer", "matematician", "fizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electrică, informatică, matematică, fizică, chimie.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Programator", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "stiinte politice", "administrative", "galati", "politica", "guvern", 
      "management", "functii publice", "consultant", "politici", 
      "stiinte", "politice", "administrative", "politica", "guvern"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "stiinte economice", "suceava", "usv", "economie", "finante", 
      "contabilitate", "management", "marketing", "economist", "contabil", 
      "manager", "analist financiar", "stiinte", "economice", "economie", 
      "finate", "contabilitat"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate și informatică de gestiune, marketing, management.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Energetică",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "inginerie energetica", "constanta", "ovidius", "energie", "electrica", 
      "termica", "regenerabila", "inginer", "consultant", "energie", 
      "inginerie", "energetic", "energie", "electrica", "termica", 
      "regenerabil"
    ],
    salary: { min: 4000, max: 15000 },
    details: {
      duration: 4,
      study: "Sisteme de conversie a energiei, termodinamică, energie solară, eoliană, management energetic.",
      jobs: [
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "5000 - 10000 RON" },
        { name: "Consultant în energie", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "medicina", "farmacie", "cluj-napoca", "ubb", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "medicin", "farmaci", "doctor", 
      "sanate", "cluj napoca", "spital"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, stomatologie, kinetoterapie, nutriție.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte Plastice, Decorative și Design",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "arte plastice", "decorative", "design", "timisoara", "uvt", "pictura", 
      "sculptura", "grafica", "designer", "artist", "grafician", "arte", 
      "plastic", "decorativ", "design", "pictura", "sculptura", "grafica"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Design grafic, design de interior, design vestimentar, pictură, sculptură, grafică, istoria artei.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Designer de interior", salary: "4000 - 9000 RON" },
        { name: "Artist plastic", salary: "2500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "inginerie chimica", "galati", "inginer", "chimist", "cercetator", 
      "industria chimica", "petrol", "farmacie", "alimentara", "inginerie", 
      "chimica", "chimist", "inginer", "cercetator", "industria", "chimica"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, tehnologii chimice, polimeri, biochimie, securitate și sănătate în muncă.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Specialist în controlul calității", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Mediului",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "stiinte ale mediului", "ub", "ecolog", "biolog", "cercetator", 
      "poluare", "reciclare", "resurse", "protecția mediului", 
      "stiinte", "mediului", "ecolog", "biolog", "unibuc", "universitatea bucuresti", "cercetator", "poluare"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Poluare și protecția mediului, managementul deșeurilor, resurse de apă, sisteme informaționale geografice (GIS).",
      jobs: [
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" },
        { name: "Cercetător ecolog", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Civilă și de Instalații",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "inginerie civila", "instalatii", "cluj-napoca", "utcn", "constructii", 
      "instalatii sanitare", "termice", "electrice", "sisteme", "proiectant",
      "inginerie", "cluj napoca", "civil", "instalatii", "constructi", "sanitare", "termice"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Construcții civile și industriale, instalații sanitare, termice și electrice, managementul șantierelor.",
      jobs: [
        { name: "Inginer de instalații", salary: "5000 - 10000 RON" },
        { name: "Proiectant de structuri", salary: "6000 - 12000 RON" },
        { name: "Șef de șantier", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "stiinte politice", "administrative", "timisoara", "uvt", "politica", 
      "guvern", "management", "functii publice", "consultant", "politici",
      "stiinte", "politice", "administrative", "politica", "guvern", 
      "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe Umaniste",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "litere", "stiinte umaniste", "constanta", "ovidius", "profesor", 
      "traducator", "jurnalist", "redactor", "istoric", "litere", "stiinte", 
      "umaniste", "profesor", "traducator", "jurnalist"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, istorie, jurnalism, comunicare, studii culturale.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice și Drept",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "stiinte economice", "drept", "galati", "economist", "contabil", 
      "avocat", "judecator", "analist financiar", "economie", "finante", "lege",
      "stiinte", "economice", "drept", "economist", "contabil", "avocat"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, drept civil, drept penal, dreptul muncii.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Științe Sociale",
    location: "Iași",
    university: "Universitatea de Medicină și Farmacie Grigore T. Popa (UMF Iasi)",
    keywords: [
      "medicina", "stiinte sociale", "iasi", "umf iasi", "doctor", "asistent social", 
      "sociolog", "sanatate", "spital", "clinica", "medicin", "sociale", 
      "doctor", "asistent", "sociolog", "sanate"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, asistență socială, sociologie medicală, sănătate publică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Asistent social", salary: "2800 - 6000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Electrică și Energetică",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie electrica", "energetica", "pitesti", "inginer", "electronist", 
      "energetician", "energie", "electrica", "termica", "regenerabila",
      "inginerie", "electrica", "energetic", "inginer", "electronist"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Circuite electronice, mașini electrice, sisteme de energie, energie regenerabilă, management energetic.",
      jobs: [
        { name: "Inginer electrician", salary: "5000 - 10000 RON" },
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Consultant energetic", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Matematică, Informatică și Științe Economice",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "matematica", "informatica", "stiinte economice", "oradea", "programator", 
      "analist", "economist", "contabil", "matematica", "informatica", 
      "stiinte", "economice", "programator", "analist", "economist"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 3,
      study: "Matematică, programare, baze de date, economie, finanțe, contabilitate.",
      jobs: [
        { name: "Programator", salary: "4000 - 12000 RON" },
        { name: "Analist de date", salary: "5000 - 10000 RON" },
        { name: "Economist", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Științe Aplicative",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "inginerie", "stiinte aplicative", "craiova", "inginer", "matematician", 
      "fizician", "chimist", "inginerie", "stiinte", "aplicative", "inginer", 
      "matematician", "fizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electrică, informatică, matematică, fizică, chimie.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Programator", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "stiinte politice", "administrative", "constanta", "ovidius", "politica", 
      "guvern", "management", "functii publice", "consultant", "politici",
      "stiinte", "politice", "administrative", "politica", "guvern", 
      "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere, Istorie și Teologie",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "litere", "istorie", "teologie", "suceava", "usv", "profesor", 
      "istoric", "teolog", "jurnalist", "traducator", "litere", 
      "istorie", "teologie", "profesor", "istoric", "teolog"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură română, limbi străine, istorie universală, istoria bisericii, teologie ortodoxă.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină Veterinară",
    location: "Timișoara",
    university: "Universitatea de Științe Agricole și Medicină Veterinară (USAMVBT)",
    keywords: [
      "medicina veterinara", "timisoara", "usamvbt", "veterinar", "animale", 
      "sanatate", "boli", "ferma", "chirurgie", "veterinar", "medicina", 
      "veterinara", "animal", "sanatate"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 6,
      study: "Anatomie și fiziologie animală, patologie, chirurgie, farmacologie veterinară, zootehnie.",
      jobs: [
        { name: "Medic veterinar", salary: "4000 - 10000 RON" },
        { name: "Cercetător", salary: "5000 - 12000 RON" },
        { name: "Specialist în nutriție animală", salary: "4000 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Politice",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "drept", "stiinte politice", "pitesti", "avocat", "judecator", "politolog", 
      "analist politic", "relatii internationale", "drept", "stiinte", 
      "politice", "avocat", "judecator", "politolog"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, drept internațional, științe politice, administrație publică.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Analist politic", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "inginerie mecanica", "brasov", "unitbv", "inginer", "mecanic", 
      "proiectant", "masini", "mecanica", "termica", "inginerie", 
      "mecanica", "inginer", "mecanic", "proiectant"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia materialelor, rezistența materialelor, termodinamică, proiectarea mașinilor, automatizări.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Economie și Gestiunea Afacerilor",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "economie", "gestiunea afacerilor", "oradea", "economist", "contabil", 
      "manager", "analist financiar", "business", "afaceri", "gestiune",
      "economie", "gestiunea", "afacerilor", "economist", "contabil", "manager"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Economie, finanțe, contabilitate, marketing, gestiune, economia afacerilor.",
      jobs: [
        { name: "Manager", salary: "3500 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie în Limbi Străine",
    location: "Cluj-Napoca",
    university: "Universitatea Tehnică din Cluj-Napoca (UTCN)",
    keywords: [
      "inginerie", "limbi straine", "utcn", "tehnologie", "multilingv", 
      "software", "inginer", "traducator tehnic", "inginerie", 
      "limbi", "cluj napoca", "straine", "tehnologie", "multilingv", "software", "inginer"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Sisteme informatice, electronică, mecanică, management, limbi străine (engleză, franceză, germană).",
      jobs: [
        { name: "Inginer software multilingv", salary: "7000 - 18000 RON" },
        { name: "Traducător tehnic", salary: "5000 - 10000 RON" },
        { name: "Consultant IT", salary: "8000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Muzică și Teatru",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "muzica", "teatru", "galati", "cantaret", "actor", "instrumentist", 
      "regizor", "profesor", "interpretare", "muzicala", "actorie", "regie", 
      "muzica", "teatru", "cantaret", "actor", "instrumentist"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Muzicologie, pedagogie muzicală, interpretare instrumentală, actorie, regie, scenografie.",
      jobs: [
        { name: "Profesor de muzică/teatru", salary: "2500 - 5000 RON" },
        { name: "Artist independent", salary: "2500 - 8000 RON" },
        { name: "Muzician în orchestră", salary: "3000 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Teologie",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "teologie", "pitesti", "preot", "teolog", "religie", "biserica", 
      "pastor", "educatie religioasa", "istoria bisericii", "teologie", 
      "religie", "biserica", "pastor"
    ],
    salary: { min: 2000, max: 6000 },
    details: {
      duration: 4,
      study: "Teologie ortodoxă, etică creștină, istoria bisericii, drept canonic, liturgică.",
      jobs: [
        { name: "Preot", salary: "2000 - 5000 RON" },
        { name: "Profesor de religie", salary: "2500 - 4500 RON" },
        { name: "Ghid spiritual", salary: "2000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Mediului",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "stiinte ale mediului", "constanta", "ovidius", "ecolog", "biolog", 
      "cercetator", "poluare", "reciclare", "resurse", "protecția mediului", 
      "stiinte", "mediului", "ecolog", "biolog", "cercetator", "poluare"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Poluare și protecția mediului, managementul deșeurilor, resurse de apă, sisteme informaționale geografice (GIS).",
      jobs: [
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" },
        { name: "Cercetător ecolog", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică",
    location: "Timișoara",
    university: "Universitatea Politehnica Timișoara (UPT)",
    keywords: [
      "inginerie chimica", "timisoara", "upt", "inginer", "chimist", 
      "cercetator", "industria chimica", "petrol", "farmacie", "alimentara",
      "inginerie", "chimica", "chimist", "inginer", "cercetator", "industria"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, tehnologii chimice, polimeri, biochimie, securitate și sănătate în muncă.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Specialist în controlul calității", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Politice",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "drept", "stiinte politice", "oradea", "avocat", "judecator", "politolog", 
      "analist politic", "relatii internationale", "drept", "stiinte", 
      "politice", "avocat", "judecator", "politolog"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, drept internațional, științe politice, administrație publică.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" },
        { name: "Analist politic", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "inginerie", "arhitectura", "brasov", "unitbv", "inginer", "arhitect", 
      "constructii", "design", "proiectant", "inginerie", "arhitectur", 
      "inginer", "arhitect", "constructi", "design"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electronică, construcții civile, arhitectură, design interior.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Arhitect", salary: "6000 - 12000 RON" },
        { name: "Proiectant", salary: "5500 - 11000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "stiinte politice", "administrative", "craiova", "politica", "guvern", 
      "management", "functii publice", "consultant", "politici", "stiinte", 
      "politice", "administrative", "politica", "guvern", "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Matematică, Informatică și Științe Naturale",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "matematica", "informatica", "stiinte naturale", "oradea", "programator", 
      "analist", "cercetator", "profesor", "matematica", "informatica", 
      "stiinte", "naturale", "programator", "analist", "cercetator", "profesor"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 3,
      study: "Matematică, programare, baze de date, fizică, chimie, biologie.",
      jobs: [
        { name: "Programator", salary: "4000 - 12000 RON" },
        { name: "Analist de date", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Agronomie",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie", "agronomie", "pitesti", "inginer", "agronom", "agricultura", 
      "produse alimentare", "masini agricole", "inginerie", "agronomie", 
      "inginer", "agronom", "agricultura"
    ],
    salary: { min: 3000, max: 12000 },
    details: {
      duration: 4,
      study: "Mecanică agricolă, tehnologii alimentare, managementul fermei, protecția plantelor.",
      jobs: [
        { name: "Inginer agronom", salary: "4000 - 8000 RON" },
        { name: "Specialist în tehnologie alimentară", salary: "4500 - 9000 RON" },
        { name: "Manager de fermă", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Comunicării",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "stiinte ale comunicarii", "galati", "jurnalist", "reporter", "relatii publice", 
      "comunicare", "media", "stiinte", "comunicarii", "jurnalist", "reporter", 
      "relatii", "publice"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Teoria comunicării, jurnalism scris și audio-vizual, relații publice, publicitate, sociologia mass-media.",
      jobs: [
        { name: "Jurnalist", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Manager de comunicare", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Geografie",
    location: "Timișoara",
    university: "Universitatea de Vest din Timișoara (UVT)",
    keywords: [
      "istorie", "geografie", "timisoara", "uvt", "istoric", "geograf", 
      "profesor", "muzeograf", "arheolog", "turism", "istorie", "geografie", 
      "istoric", "geograf", "profesor", "muzeograf"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria Antică, istoria modernă, geografia fizică, geografia umană, arheologie, cartografie.",
      jobs: [
        { name: "Profesor de istorie/geografie", salary: "2600 - 5500 RON" },
        { name: "Cercetător", salary: "3000 - 8000 RON" },
        { name: "Ghid turistic", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "stiinte economice", "craiova", "economie", "finante", "contabilitate", 
      "management", "marketing", "economist", "contabil", "manager", 
      "analist financiar", "stiinte", "economice", "economie", "finate", 
      "contabilitat"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, marketing, management, administrarea afacerilor.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Alimentară",
    location: "Brașov",
    university: "Universitatea Transilvania din Brașov (UNITBV)",
    keywords: [
      "inginerie alimentara", "brasov", "unitbv", "inginer", "alimente", 
      "tehnologie alimentara", "control calitate", "siguranta alimentara",
      "inginerie", "alimentara", "alimente", "tehnologie", "alimentara"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia produselor alimentare, microbiologie, siguranța alimentară, controlul calității, managementul producției.",
      jobs: [
        { name: "Inginer în industria alimentară", salary: "5000 - 10000 RON" },
        { name: "Specialist control calitate", salary: "4500 - 9000 RON" },
        { name: "Manager de producție", salary: "6000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte și Design",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "arte", "design", "constanta", "ovidius", "pictura", "grafica", "sculptura", 
      "design grafic", "design vestimentar", "arte", "design", "pictura", 
      "grafica", "sculptura", "design", "grafic", "design", "vestimentar"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Pictură, grafică, sculptură, artă murală, design grafic, design vestimentar, fotografie.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Artist plastic", salary: "2500 - 7000 RON" },
        { name: "Designer vestimentar", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "inginerie", "arhitectura", "craiova", "inginer", "arhitect", 
      "constructii", "design", "proiectant", "inginerie", "arhitectur", 
      "inginer", "arhitect", "constructi", "design"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electrică, construcții civile, arhitectură, design interior.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Arhitect", salary: "6000 - 12000 RON" },
        { name: "Proiectant", salary: "5500 - 11000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "medicina", "farmacie", "pitesti", "doctor", "farmacist", "sanatate", 
      "spital", "clinica", "medicin", "farmaci", "doctor", "sanatate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "stiinte politice", "administrative", "oradea", "politica", "guvern", 
      "management", "functii publice", "consultant", "politici", "stiinte", 
      "politice", "administrative", "politica", "guvern", "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe ale Comunicării",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "litere", "stiintele comunicarii", "galati", "jurnalism", "comunicare", 
      "relatii publice", "jurnalist", "redactor", "profesor", "litere", 
      "stiintele", "comunicarii", "jurnalism", "comunicare", "relatii", 
      "publice"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, jurnalism, relații publice, publicitate, sociologie.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Specialist în comunicare", salary: "3500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Filosofie",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "istorie", "filosofie", "iasi", "uaic", "istoric", "filosof", 
      "cercetator", "profesor", "muzeograf", "arheolog", "studiu istoric", 
      "cercetare", "istore", "filosfie", "filozofie", "istoric", "cercetator"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria Antică, istoria modernă, etica, logica, metafizica, filosofia științei.",
      jobs: [
        { name: "Profesor de istorie/filosofie", salary: "2600 - 5500 RON" },
        { name: "Cercetător științific", salary: "3000 - 8000 RON" },
        { name: "Muzeograf", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "inginerie", "sibiu", "ulbs", "mecanica", "electrica", "electronica", 
      "inginer", "proiectant", "tehnician", "inginerie", "mecanic", 
      "electric", "electronist", "proiectant", "tehnician"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Mecanică, electrică, electronică, mecatronică, autovehicule rutiere, tehnologia construcțiilor de mașini.",
      jobs: [
        { name: "Inginer de proces", salary: "5000 - 10000 RON" },
        { name: "Inginer proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geologie și Geofizică",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "geologie", "geofizica", "cluj-napoca", "ubb", "petrol", "gaze", 
      "minerale", "resurse naturale", "cercetare", "geolog", 
      "geofizician", "analist", "cercetator", "inginer", "geologie", 
      "geofizica", "cluj napoca", "geolog", "geofizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 3,
      study: "Mineralogie, petrologie, geologie structurală, geofizică de explorare, hidrogeologie.",
      jobs: [
        { name: "Geolog de explorare", salary: "5000 - 12000 RON" },
        { name: "Geofizician", salary: "6000 - 15000 RON" },
        { name: "Cercetător", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică și Protecția Mediului",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie chimica", "protectia mediului", "pitesti", "inginer", "chimist", 
      "ecolog", "poluare", "reciclare", "resurse", "inginerie", "chimica", 
      "protectia", "mediului", "inginer", "chimist", "ecolog"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, controlul poluării, tratarea apei, managementul deșeurilor, tehnologii ecologice.",
      jobs: [
        { name: "Inginer de mediu", salary: "5000 - 10000 RON" },
        { name: "Consultant de mediu", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Educației",
    location: "București",
    university: "Universitatea din București (UB)",
    keywords: [
      "stiintele educatiei", "bucuresti", "bucuesti", "bucuresit", "bucuesi", "bucutesti",  "ub", "pedagog", "profesor", 
      "invatator", "educatie", "psihologie", "invatamant primar", 
      "prescolar", "unibuc", "universitatea bucuresti", "stiinte", "educatiei", "pedagog", "profesor", "invatator"
    ],
    salary: { min: 2500, max: 7000 },
    details: {
      duration: 3,
      study: "Pedagogie, psihologia educației, didactica specialităților, management educațional, asistență psihopedagogică.",
      jobs: [
        { name: "Învățător/Educator", salary: "2500 - 5000 RON" },
        { name: "Profesor", salary: "3000 - 6000 RON" },
        { name: "Consilier școlar", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "medicina", "farmacie", "oradea", "doctor", "farmacist", "sanatate", 
      "spital", "clinica", "medicin", "farmaci", "doctor", "sanatate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice, Administrative și ale Comunicării",
    location: "Târgu Mureș",
    university: "Universitatea de Medicină, Farmacie, Științe și Tehnologie (UMFST)",
    keywords: [
      "stiinte politice", "administrative", "comunicare", "targu mures", "umfst", 
      "politologie", "administratia publica", "relatii publice", "jurnalism", 
      "stiinte", "politice", "administrative", "comunicare", "politologie", 
      "administratia", "publica"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, relații publice, publicitate, comunicare media.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Specialist în relații publice", salary: "4000 - 9000 RON" },
        { name: "Manager de comunicare", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Civilă și de Instalații",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "inginerie civila", "instalatii", "pitesti", "constructii", 
      "instalatii sanitare", "termice", "electrice", "sisteme", "proiectant",
      "inginerie", "civil", "instalatii", "constructi", "sanitare", "termice"
    ],
    salary: { min: 3500, max: 18000 },
    details: {
      duration: 4,
      study: "Construcții civile și industriale, instalații sanitare, termice și electrice, managementul șantierelor.",
      jobs: [
        { name: "Inginer de instalații", salary: "5000 - 10000 RON" },
        { name: "Proiectant de structuri", salary: "6000 - 12000 RON" },
        { name: "Șef de șantier", salary: "7000 - 18000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Arte Plastice și Decorative",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "arte plastice", "decorative", "galati", "pictura", "sculptura", 
      "grafica", "artist", "pictor", "sculptor", "grafician", "galerist", 
      "curator", "arte", "estetica","plastic", "decorativ", "pictura", "sculptura", 
      "grafica"
    ],
    salary: { min: 2500, max: 10000 },
    details: {
      duration: 3,
      study: "Desen, pictură, sculptură, grafică, istoria artei, estetica.",
      jobs: [
        { name: "Designer grafic", salary: "3000 - 8000 RON" },
        { name: "Artist", salary: "2500 - 7000 RON" },
        { name: "Restaurator de artă", salary: "3500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Sociale",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "drept", "stiinte sociale", "suceava", "usv", "avocat", "judecator", 
      "asistent social", "sociolog", "drept", "sociale", "avocat", 
      "judecator", "asistent", "social"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, sociologie, asistență socială, politici sociale.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Asistent social", salary: "3000 - 6000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică",
    location: "Târgu Mureș",
    university: "Universitatea de Medicină, Farmacie, Științe și Tehnologie (UMFST)",
    keywords: [
      "inginerie mecanica", "targu mures", "umfst", "inginer", "mecanic", 
      "proiectant", "masini", "mecanica", "termica", "inginerie", "mecanica", 
      "inginer", "mecanic", "proiectant"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia materialelor, rezistența materialelor, termodinamică, proiectarea mașinilor, automatizări.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "stiinte economice", "craiova", "economie", "finante", "contabilitate", 
      "management", "marketing", "economist", "contabil", "manager", 
      "analist financiar", "stiinte", "economice", "economie", "finate", 
      "contabilitat"
    ],
    salary: { min: 2800, max: 15000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, marketing, management, administrarea afacerilor.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "medicina", "farmacie", "galati", "doctor", "farmacist", "spital", 
      "sanatate", "medicin", "farmaci", "spital", "sanatate"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, nutriție și dietetică.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Asistent medical", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Alimentară",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "inginerie alimentara", "suceava", "usv", "inginer", "alimente", 
      "tehnologie alimentara", "control calitate", "siguranta alimentara",
      "inginerie", "alimentara", "alimente", "tehnologie", "alimentara"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia produselor alimentare, microbiologie, siguranța alimentară, controlul calității, managementul producției.",
      jobs: [
        { name: "Inginer în industria alimentară", salary: "5000 - 10000 RON" },
        { name: "Specialist control calitate", salary: "4500 - 9000 RON" },
        { name: "Manager de producție", salary: "6000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Geologie și Geofizică",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "geologie", "geofizica", "iasi", "uaic", "petrol", "gaze", "minerale", 
      "resurse naturale", "cercetare", "geolog", "geofizician", "analist", 
      "cercetator", "inginer", "geologie", "geofizica", "geolog", "geofizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 3,
      study: "Mineralogie, petrologie, geologie structurală, geofizică de explorare, hidrogeologie.",
      jobs: [
        { name: "Geolog de explorare", salary: "5000 - 12000 RON" },
        { name: "Geofizician", salary: "6000 - 15000 RON" },
        { name: "Cercetător", salary: "4000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "stiinte politice", "sibiu", "ulbs", "relatii internationale", "diplomatie", 
      "politolog", "analist politic", "consultant", "politici publice", 
      "politologie", "relatii", "internationale", "diplomatie"
    ],
    salary: { min: 3000, max: 11000 },
    details: {
      duration: 3,
      study: "Sisteme politice, relații internaționale, drept constituțional, istoria ideilor politice, guvernanță.",
      jobs: [
        { name: "Analist politic", salary: "3000 - 7000 RON" },
        { name: "Consilier parlamentar", salary: "4000 - 9000 RON" },
        { name: "Diplomat", salary: "6000 - 11000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Istorie și Geografie",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "istorie", "geografie", "galati", "istoric", "geograf", "profesor", 
      "muzeograf", "arheolog", "turism", "istorie", "geografie", "istoric", 
      "geograf", "profesor", "muzeograf", "arheolog"
    ],
    salary: { min: 2600, max: 8000 },
    details: {
      duration: 3,
      study: "Istoria Antică, istoria modernă, geografia fizică, geografia umană, arheologie, cartografie.",
      jobs: [
        { name: "Profesor de istorie/geografie", salary: "2600 - 5500 RON" },
        { name: "Cercetător", salary: "3000 - 8000 RON" },
        { name: "Ghid turistic", salary: "2800 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Mecanică",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "inginerie mecanica", "sibiu", "ulbs", "inginer", "mecanic", 
      "proiectant", "masini", "mecanica", "termica", "inginerie", "mecanica", 
      "inginer", "mecanic", "proiectant"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Tehnologia materialelor, rezistența materialelor, termodinamică, proiectarea mașinilor, automatizări.",
      jobs: [
        { name: "Inginer mecanic", salary: "5000 - 10000 RON" },
        { name: "Proiectant", salary: "6000 - 12000 RON" },
        { name: "Inginer de producție", salary: "4500 - 9000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Arhitectură Navală",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "inginerie navala", "arhitectura navala", "galati", "inginer", 
      "arhitect", "nave", "constructii navale", "mecanica", "hidraulica",
      "inginerie", "navala", "arhitectur", "navala", "nave", "constructii"
    ],
    salary: { min: 4000, max: 20000 },
    details: {
      duration: 4,
      study: "Proiectarea navelor, hidrodinamică, structuri navale, propulsie navală, construcții și reparații de nave.",
      jobs: [
        { name: "Inginer naval", salary: "6000 - 15000 RON" },
        { name: "Arhitect naval", salary: "7000 - 18000 RON" },
        { name: "Manager de proiect naval", salary: "9000 - 20000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "drept", "galati", "avocat", "judecator", "notar", "consilier juridic", 
      "politici publice", "stiinte juridice", "legislatie", "constitutie", 
      "drept", "avocat", "judecator", "notar", "consilier", "juridic"
    ],
    salary: { min: 3500, max: 25000 },
    details: {
      duration: 4,
      study: "Drept civil, drept penal, drept administrativ, dreptul muncii, drept european, drept internațional public și privat.",
      jobs: [
        { name: "Consilier juridic", salary: "3500 - 8000 RON" },
        { name: "Avocat stagiar", salary: "4000 - 7000 RON" },
        { name: "Notar", salary: "9000 - 20000 RON" },
        { name: "Procuror/Judecător", salary: "12000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "stiinte politice", "administrative", "suceava", "usv", "politica", 
      "guvern", "management", "functii publice", "consultant", "politici",
      "stiinte", "politice", "administrative", "politica", "guvern", 
      "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "medicina", "constanta", "ovidius", "doctor", "sanatate", "spital", 
      "clinica", "chirurgie", "farmacie", "stomatologie", "medicin", 
      "doctor", "sanate", "spital"
    ],
    salary: { min: 3000, max: 25000 },
    details: {
      duration: 6,
      study: "Anatomie, fiziologie, farmacologie, medicină internă, chirurgie, pediatrie, ginecologie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" },
        { name: "Chirurg", salary: "12000 - 25000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "stiinte economice", "galati", "economie", "finante", "contabilitate", 
      "management", "marketing", "economist", "contabil", "manager", 
      "analist financiar", "stiinte", "economice", "economie", "finate", 
      "contabilitat"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, marketing, management, administrarea afacerilor.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Electrică",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "inginerie electrica", "iasi", "tuiasi", "inginer", "electronist", 
      "energetician", "energie", "electrica", "termica", "inginerie", 
      "electrica", "inginer", "electronist", "energetic"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Circuite electronice, mașini electrice, sisteme de energie, energie regenerabilă, management energetic.",
      jobs: [
        { name: "Inginer electrician", salary: "5000 - 10000 RON" },
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Consultant energetic", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Matematică, Informatică și Științe Aplicate",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "matematica", "informatica", "stiinte aplicate", "galati", "programator", 
      "analist", "cercetator", "profesor", "matematica", "informatica", 
      "stiinte", "aplicate", "programator", "analist", "cercetator"
    ],
    salary: { min: 3000, max: 15000 },
    details: {
      duration: 3,
      study: "Matematică, programare, baze de date, fizică, chimie, biologie.",
      jobs: [
        { name: "Programator", salary: "4000 - 12000 RON" },
        { name: "Analist de date", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Drept și Științe Sociale",
    location: "Constanța",
    university: "Universitatea Ovidius din Constanța",
    keywords: [
      "drept", "stiinte sociale", "constanta", "ovidius", "avocat", "judecator", 
      "asistent social", "sociolog", "drept", "sociale", "avocat", "judecator", 
      "asistent", "social"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 4,
      study: "Drept civil, penal, administrativ, sociologie, asistență socială, politici sociale.",
      jobs: [
        { name: "Consilier juridic", salary: "4000 - 9000 RON" },
        { name: "Asistent social", salary: "3000 - 6000 RON" },
        { name: "Avocat stagiar", salary: "4500 - 8000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Științe Exacte",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "inginerie", "stiinte exacte", "suceava", "usv", "inginer", "matematician", 
      "fizician", "chimist", "inginerie", "stiinte", "exacte", "inginer", 
      "matematician", "fizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electrică, informatică, matematică, fizică, chimie.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Programator", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Târgu Jiu",
    university: "Universitatea Constantin Brâncuși",
    keywords: [
      "medicina", "farmacie", "targu jiu", "brancusi", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "medicin", "farmaci", "doctor", 
      "sanatate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Psihologie și Științe Sociale",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "psihologie", "stiinte sociale", "craiova", "psiholog", "sociolog", 
      "asistent social", "profesor", "psihologie", "sociale", "psiholog", 
      "sociolog", "asistent", "social"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Psihologie clinică, psihologia dezvoltării, sociologie, asistență socială, management social.",
      jobs: [
        { name: "Psiholog clinician", salary: "3500 - 8000 RON" },
        { name: "Asistent social", salary: "2800 - 6000 RON" },
        { name: "Sociolog", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică",
    location: "Iași",
    university: "Universitatea Tehnică Gheorghe Asachi (TUIASI)",
    keywords: [
      "inginerie chimica", "iasi", "tuiasi", "inginer", "chimist", 
      "cercetator", "industria chimica", "petrol", "farmacie", "alimentara",
      "inginerie", "chimica", "chimist", "inginer", "cercetator", "industria"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, tehnologii chimice, polimeri, biochimie, securitate și sănătate în muncă.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Specialist în controlul calității", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Silvicultură",
    location: "Timișoara",
    university: "Universitatea de Științe Agricole și Medicină Veterinară (USAMVBT)",
    keywords: [
      "silvicultura", "timisoara", "usamvbt", "padure", "forestier", "inginer", 
      "ecolog", "biolog", "silvicultor", "conservare", "mediu", 
      "silvicultura", "silvicultur", "padure", "forestier", "inginer", 
      "ecolog", "biolog", "conservare"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 4,
      study: "Dendrometrie, amenajarea pădurilor, ecologie forestieră, managementul resurselor cinegetice.",
      jobs: [
        { name: "Inginer silvic", salary: "4000 - 8000 RON" },
        { name: "Silvicultor", salary: "3500 - 7000 RON" },
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Energetică",
    location: "Galați",
    university: "Universitatea Dunărea de Jos din Galați",
    keywords: [
      "inginerie energetica", "galati", "energie", "electrica", "termica", 
      "regenerabila", "inginer", "consultant", "energie", "inginerie", 
      "energetic", "energie", "electrica", "termica", "regenerabil"
    ],
    salary: { min: 4000, max: 15000 },
    details: {
      duration: 4,
      study: "Sisteme de conversie a energiei, termodinamică, energie solară, eoliană, management energetic.",
      jobs: [
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "5000 - 10000 RON" },
        { name: "Consultant în energie", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Litere și Științe Umaniste",
    location: "Sibiu",
    university: "Universitatea Lucian Blaga din Sibiu (ULBS)",
    keywords: [
      "litere", "stiinte umaniste", "sibiu", "ulbs", "profesor", 
      "traducator", "jurnalist", "redactor", "istoric", "litere", "stiinte", 
      "umaniste", "profesor", "traducator", "jurnalist"
    ],
    salary: { min: 2500, max: 8000 },
    details: {
      duration: 3,
      study: "Literatură, limbi străine, istorie, jurnalism, comunicare, studii culturale.",
      jobs: [
        { name: "Profesor", salary: "2500 - 5000 RON" },
        { name: "Jurnalist", salary: "2800 - 6000 RON" },
        { name: "Traducător", salary: "3000 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Psihologie și Științe ale Comunicării",
    location: "Cluj-Napoca",
    university: "Universitatea Babeș-Bolyai (UBB)",
    keywords: [
      "psihologie", "stiintele comunicarii", "cluj-napoca", "ubb", "psiholog", 
      "consilier", "jurnalist", "comunicare", "relatii publice", "psiholog", 
      "consilier", "cluj napoca", "jurnalist", "comunicare", "relatii publice"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Psihologie socială, psihologia personalității, comunicare publică, relații publice, publicitate.",
      jobs: [
        { name: "Consilier psihologic", salary: "3500 - 8000 RON" },
        { name: "Specialist în PR", salary: "4000 - 9000 RON" },
        { name: "Psiholog organizațional", salary: "5000 - 12000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe ale Mediului",
    location: "Iași",
    university: "Universitatea Alexandru Ioan Cuza (UAIC)",
    keywords: [
      "stiinte ale mediului", "iasi", "uaic", "ecolog", "biolog", 
      "cercetator", "poluare", "reciclare", "resurse", "protecția mediului", 
      "stiinte", "mediului", "ecolog", "biolog", "cercetator", "poluare"
    ],
    salary: { min: 2800, max: 10000 },
    details: {
      duration: 3,
      study: "Poluare și protecția mediului, managementul deșeurilor, resurse de apă, sisteme informaționale geografice (GIS).",
      jobs: [
        { name: "Specialist în protecția mediului", salary: "3000 - 6000 RON" },
        { name: "Analist GIS", salary: "4000 - 9000 RON" },
        { name: "Cercetător ecolog", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Chimică",
    location: "Craiova",
    university: "Universitatea din Craiova",
    keywords: [
      "inginerie chimica", "craiova", "inginer", "chimist", "cercetator", 
      "industria chimica", "petrol", "farmacie", "alimentara",
      "inginerie", "chimica", "chimist", "inginer", "cercetator", "industria"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Procese chimice, tehnologii chimice, polimeri, biochimie, securitate și sănătate în muncă.",
      jobs: [
        { name: "Inginer chimist", salary: "5000 - 10000 RON" },
        { name: "Cercetător", salary: "4500 - 12000 RON" },
        { name: "Specialist în controlul calității", salary: "3500 - 7000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Medicină și Farmacie",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "medicina", "farmacie", "suceava", "usv", "doctor", "farmacist", 
      "sanatate", "spital", "clinica", "medicin", "farmaci", "doctor", 
      "sanatate", "spital"
    ],
    salary: { min: 3000, max: 20000 },
    details: {
      duration: 6,
      study: "Medicină generală, farmacie, asistență medicală, balneofiziokinetoterapie.",
      jobs: [
        { name: "Medic rezident", salary: "3000 - 4500 RON" },
        { name: "Farmacist", salary: "4000 - 8000 RON" },
        { name: "Medic specialist", salary: "7000 - 15000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Politice și Administrative",
    location: "Târgoviște",
    university: "Universitatea Valahia din Târgoviște",
    keywords: [
      "stiinte politice", "administrative", "targoviste", "valahia", "politica", 
      "guvern", "management", "functii publice", "consultant", "politici",
      "stiinte", "politice", "administrative", "politica", "guvern", 
      "management"
    ],
    salary: { min: 3000, max: 10000 },
    details: {
      duration: 3,
      study: "Științe politice, administrație publică, politici publice, drept administrativ, management public.",
      jobs: [
        { name: "Funcționar public", salary: "3000 - 7000 RON" },
        { name: "Analist de politici publice", salary: "4000 - 9000 RON" },
        { name: "Manager de proiect", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie și Științe Aplicative",
    location: "Oradea",
    university: "Universitatea din Oradea",
    keywords: [
      "inginerie", "stiinte aplicative", "oradea", "inginer", "matematician", 
      "fizician", "chimist", "inginerie", "stiinte", "aplicative", 
      "inginer", "matematician", "fizician"
    ],
    salary: { min: 3500, max: 15000 },
    details: {
      duration: 4,
      study: "Inginerie mecanică, inginerie electrică, informatică, matematică, fizică, chimie.",
      jobs: [
        { name: "Inginer", salary: "5000 - 10000 RON" },
        { name: "Programator", salary: "6000 - 12000 RON" },
        { name: "Cercetător", salary: "4500 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Științe Economice",
    location: "Pitești",
    university: "Universitatea din Pitești",
    keywords: [
      "stiinte economice", "pitesti", "economie", "finante", "contabilitate", 
      "management", "marketing", "economist", "contabil", "manager", 
      "analist financiar", "stiinte", "economice", "economie", "finate", 
      "contabilitat"
    ],
    salary: { min: 2800, max: 12000 },
    details: {
      duration: 3,
      study: "Economie, finanțe-bănci, contabilitate, marketing, management, administrarea afacerilor.",
      jobs: [
        { name: "Economist", salary: "2800 - 6000 RON" },
        { name: "Contabil", salary: "4000 - 8000 RON" },
        { name: "Analist financiar", salary: "5000 - 10000 RON" }
      ]
    }
  },
  {
    name: "Facultatea de Inginerie Energetică",
    location: "Suceava",
    university: "Universitatea Ștefan cel Mare (USV)",
    keywords: [
      "inginerie energetica", "suceava", "usv", "energie", "electrica", 
      "termica", "regenerabila", "inginer", "consultant", "energie", 
      "inginerie", "energetic", "energie", "electrica", "termica", 
      "regenerabil"
    ],
    salary: { min: 4000, max: 15000 },
    details: {
      duration: 4,
      study: "Sisteme de conversie a energiei, termodinamică, energie solară, eoliană, management energetic.",
      jobs: [
        { name: "Inginer energetician", salary: "6000 - 12000 RON" },
        { name: "Inginer de mentenanță", salary: "5000 - 10000 RON" },
        { name: "Consultant în energie", salary: "7000 - 15000 RON" }
      ]
    }
  },
]

export default universities;

