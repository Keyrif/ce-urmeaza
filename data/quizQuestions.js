  // unfinished
  
  const quizQuestions = [
    {
      questionText: "Ce te-ar motiva cel mai mult să te duci la muncă în fiecare dimineață?",
      type: "multiple-choice",
      options: [
        { text: "Impactul social și ajutarea oamenilor", scores: { "Facultatea de Informatică": 2, "Facultatea de Medicină": 0.5, "Facultatea de Drept": 0.5 } },
        { text: "Interacțiunea cu oamenii și munca în echipă", scores: { "Facultatea de Medicină": 1.5, "Facultatea de Drept": 1.5 } },
        { text: "Creația artistică și vizuală", scores: { "Facultatea de Arte Plastice": 2, "Facultatea de Arhitectură": 1.5 } },
        { text: "Studiul legilor și a regulilor", scores: { "Facultatea de Drept": 2, "Facultatea de Medicină": 0.5 } },
      ],
    },
    {
      questionText: "În ce domeniu ai vrea să lucrezi?",
      type: "multiple-choice",
      options: [
        { text: "Tehnologie și IT", scores: { "Facultatea de Informatică": 2 } },
        { text: "Sănătate și bunăstarea oamenilor", scores: { "Facultatea de Medicină": 2 } },
        { text: "Justiție și societate", scores: { "Facultatea de Drept": 2 } },
        { text: "Design și construcții", scores: { "Facultatea de Arhitectură": 2, "Facultatea de Arte Plastice": 1 } },
        { text: "Artă și cultură", scores: { "Facultatea de Arte Plastice": 2 } },
      ],
    },
    {
      questionText: "Ce materie îți place cel mai mult?",
      type: "multiple-choice",
      options: [
        { text: "Matematică / Fizică", scores: { "Facultatea de Informatică": 1.5, "Facultatea de Arhitectură": 1 } },
        { text: "Biologie / Chimie", scores: { "Facultatea de Medicină": 2 } },
        { text: "Istorie / Filosofie", scores: { "Facultatea de Drept": 1, "Facultatea de Arte Plastice": 0.5 } },
        { text: "Desen / Muzică", scores: { "Facultatea de Arte Plastice": 1.5, "Facultatea de Arhitectură": 1 } },
      ],
    },
    {
      questionText: "Ce salariu lunar dorești?",
      type: "slider",
      min: 2500,
      max: 10000,
      step: 500,
    },
  ];

  export default quizQuestions;