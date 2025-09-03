const quizQuestions = [
    {
        questionText: "Ce ti se pare mai interesant?",
        type: "multiple-choice",
        options: [
            {
                text: "Cod de programare, algoritmi și baze de date.",
                scores: {
                    "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)": 2,
                    "Facultatea de Matematică și Informatică": 2,
                    "Facultatea de Automatică și Calculatoare": 2,
                    "Facultatea de Electronică, Telecomunicații și Tehnologia Informației": 1,
                    "Facultatea de Tehnologia Informației": 2,
                    "Facultatea de Automatică, Calculatoare și Inginerie Electrică": 1.5,
                    "Facultatea de Matematică, Informatică și Științe Economice": 1.5,
                    "Facultatea de Matematică, Informatică și Științe Aplicate": 1.5,
                    "Facultatea de Matematică, Informatică și Științe Naturale": 1.5
                }
            },
            {
                text: "Date financiare, grafice economice și studii de piață.",
                scores: {
                    "Facultatea de Contabilitate și Informatică de Gestiune": 2,
                    "Facultatea de Marketing": 2,
                    "Facultatea de Business și Turism": 1.5,
                    "Facultatea de Economie și Administrarea Afacerilor": 2,
                    "Facultatea de Științe Economice": 2,
                    "Facultatea de Științe Economice și Gestiunea Afacerilor": 2,
                    "Facultatea de Inginerie Economică și Logistică": 1.5,
                    "Facultatea de Științe Economice și Drept": 1,
                }
            },
            {
                text: "Experimente științifice și echipamente de laborator.",
                scores: {
                    "Facultatea de Fizică": 2,
                    "Facultatea de Chimie": 2,
                    "Facultatea de Inginerie a Sistemelor Biotehnice": 2,
                    "Facultatea de Geologie și Geofizică": 2,
                    "Facultatea de Chimie și Inginerie Chimică": 1.5,
                    "Facultatea de Biologie și Geologie": 2,
                    "Facultatea de Inginerie Chimică și Protecția Mediului": 1.5,
                    "Facultatea de Chimie, Biologie, Geografie": 1
                }
            },
            {
                text: "Legi, regulamente și documente juridice.",
                scores: {
                    "Facultatea de Drept": 2,
                    "Facultatea de Administrație Publică": 1.5,
                    "Facultatea de Drept și Științe Administrative": 2,
                    "Facultatea de Științe Juridice": 2,
                    "Facultatea de Drept și Științe Sociale": 1.5
                }
            },
            {
                text: "Mașinării, motoare și unelte de precizie.",
                scores: {
                    "Facultatea de Inginerie Mecanică": 2,
                    "Facultatea de Inginerie Aerospațială": 2,
                    "Facultatea de Inginerie Electrică": 1.5,
                    "Facultatea de Inginerie Mecanică și Electrică": 2,
                    "Facultatea de Inginerie Mecanică, Industrială și Maritimă": 2,
                    "Facultatea de Inginerie Mecanică și Maritimă": 2,
                    "Facultatea de Inginerie": 2
                }
            },
            {
                text: "Analize psihologice, interviuri și studii de comportament uman.",
                scores: {
                    "Facultatea de Sociologie și Asistență Socială": 2,
                    "Facultatea de Științe Politice": 1.5,
                    "Facultatea de Psihologie și Științe ale Educației": 2,
                    "Facultatea de Științe Politice, Administrative și ale Comunicării": 1,
                    "Facultatea de Psihologie și Științele Comunicării": 1.5
                }
            },
            {
                text: "Hărți, materiale de construcții și schițe de arhitectură.",
                scores: {
                    "Facultatea de Arhitectură și Urbanism": 2,
                    "Facultatea de Construcții": 2,
                    "Facultatea de Geografie": 1.5,
                    "Facultatea de Inginerie Civilă și de Instalații": 2,
                    "Facultatea de Geografie, Turism și Sport": 1,
                    "Facultatea de Inginerie și Arhitectură Navală": 1.5,
                    "Facultatea de Inginerie și Arhitectură": 2
                }
            },
            {
                text: "Texte literare, documente istorice și jurnale.",
                scores: {
                    "Facultatea de Litere": 2,
                    "Facultatea de Istorie și Filosofie": 2,
                    "Facultatea de Jurnalism și Științele Comunicării": 1.5,
                    "Facultatea de Teologie Ortodoxă": 1,
                    "Facultatea de Istorie și Teologie": 1.5,
                    "Facultatea de Teologie Romano-Catolică": 1,
                    "Facultatea de Litere și Limbi Străine": 2
                }
            },
        ],
    },
    {
        questionText: "În ce tip de mediu te-ai simți cel mai bine?",
        type: "multiple-choice",
        options: [
            {
                text: "Într-un birou modern / corporatie.",
                scores: {
                    "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)": 2,
                    "Facultatea de Matematică și Informatică": 2,
                    "Facultatea de Marketing": 1.5,
                    "Facultatea de Inginerie în Limbi Străine": 1.5
                }
            },
            {
                text: "Într-un spital sau o clinică medicală.",
                scores: {
                    "Facultatea de Medicină Generală": 2,
                    "Facultatea de Medicină Veterinară": 2,
                    "Facultatea de Medicină Dentară": 2,
                    "Facultatea de Medicină și Farmacie": 2,
                    "Facultatea de Medicină": 2,
                    "Facultatea de Medicină și Științe Biologice": 1.5,
                    "Facultatea de Medicină și Științe Umaniste": 1.5,
                    "Facultatea de Medicină și Științe Sociale": 1.5
                }
            },
            {
                text: "Într-un laborator de cercetare științifică.",
                scores: {
                    "Facultatea de Fizică": 2,
                    "Facultatea de Chimie": 2,
                    "Facultatea de Inginerie Chimică": 2,
                    "Facultatea de Inginerie a Sistemelor Biotehnice": 2,
                    "Facultatea de Geologie și Geofizică": 1.5,
                    "Facultatea de Științe ale Naturii și Agronomie": 1.5
                }
            },
            {
                text: "În teren sau pe un șantier, lucrând la proiecte fizice.",
                scores: {
                    "Facultatea de Construcții": 2,
                    "Facultatea de Silvicultură și Exploatări Forestiere": 2,
                    "Facultatea de Horticultură": 2,
                    "Facultatea de Inginerie Civilă și Mecanică": 1.5,
                    "Facultatea de Horticultură, Silvicultură și Inginerie": 1
                }
            },
            {
                text: "Într-o instituție publică sau o sală de judecată.",
                scores: {
                    "Facultatea de Drept": 2,
                    "Facultatea de Științe Politice": 2,
                    "Facultatea de Administrație Publică": 2,
                    "Facultatea de Științe Politice, Administrative și ale Comunicării": 1.5,
                    "Școala Națională de Studii Politice și Administrative (SNSPA)": 2
                }
            },
            {
                text: "Într-un studio de creație sau într-o sală de expoziție.",
                scores: {
                    "Facultatea de Arhitectură și Urbanism": 2,
                    "Facultatea de Arte Plastice și Design": 2,
                    "Facultatea de Muzică": 2,
                    "Facultatea de Teatru și Film": 2,
                    "Facultatea de Arte Vizuale și Design": 2,
                    "Facultatea de Arte Plastice": 2,
                    "Facultatea de Design de Produs și Mediu": 1.5,
                    "Facultatea de Arte și Design": 2
                }
            },
            {
                text: "Într-un centru de consiliere sau un cabinet privat.",
                scores: {
                    "Facultatea de Psihologie și Științe ale Educației": 2,
                    "Facultatea de Sociologie și Asistență Socială": 2,
                    "Facultatea de Științe ale Educației, Psihologie și Sociologie": 1.5
                }
            },
            {
                text: "Într-un mediu academic, cu accent pe studiu și predare.",
                scores: {
                    "Facultatea de Litere": 2,
                    "Facultatea de Istorie și Filosofie": 2,
                    "Facultatea de Litere și Științe ale Comunicării": 1,
                    "Facultatea de Litere și Arte": 1,
                    "Facultatea de Litere, Istorie și Teologie": 1.5
                }
            },
        ],
    },
    {
        questionText: "Ce te-ar face să te simți cel mai împlinit la sfarsitul zilei?",
        type: "multiple-choice",
        options: [
            {
                text: "Faptul că ai creat un sistem care funcționează perfect.",
                scores: {
                    "Facultatea de Automatică și Calculatoare": 2,
                    "Facultatea de Electronică, Telecomunicații și Tehnologia Informației": 2,
                    "Facultatea de Inginerie Aerospațială": 1.5,
                    "Facultatea de Inginerie Mecanică": 1.5,
                    "Facultatea de Inginerie Electronică, Telecomunicații și Tehnologia Informației": 2,
                    "Facultatea de Inginerie Energetică": 1
                }
            },
            {
                text: "Faptul că ai contribuit la siguranța și sănătatea cuiva.",
                scores: {
                    "Facultatea de Medicină Generală": 2,
                    "Facultatea de Psihologie și Științe ale Educației": 1.5,
                    "Facultatea de Medicină Veterinară": 2,
                    "Facultatea de Educație Fizică și Sport": 1
                }
            },
            {
                text: "Faptul că ai găsit o soluție la o problemă financiară.",
                scores: {
                    "Facultatea de Contabilitate și Informatică de Gestiune": 2,
                    "Facultatea de Economie și Administrarea Afacerilor": 2,
                    "Facultatea de Științe Economice": 2
                }
            },
            {
                text: "Faptul că ai ajutat un om să-și rezolve o problemă personală sau socială.",
                scores: {
                    "Facultatea de Sociologie și Asistență Socială": 2,
                    "Facultatea de Drept": 1.5,
                    "Facultatea de Psihologie și Științe Sociale": 2
                }
            },
            {
                text: "Faptul că ai construit ceva durabil și util societății.",
                scores: {
                    "Facultatea de Inginerie Civilă și de Instalații": 2,
                    "Facultatea de Inginerie și Arhitectură Navală": 2,
                    "Facultatea de Inginerie și Arhitectură": 1.5
                }
            },
            {
                text: "Faptul că ai conceput un proiect care a educat publicul.",
                scores: {
                    "Facultatea de Litere": 2,
                    "Facultatea de Jurnalism și Științele Comunicării": 2,
                    "Facultatea de Jurnalism, Relații Publice și Științele Comunicării": 2,
                    "Facultatea de Științe ale Educației": 1.5
                }
            },
            {
                text: "Faptul că ai descoperit o informație istorica.",
                scores: {
                    "Facultatea de Istorie și Filosofie": 2,
                    "Facultatea de Fizică": 2,
                    "Facultatea de Matematică și Informatică": 1.5,
                    "Facultatea de Istorie și Geografie": 1.5
                }
            },
            {
                text: "Faptul că ai influențat o decizie politică sau o politică publică.",
                scores: {
                    "Facultatea de Științe Politice": 2,
                    "Facultatea de Administrație Publică": 2,
                    "Facultatea de Științe Politice și Administrative": 2,
                }
            },
        ],
    },
    {
        questionText: "Care este prioritatea ta principală la un loc de muncă?",
        type: "multiple-choice",
        options: [
            {
                text: "Stabilitatea și siguranța unei cariere.",
                scores: {
                    "Facultatea de Drept": 2,
                    "Facultatea de Administrație Publică": 2,
                    "Facultatea de Tehnologia Informației": 1.5, 
                    "Facultatea de Științe Politice și Administrative": 1.5
                }
            },
            {
                text: "Potențialul de a câștiga mult.",
                scores: {
                    "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)": 2,
                    "Facultatea de Business și Turism": 1.5
                }
            },
            {
                text: "O bază solidă în logică si matematică",
                scores: {
                    "Facultatea de Matematică și Informatică": 2,
                    "Facultatea de Fizică": 1.5,
                    "Facultatea de Inginerie și Științe Exacte": 1.5
                }
            },
            {
                text: "Oportunitatea de a construi lucruri noi, de la zero.",
                scores: {
                    "Facultatea de Automatică și Calculatoare": 2,
                    "Facultatea de Arhitectură și Urbanism": 2,
                    "Facultatea de Inginerie Aerospațială": 2,
                    "Facultatea de Arte Plastice, Decorative și Design": 1.5
                }
            },
            {
                text: "Posibilitatea de a ajuta direct oamenii în momente critice dpdv al sanatatii fie medical fie psihologic",
                scores: {
                    "Facultatea de Medicină Generală": 2,
                    "Facultatea de Psihologie și Științe ale Educației": 2,
                    "Facultatea de Sociologie și Asistență Socială": 2,
                    "Facultatea de Medicină și Farmacie": 2
                }
            },
            {
                text: "Capacitatea de a schimba percepția publicului prin comunicare.",
                scores: {
                    "Facultatea de Jurnalism și Științele Comunicării": 2,
                    "Facultatea de Litere": 1.5,
                    "Facultatea de Științe ale Comunicării și Relații Internaționale": 1.5,
                    "Facultatea de Științe ale Comunicării": 2
                }
            },
            {
                text: "Faptul că domeniul meu are o cerere mare pe piața muncii.",
                scores: {
                    "Facultatea de Inginerie Civilă și de Instalații": 2,
                    "Facultatea de Inginerie Mecanică": 2,
                    "Facultatea de Electronică, Telecomunicații și Tehnologia Informației": 2,
                    "Facultatea de Inginerie Alimentară": 1.5
                }
            },
        ],
    },
    {
        questionText: "În ce fel de colectiv te-ai simți cel mai bine?",
        type: "multiple-choice",
        options: [
            {
                text: "Într-un grup de programatori / Într-o corporatie",
                scores: {
                    "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)": 2,
                    "Facultatea de Matematică și Informatică": 2,
                    "Facultatea de Automatică și Calculatoare": 2
                }
            },
            {
                text: "Într-un spital, alături de medici și personal medical.",
                scores: {
                    "Facultatea de Medicină Generală": 2,
                    "Facultatea de Medicină Dentară": 2,
                    "Facultatea de Medicină și Farmacie": 2
                }
            },
            {
                text: "Într-un think-tank de cercetare sau de politici publice.",
                scores: {
                    "Facultatea de Științe Politice": 2,
                    "Facultatea de Istorie și Filosofie": 1.5,
                    "Facultatea de Sociologie și Asistență Socială": 1.5,
                    "Facultatea de Geografie": 1
                }
            },
            {
                text: "Într-o echipă care construiește un produs fizic complex.",
                scores: {
                    "Facultatea de Inginerie Mecanică": 2,
                    "Facultatea de Inginerie Civilă și de Instalații": 2,
                    "Facultatea de Electronică, Telecomunicații și Tehnologia Informației": 2,
                    "Facultatea de Inginerie Energetică": 2
                }
            },
            {
                text: "Într-o firmă de avocatură, consultanță sau audit / corporatie",
                scores: {
                    "Facultatea de Drept": 2,
                    "Facultatea de Contabilitate și Informatică de Gestiune": 2
                }
            },
            {
                text: "Într-o echipă de comunicare care informează publicul.",
                scores: {
                    "Facultatea de Jurnalism și Științele Comunicării": 2,
                    "Facultatea de Litere": 1.5,
                    "Facultatea de Științe ale Comunicării și Relații Internaționale": 1.5
                }
            },
            {
                text: "Într-un mediu de creație artistică, unde se valorizează originalitatea si creativitatea",
                scores: {
                    "Facultatea de Arhitectură și Urbanism": 2,
                    "Facultatea de Arte Plastice și Design": 2,
                    "Facultatea de Muzică și Teatru": 2
                }
            },
            {
                text: "Într-o echipă de cercetare a spațiului sau a fenomenelor naturale.",
                scores: {
                    "Facultatea de Inginerie Aerospațială": 2,
                    "Facultatea de Fizică": 2,
                    "Facultatea de Geografie": 2,
                    "Facultatea de Chimie": 1.5,
                    "Facultatea de Științe ale Mediului": 1.5
                }
            },
        ],
    },
    {
        questionText: "Ce fel de impact vrei să aibă munca ta?",
        type: "multiple-choice",
        options: [
            {
                text: "Tehnologic - să contribui la inovație și progres digital.",
                scores: {
                    "Facultatea de Automatică, Calculatoare și Inginerie Electrică": 2,
                    "Facultatea de Inginerie Electronică și Telecomunicații": 2,
                    "Facultatea de Inginerie a Sistemelor Biotehnice": 1.5
                }
            },
            {
                text: "Umanitar/Social - să ajuți direct oamenii și comunitățile.",
                scores: {
                    "Facultatea de Sociologie și Asistență Socială": 2,
                    "Facultatea de Psihologie și Științe Sociale": 2,
                    "Facultatea de Teologie Ortodoxă": 1.5,
                    "Facultatea de Teologie": 1.5
                }
            },
            {
                text: "Economic - să participi la creșterea și stabilitatea financiară.",
                scores: {
                    "Facultatea de Științe Economice și Gestiunea Afacerilor": 2,
                    "Facultatea de Economie și Gestiunea Afacerilor": 2,
                    "Facultatea de Inginerie Economică și Logistică": 1.5
                }
            },
            {
                text: "Cultural/Artistic - să creezi artă și să îmbogățești cultura.",
                scores: {
                    "Facultatea de Arte Vizuale și Design": 2,
                    "Facultatea de Muzică și Teatru": 2,
                    "Facultatea de Arte și Design": 2,
                    "Facultatea de Arte Plastice, Decorative și Design": 2
                }
            },
            {
                text: "Științific - să descoperi noi cunoștințe despre lume.",
                scores: {
                    "Facultatea de Biologie și Geologie": 2,
                    "Facultatea de Geologie și Geofizică": 2,
                    "Facultatea de Chimie, Biologie, Geografie": 1.5
                }
            },
            {
                text: "Protecția mediului - să contribui la un viitor sustenabil.",
                scores: {
                    "Facultatea de Silvicultură și Exploatări Forestiere": 2,
                    "Facultatea de Horticultură": 2,
                    "Facultatea de Inginerie Chimică și Protecția Mediului": 2,
                    "Facultatea de Științe ale Mediului": 2
                }
            }
        ]
    },
    {
        questionText: "Ce abilități de bază te definesc cel mai bine?",
        type: "multiple-choice",
        options: [
            {
                text: "Gândire analitică și rezolvare de probleme logice.",
                scores: {
                    "Facultatea de Matematică, Informatică și Științe Aplicate": 2,
                    "Facultatea de Inginerie și Științe Aplicate": 2,
                    "Facultatea de Inginerie și Științe Exacte": 2
                }
            },
            {
                text: "Creativitate, imaginație și simț estetic.",
                scores: {
                    "Facultatea de Design de Produs și Mediu": 2,
                    "Facultatea de Litere și Arte": 1.5,
                    "Facultatea de Arte Plastice și Decorative": 2
                }
            },
            {
                text: "Empatie, comunicare și dorința de a lucra cu oamenii.",
                scores: {
                    "Facultatea de Științe ale Educației, Psihologie și Sociologie": 2,
                    "Facultatea de Litere și Științe Sociale": 1.5,
                    "Facultatea de Psihologie și Științe Sociale": 2
                }
            },
            {
                text: "Munca manuală și înțelegerea sistemelor mecanice/electrice.",
                scores: {
                    "Facultatea de Inginerie Mecanică și Electrică": 2,
                    "Facultatea de Inginerie Civilă și Mecanică": 2,
                    "Facultatea de Inginerie Electrică și Energetică": 2,
                    "Facultatea de Inginerie": 2
                }
            },
            {
                text: "Abilități de cercetare, investigație și documentare.",
                scores: {
                    "Facultatea de Istorie și Teologie": 2,
                    "Facultatea de Istorie și Geografie": 2,
                    "Facultatea de Geografie, Turism și Sport": 1
                }
            },
            {
                text: "Spirit de organizare, leadership și management, poate politic",
                scores: {
                    "Facultatea de Inginerie și Agronomie": 1.5,
                    "Facultatea de Științe Politice și Administrative": 2,
                    "Facultatea de Științe Economice și Drept": 1
                }
            }
        ]
    },
    {
        questionText: "Ce mediu de lucru ți se pare mai atractiv?",
        type: "multiple-choice",
        options: [
            {
                text: "Un mediu structurat, cu reguli clare (ex: o firmă de avocatură, o instituție publică).",
                scores: {
                    "Facultatea de Drept și Științe Administrative": 2,
                    "Facultatea de Drept și Științe Sociale": 2,
                    "Facultatea de Drept și Științe Politice": 2,
                    "Școala Națională de Studii Politice și Administrative (SNSPA)": 1.5
                }
            },
            {
                text: "Un mediu flexibil, bazat pe proiecte (ex: o companie IT, o agenție de design).",
                scores: {
                    "Facultatea de Tehnologia Informației": 2,
                    "Facultatea de Inginerie în Limbi Străine": 2,
                    "Facultatea de Design de Produs și Mediu": 1.5
                }
            },
            {
                text: "Un mediu dinamic, în contact direct cu oamenii (ex: spital, școală, redacție).",
                scores: {
                    "Facultatea de Medicină și Științe Biologice": 2,
                    "Facultatea de Științe ale Educației": 2,
                    "Facultatea de Jurnalism, Relații Publice și Științele Comunicării": 2,
                    "Facultatea de Litere și Teologie": 1
                }
            },
            {
                text: "Un mediu de cercetare și experimentare (ex: laborator, centru de inginerie).",
                scores: {
                    "Facultatea de Inginerie și Științe Aplicative": 2,
                    "Facultatea de Matematică, Informatică și Științe Naturale": 1.5,
                    "Facultatea de Inginerie Chimică": 2
                }
            },
            {
                text: "Un mediu în natură sau care implică deplasări (ex: rezervație naturală, șantier arheologic).",
                scores: {
                    "Facultatea de Silvicultură": 2,
                    "Facultatea de Științe ale Naturii și Agronomie": 2,
                    "Facultatea de Geografie": 1.5,
                    "Facultatea de Horticultură, Silvicultură și Inginerie": 1.5
                }
            }
        ]
    },
    {
        questionText: "Ce te motivează să înveți ceva nou?",
        type: "multiple-choice",
        options: [
            {
                text: "Curiozitatea de a înțelege cum funcționează un anumit lucru.",
                scores: { "Facultatea de Fizică": 2, "Facultatea de Inginerie Aerospațială": 1.5 }
            },
            {
                text: "Dorința de a rezolva probleme practice, de a face lucrurile mai eficiente si cu folos.",
                scores: { "Facultatea de Inginerie Alimentară": 2, "Facultatea de Inginerie Economică și Logistică": 2 }
            },
            {
                text: "Nevoia de a-i ajuta și de a înțelege pe ceilalți.",
                scores: { "Facultatea de Medicină și Științe Umaniste": 2, "Facultatea de Teologie Romano-Catolică": 1.5 }
            },
            {
                text: "Pasiunea pentru frumos, estetică și exprimare artistică.",
                scores: { "Facultatea de Arte și Design": 2, "Facultatea de Muzică și Teatru": 2 }
            },
            {
                text: "Dorința de a înțelege trecutul, cultura și societatea în care trăim.",
                scores: { "Facultatea de Istorie și Teologie": 2, "Facultatea de Litere, Istorie și Teologie": 2 }
            }
        ]
    },
    {
        questionText: "In ce fel de domeniu preferi sa iti desfasori activitatea?",
        type: "multiple-choice",
        options: [
            {
                text: "Limbajul matematicii, al datelor și al codului sursă.",
                scores: { "Facultatea de Matematică și Informatică": 2, "Facultatea de Cibernetică, Statistică și Informatică Economică (CSIE)": 2 }
            },
            {
                text: "Limbajul legilor, al argumentelor și al dezbaterilor.",
                scores: { "Facultatea de Drept și Științe Politice": 2, "Facultatea de Științe Juridice": 2 }
            },
            {
                text: "Limbajul vizual – al formelor, culorilor și compoziției.",
                scores: { "Facultatea de Arte Plastice, Decorative și Design": 2, "Facultatea de Arte Vizuale și Design": 2 }
            },
            {
                text: "Limbajul științelor naturii – al formulelor chimice și al conceptelor biologice.",
                scores: { "Facultatea de Inginerie Chimică și Protecția Mediului": 2, "Facultatea de Biologie și Geologie": 2 }
            },
            {
                text: "Limbajul finanțelor – al piețelor, investițiilor și rapoartelor economice.",
                scores: { "Facultatea de Științe Economice": 2, "Facultatea de Economie și Administrarea Afacerilor": 2 }
            },
            {
                text: "Limbajul cuvintelor – al narațiunilor, al comunicării și al interpretării textelor.",
                scores: { "Facultatea de Litere și Limbi Străine": 2, "Facultatea de Litere și Științe Umaniste": 2 }
            }
        ]
    },
    {
        questionText: "Ce salariu lunar net (în RON) consideri că ar fi satisfăcător pentru tine la 5-6 ani după absolvire?",
        type: "slider",
        min: 2500,
        max: 25000,
        step: 500
    }
];

export default quizQuestions;

