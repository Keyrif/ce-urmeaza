const universities = [
    {
      name: "Facultatea de Informatică",
      location: "București",
      keywords: ["itist", "calculator", "it", "programare", "informatică"],
      salary: { min: 6000, max: 12000 },
      details: {
        duration: 3,
        study: "Algoritmi, baze de date, programare, inteligență artificială.",
        jobs: [
          { name: "Programator", salary: "6000 - 9000 RON" },
          { name: "Inginer software", salary: "8000 - 12000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Medicină",
      location: "Cluj-Napoca",
      keywords: ["medicina", "doctor", "chirurgie"],
      salary: { min: 8000, max: 30000 },
      details: {
        duration: 6,
        study: "Anatomie, fiziologie, farmacologie, clinică medicală.",
        jobs: [
          { name: "Medic specialist", salary: "8000 - 20000 RON" },
          { name: "Chirurg", salary: "12000 - 30000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Drept",
      location: "Iași",
      keywords: ["drept", "avocat", "justiție", "lege"],
      salary: { min: 7000, max: 22000 },
      details: {
        duration: 4,
        study: "Drept civil, drept penal, drept administrativ, dreptul muncii.",
        jobs: [
          { name: "Avocat", salary: "7000 - 15000 RON" },
          { name: "Magistrat", salary: "9000 - 22000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Arhitectură",
      location: "Timișoara",
      keywords: ["arhitectură", "design", "urbanism", "clădiri"],
      salary: { min: 6000, max: 14000 },
      details: {
        duration: 6,
        study: "Proiectare, istoria arhitecturii, urbanism, structuri.",
        jobs: [
          { name: "Arhitect", salary: "7000 - 14000 RON" },
          { name: "Urbanist", salary: "6000 - 12000 RON" },
        ],
      },
    },
    {
      name: "Facultatea de Arte Plastice",
      location: "București",
      keywords: ["arte", "pictură", "sculptură", "grafică"],
      salary: { min: 2000, max: 5000 },
      details: {
        duration: 3,
        study: "Pictură, sculptură, grafică, design vestimentar.",
        jobs: [
          { name: "Artist", salary: "2000 - 4000 RON" },
          { name: "Designer", salary: "3500 - 5000 RON" },
        ],
      },
    },
  ];

export default universities;