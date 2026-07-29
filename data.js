// ============================================
// DATA.JS - Contenido completo de la guía
// ============================================

const VERB_TABLE = [
    { base: 'Clean', past: 'Cleaned', participle: 'Cleaned', ing: 'Cleaning', spanish: 'Limpiar' },
    { base: 'Wash', past: 'Washed', participle: 'Washed', ing: 'Washing', spanish: 'Lavar' },
    { base: 'Sweep', past: 'Swept', participle: 'Swept', ing: 'Sweeping', spanish: 'Barrer' },
    { base: 'Mop', past: 'Mopped', participle: 'Mopped', ing: 'Mopping', spanish: 'Trapear' },
    { base: 'Cook', past: 'Cooked', participle: 'Cooked', ing: 'Cooking', spanish: 'Cocinar' },
    { base: 'Tidy', past: 'Tidied', participle: 'Tidied', ing: 'Tidying', spanish: 'Ordenar' },
    { base: 'Fold', past: 'Folded', participle: 'Folded', ing: 'Folding', spanish: 'Doblar' },
    { base: 'Set', past: 'Set', participle: 'Set', ing: 'Setting', spanish: 'Poner (mesa)' },
    { base: 'Clear', past: 'Cleared', participle: 'Cleared', ing: 'Clearing', spanish: 'Recoger (mesa)' },
    { base: 'Water', past: 'Watered', participle: 'Watered', ing: 'Watering', spanish: 'Regar' },
    { base: 'Take out', past: 'Took out', participle: 'Taken out', ing: 'Taking out', spanish: 'Sacar (basura)' },
    { base: 'Feed', past: 'Fed', participle: 'Fed', ing: 'Feeding', spanish: 'Alimentar' }
];

const WEEKS = [
    {
        id: 0,
        title: 'Semana 1: Rutinas vs. El Ahora',
        subtitle: 'Present Simple vs. Present Continuous',
        concept: `
            <h3>💡 Concepto Clave</h3>
            <p><strong>Present Simple:</strong> Úsalo para <strong>rutinas</strong>, hechos y cosas que siempre pasan.</p>
            <p><em>Ejemplo:</em> "I sweep the floor every morning."</p>
            <p><strong>Present Continuous:</strong> Úsalo para acciones que están ocurriendo <strong>AHORA MISMO</strong>.</p>
            <p><em>Ejemplo:</em> "I am sweeping the floor right now."</p>
            <p>🎯 <strong>Secreto:</strong> El Simple es un <strong>reloj</strong> (horario fijo) y el Continuous es una <strong>cámara en vivo</strong>.</p>
        `,
        structures: `
            <h3>📐 Matriz de Estructuras</h3>
            <div style="overflow-x:auto;">
                <table class="verb-table">
                    <thead>
                        <tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>(+)</strong></td>
                            <td>Sujeto + Verbo(s/es)<br><small>She cooks dinner.</small></td>
                            <td>Sujeto + am/is/are + Verbo-ing<br><small>She is cooking dinner.</small></td>
                        </tr>
                        <tr>
                            <td><strong>(-)</strong></td>
                            <td>Sujeto + don't/doesn't + Verbo base<br><small>She doesn't cook.</small></td>
                            <td>Sujeto + am/is/are + not + Verbo-ing<br><small>She isn't cooking.</small></td>
                        </tr>
                        <tr>
                            <td><strong>(?)</strong></td>
                            <td>Do/Does + Sujeto + Verbo base?<br><small>Does she cook?<br>Yes, she does. / No, she doesn't.</small></td>
                            <td>Am/Is/Are + Sujeto + Verbo-ing?<br><small>Is she cooking?<br>Yes, she is. / No, she isn't.</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        roleplay: {
            title: '🎭 Juego de Roles: "El Reportero y la Chef"',
            tutor: [
                'What do you usually do at 7:00 AM?',
                'But what are you doing *right now*?',
                'What do you usually do on Sundays?'
            ],
            student: [
                'I usually tidy my room.',
                'I am answering the questions.',
                'I usually relax and watch TV.'
            ]
        },
        exercises: [
            {
                id: 'e1_1',
                title: '📝 Completa la oración',
                question: 'My mom ______ (cook) every day, but today she ______ (rest).',
                type: 'fill',
                answer: 'cooks, is resting',
                hint: 'Recuerda: rutina vs. ahora mismo'
            },
            {
                id: 'e1_2',
                title: '🔄 Transforma a Negativo',
                question: 'Transforma: "He sweeps the floor." →',
                type: 'fill',
                answer: 'He doesn\'t sweep the floor.',
                hint: 'Usa "doesn\'t" + verbo base'
            },
            {
                id: 'e1_3',
                title: '🎯 Elige la correcta',
                question: 'Listen! The baby (cries / is crying) because he is hungry.',
                type: 'multiple',
                options: ['cries', 'is crying'],
                answer: 'is crying',
                hint: '¡Está pasando ahora!'
            },
            {
                id: 'e1_4',
                title: '❓ Haz la pregunta',
                question: 'Pregunta: (you / water / the plants / now) ?',
                type: 'fill',
                answer: 'Are you watering the plants now?',
                hint: 'Present Continuous: Am/Is/Are + sujeto + verbo-ing'
            },
            {
                id: 'e1_5',
                title: '🎨 Diario Visual',
                question: 'Dibuja dos círculos. En el círculo A dibuja tu rutina; en el B dibuja qué haces ahora. Escribe oraciones.',
                type: 'creative',
                answer: 'Respuesta creativa - revisar con el tutor'
            }
        ],
        checkin: {
            emojis: ['😊', '🙂', '🤔', '😅', '😴'],
            labels: ['¡Genial!', 'Bien', 'Confundida', 'Estresada', 'Cansada']
        }
    },
    // Semana 2, 3 y 4 se estructuran igual
    // Por brevedad, aquí está la estructura. El código completo incluye todas.
    {
        id: 1,
        title: 'Semana 2: Historias y Acciones Interrumpidas',
        subtitle: 'Past Simple vs. Past Continuous + WHEN',
        concept: `
            <h3>💡 Concepto Clave</h3>
            <p><strong>Past Simple:</strong> Acción que empezó y terminó en el pasado.</p>
            <p><em>Ejemplo:</em> "I mopped the floor."</p>
            <p><strong>Past Continuous:</strong> Acción que estaba en progreso en el pasado.</p>
            <p><em>Ejemplo:</em> "I was mopping the floor."</p>
            <p>🔑 <strong>La Magia de 'WHEN':</strong> Past Simple (acción corta) + WHEN + Past Continuous (acción larga)</p>
            <p><em>Ejemplo:</em> "I was mopping when the phone rang."</p>
        `,
        structures: `
            <h3>📐 Matriz de Estructuras</h3>
            <div style="overflow-x:auto;">
                <table class="verb-table">
                    <thead>
                        <tr><th></th><th>Past Simple</th><th>Past Continuous</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>(+)</strong></td>
                            <td>Sujeto + Verbo (-ed/irreg)<br><small>She set the table.</small></td>
                            <td>Sujeto + was/were + Verbo-ing<br><small>She was setting the table.</small></td>
                        </tr>
                        <tr>
                            <td><strong>(-)</strong></td>
                            <td>Sujeto + didn't + Verbo base<br><small>She didn't set.</small></td>
                            <td>Sujeto + wasn't/weren't + Verbo-ing<br><small>She wasn't setting.</small></td>
                        </tr>
                        <tr>
                            <td><strong>(?)</strong></td>
                            <td>Did + Sujeto + Verbo base?<br><small>Did she set?<br>Yes, she did. / No, she didn't.</small></td>
                            <td>Was/Were + Sujeto + Verbo-ing?<br><small>Was she setting?<br>Yes, she was. / No, she wasn't.</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        roleplay: {
            title: '🎭 Juego de Roles: "El Detective del Desastre"',
            tutor: [
                'What were you doing when I arrived home yesterday?',
                'What happened while you were cleaning?',
                'What were you doing when the storm started?'
            ],
            student: [
                'I was taking out the trash.',
                'I dropped the broom.',
                'I was reading a book.'
            ]
        },
        exercises: [
            {
                id: 'e2_1',
                title: '🔗 Une con "WHEN"',
                question: 'I (wash) the dishes. My mom (arrive). →',
                type: 'fill',
                answer: 'I was washing the dishes when my mom arrived.',
                hint: 'Acción larga (was washing) + WHEN + acción corta (arrived)'
            },
            {
                id: 'e2_2',
                title: '🔧 Corrige el error',
                question: 'Corrige: "She were cooking when the lights go out." →',
                type: 'fill',
                answer: 'She was cooking when the lights went out.',
                hint: 'She = was. Go out en pasado = went out'
            },
            {
                id: 'e2_3',
                title: '🎯 Opción Múltiple',
                question: 'While we ______ (swept / were sweeping), we found a coin.',
                type: 'multiple',
                options: ['swept', 'were sweeping'],
                answer: 'were sweeping',
                hint: 'Acción larga en progreso'
            },
            {
                id: 'e2_4',
                title: '📝 Completa la historia',
                question: 'Yesterday at 5 PM, I ______ (tidy) my room, my dad ______ (water) plants.',
                type: 'fill',
                answer: 'was tidying, was watering',
                hint: 'Ambas acciones en progreso al mismo tiempo'
            },
            {
                id: 'e2_5',
                title: '🎨 Dibuja el chiste',
                question: 'Dibuja a alguien limpiando y a un gato rompiendo un florero. Escribe: "He was cleaning when..."',
                type: 'creative',
                answer: 'Respuesta creativa - revisar con el tutor'
            }
        ],
        checkin: {
            emojis: ['🔍', '🕵️‍♀️', '📖', '😤', '😌'],
            labels: ['¡Lo atrapé!', 'Casi todos', 'Necesito leer más', 'Me costó', 'Me relajé']
        }
    },
    // Semana 3 y 4...
    // ============================================
// SEMANA 3: PLANES DE VACACIONES Y PROMESAS
// ============================================
{
    id: 2,
    title: 'Semana 3: Planes de Vacaciones y Promesas',
    subtitle: 'Future Continuous vs. Going to vs. Will',
    concept: `
        <h3>💡 Concepto Clave</h3>
        <p><strong>Going to:</strong> Para <strong>planes fijos</strong> que ya decidiste.</p>
        <p><em>Ejemplo:</em> "I'm going to clean the garage tomorrow."</p>
        <p><strong>Will:</strong> Para <strong>promesas</strong>, ofrecimientos o decisiones en el momento.</p>
        <p><em>Ejemplo:</em> "I'll help you with the dishes!"</p>
        <p><strong>Future Continuous:</strong> Para imaginar una acción en <strong>progreso en el futuro</strong>.</p>
        <p><em>Ejemplo:</em> "This time next week, I will be relaxing on the beach."</p>
        <p>🎯 <strong>Secreto:</strong> "Going to" = <strong>plan con billete</strong> (ya decidido). "Will" = <strong>promesa espontánea</strong> (en el momento).</p>
    `,
    structures: `
        <h3>📐 Matriz de Estructuras</h3>
        <div style="overflow-x:auto;">
            <table class="verb-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Going to</th>
                        <th>Will</th>
                        <th>Future Continuous</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>(+)</strong></td>
                        <td>am/is/are + going to + Verbo<br><small>She is going to cook.</small></td>
                        <td>Will + Verbo base<br><small>She will cook.</small></td>
                        <td>Will be + Verbo-ing<br><small>She will be cooking.</small></td>
                    </tr>
                    <tr>
                        <td><strong>(-)</strong></td>
                        <td>am/is/are + not + going to<br><small>She isn't going to cook.</small></td>
                        <td>Won't + Verbo base<br><small>She won't cook.</small></td>
                        <td>Won't be + Verbo-ing<br><small>She won't be cooking.</small></td>
                    </tr>
                    <tr>
                        <td><strong>(?)</strong></td>
                        <td>Am/Is/Are + sujeto + going to?<br><small>Is she going to cook?<br>Yes, she is. / No, she isn't.</small></td>
                        <td>Will + sujeto + Verbo?<br><small>Will she cook?<br>Yes, she will. / No, she won't.</small></td>
                        <td>Will + sujeto + be + Verbo-ing?<br><small>Will she be cooking?<br>Yes, she will. / No, she won't.</small></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    roleplay: {
        title: '🎭 Juego de Roles: "La Agente de Viajes"',
        tutor: [
            'What are your plans for this vacation?',
            'What will you do if it rains?',
            'What will you be doing at 10 AM next Sunday?'
        ],
        student: [
            'I am going to visit my grandma.',
            'I will play board games indoors.',
            'I will be cleaning the windows.'
        ]
    },
    exercises: [
        {
            id: 'e3_1',
            title: '🎯 Elige la correcta',
            question: 'I have a plane ticket. I ______ (will / am going to) fly to Paris.',
            type: 'multiple',
            options: ['will', 'am going to'],
            answer: 'am going to',
            hint: '¡Tienes un plan fijo (el boleto)!'
        },
        {
            id: 'e3_2',
            title: '🤝 Haz una promesa',
            question: 'Don\'t worry! I ______ (help) you tidy your room.',
            type: 'fill',
            answer: 'will help',
            hint: 'Promesa espontánea = will'
        },
        {
            id: 'e3_3',
            title: '🕐 Future Continuous',
            question: 'At 8 PM tonight, I ______ (watch) a movie.',
            type: 'fill',
            answer: 'will be watching',
            hint: 'Acción en progreso en el futuro'
        },
        {
            id: 'e3_4',
            title: '✍️ Crea tus planes',
            question: 'Escribe 3 planes usando "Going to" y 3 promesas usando "Will" para tus vacaciones.',
            type: 'creative',
            answer: 'Respuesta creativa - revisar con el tutor',
            hint: 'Ej: "I\'m going to visit my cousin" / "I\'ll call you every day"'
        },
        {
            id: 'e3_5',
            title: '🔧 Corrige el error',
            question: 'Corrige: "She will to cook dinner tomorrow." →',
            type: 'fill',
            answer: 'She will cook dinner tomorrow.',
            hint: 'Después de "will" va el verbo en base, sin "to"'
        }
    ],
    checkin: {
        emojis: ['🚀', '✈️', '🛑', '🤯', '😎'],
        labels: ['¡Listo para planear!', 'Bien, pero confundo Will/Going to', 'Necesito más práctica', 'Me confunde el Future Continuous', '¡Me siento genial!']
    }
},

// ============================================
// SEMANA 4: EL GRAN DESAFÍO (INTEGRACIÓN)
// ============================================
{
    id: 3,
    title: 'Semana 4: El Gran Desafío',
    subtitle: 'Integración de todos los tiempos verbales',
    concept: `
        <h3>💡 Concepto Clave</h3>
        <p>La <strong>clave</strong> para contar historias es saber <strong>ubicarte en el tiempo</strong>:</p>
        <ul>
            <li>🕐 Usa <strong>Presente</strong> para hechos generales y rutinas.</li>
            <li>📅 Usa <strong>Pasado</strong> para narrar lo que ya pasó.</li>
            <li>🔮 Usa <strong>Futuro</strong> para hacer predicciones o promesas dentro de la historia.</li>
        </ul>
        <p><strong>Ejemplo integrado:</strong><br>
        "Every day I sweep the floor. Yesterday I mopped it, and tomorrow I am going to tidy my room. Also, I will help you if you are busy."</p>
        <p>🎯 <strong>Secreto:</strong> Piensa en un <strong>viaje en el tiempo</strong>: pasado = ayer, presente = hoy, futuro = mañana.</p>
    `,
    structures: `
        <h3>📐 Matriz de Estructuras (Repaso Rápido)</h3>
        <div style="overflow-x:auto;">
            <table class="verb-table">
                <thead>
                    <tr>
                        <th>Tiempo</th>
                        <th>Afirmativo (+)</th>
                        <th>Negativo (-)</th>
                        <th>Interrogativo (?)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Present Simple</strong></td>
                        <td>She cooks.</td>
                        <td>She doesn't cook.</td>
                        <td>Does she cook?</td>
                    </tr>
                    <tr>
                        <td><strong>Present Continuous</strong></td>
                        <td>She is cooking.</td>
                        <td>She isn't cooking.</td>
                        <td>Is she cooking?</td>
                    </tr>
                    <tr>
                        <td><strong>Past Simple</strong></td>
                        <td>She cooked.</td>
                        <td>She didn't cook.</td>
                        <td>Did she cook?</td>
                    </tr>
                    <tr>
                        <td><strong>Past Continuous</strong></td>
                        <td>She was cooking.</td>
                        <td>She wasn't cooking.</td>
                        <td>Was she cooking?</td>
                    </tr>
                    <tr>
                        <td><strong>Going to</strong></td>
                        <td>She is going to cook.</td>
                        <td>She isn't going to cook.</td>
                        <td>Is she going to cook?</td>
                    </tr>
                    <tr>
                        <td><strong>Will</strong></td>
                        <td>She will cook.</td>
                        <td>She won't cook.</td>
                        <td>Will she cook?</td>
                    </tr>
                    <tr>
                        <td><strong>Future Continuous</strong></td>
                        <td>She will be cooking.</td>
                        <td>She won't be cooking.</td>
                        <td>Will she be cooking?</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    roleplay: {
        title: '🎭 Juego de Roles Final: "El Juez del Tiempo"',
        tutor: [
            'Tell me a story about a normal day, but also talk about yesterday and tomorrow.',
            'What did you do yesterday at 6 PM?',
            'What will you do if you finish all your chores early?'
        ],
        student: [
            'Every day I sweep the floor. Yesterday I mopped it, and tomorrow I am going to tidy my room.',
            'I was cooking dinner.',
            'I will watch a movie or read a book.'
        ]
    },
    exercises: [
        {
            id: 'e4_1',
            title: '📝 Completa la historia (integración)',
            question: 'Every morning, my mom ______ (cook). Yesterday she ______ (cook) pizza, but today she ______ (cook) pasta because we love it. Tomorrow, we ______ (eat) at a restaurant.',
            type: 'fill',
            answer: 'cooks, cooked, is cooking, are going to eat',
            hint: 'Presente (rutina) → Pasado (ayer) → Presente (hoy) → Futuro (mañana)'
        },
        {
            id: 'e4_2',
            title: '🔍 Encuentra el error',
            question: 'Corrige: "He is sweeping every day. He sweeps now. He swept tomorrow." →',
            type: 'fill',
            answer: 'He sweeps every day. He is sweeping now. He will sweep tomorrow.',
            hint: 'Rutina = Present Simple, Ahora = Present Continuous, Futuro = will'
        },
        {
            id: 'e4_3',
            title: '🎯 Elige la correcta',
            question: 'While I (washed / wash) the car, my dad (will arrive / arrived).',
            type: 'multiple',
            options: ['washed, arrived', 'was washing, arrived', 'wash, will arrive'],
            answer: 'was washing, arrived',
            hint: 'Acción larga en pasado (was washing) + acción corta (arrived)'
        },
        {
            id: 'e4_4',
            title: '🌍 Traduce al inglés',
            question: 'Normalmente barro, pero ayer trapeé y mañana voy a limpiar las ventanas.',
            type: 'fill',
            answer: 'I usually sweep, but yesterday I mopped and tomorrow I am going to clean the windows.',
            hint: 'Usa Present Simple, Past Simple y Going to'
        },
        {
            id: 'e4_5',
            title: '🎨 Crea tu cómic',
            question: 'Dibuja 3 viñetas (Pasado, Presente, Futuro) con un oficio del hogar y escribe 1 oración en cada tiempo.',
            type: 'creative',
            answer: 'Respuesta creativa - revisar con el tutor',
            hint: 'Ej: Pasado: "I washed the dishes." Presente: "I am sweeping." Futuro: "I will tidy my room."'
        }
    ],
    checkin: {
        emojis: ['🏅', '🥈', '🥉', '🌟', '🎉'],
        labels: ['¡Soy bilingüe en oficios!', 'Me defiendo muy bien', 'Aún practico', '¡Me encanta el inglés!', '¡Lo logré!']
    }
}
    // (Para ahorrar espacio, se incluyen en el código final completo)
];

// Exportar para uso en app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VERB_TABLE, WEEKS };
}