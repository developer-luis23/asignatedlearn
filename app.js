// ============================================
// APP.JS - Lógica completa de la aplicación
// ============================================

// ===== ESTADO GLOBAL =====
let state = {
    currentWeek: 0,
    progress: {},
    points: 0,
    studentName: 'Estudiante',
    emotions: [],
    exerciseResults: {}
};

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderWeek(0);
    setupEventListeners();
    updateProgress();
});

// ===== MANEJO DE ESTADO (LocalStorage) =====
function loadState() {
    const saved = localStorage.getItem('masterchef_english');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        } catch (e) {
            console.warn('Error loading state:', e);
        }
    }
    
    // Preguntar nombre si no existe
    if (!state.studentName || state.studentName === 'Estudiante') {
        const name = prompt('👋 ¡Hola! ¿Cómo te llamas? (Escribe tu nombre para comenzar)');
        if (name) {
            state.studentName = name.trim();
            saveState();
        }
    }
    document.getElementById('studentName').textContent = state.studentName;
}

function saveState() {
    try {
        localStorage.setItem('masterchef_english', JSON.stringify(state));
    } catch (e) {
        console.warn('Error saving state:', e);
    }
}

// ===== RENDERIZADO =====
function renderWeek(weekIndex) {
    const week = WEEKS[weekIndex];
    if (!week) return;

    const container = document.getElementById('appContent');
    state.currentWeek = weekIndex;

    // Marcar botón activo
    document.querySelectorAll('.week-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === weekIndex);
    });

    let html = `
        <div class="week-section">
            <h2>${week.title}</h2>
            <p class="text-muted">${week.subtitle}</p>
            
            <!-- Tabla de Verbos (solo en semana 1) -->
            ${weekIndex === 0 ? renderVerbTable() : ''}
            
            <!-- Concepto -->
            <div class="concept-card">
                ${week.concept}
            </div>
            
            <!-- Estructuras -->
            <div class="concept-card">
                ${week.structures}
            </div>
            
            <!-- Role Play -->
            <div class="roleplay-container">
                <h3>${week.roleplay.title}</h3>
                <div class="roleplay-bubble tutor">
                    <div class="speaker">👨‍🏫 Tutor:</div>
                    <p>${week.roleplay.tutor[0]}</p>
                </div>
                <div class="roleplay-bubble student">
                    <div class="speaker">👩‍🎓 Alumna:</div>
                    <p>${week.roleplay.student[0]}</p>
                </div>
                <button class="btn-secondary" onclick="showNextRolePlay(${weekIndex})">
                    🔄 Siguiente diálogo
                </button>
                <button class="btn-primary" onclick="startRolePlayInversion(${weekIndex})">
                    🔄 Invertir roles
                </button>
            </div>
            
            <!-- Ejercicios -->
            <h3>🧩 Ejercicios Prácticos</h3>
            <div class="exercise-grid">
    `;

    week.exercises.forEach((ex, idx) => {
        const completed = state.exerciseResults[ex.id]?.completed || false;
        html += `
            <div class="exercise-card ${completed ? 'completed' : ''}" 
                 onclick="openExercise(${weekIndex}, ${idx})">
                <span class="badge">${completed ? '✅ Hecho' : '📝 Ej.' + (idx+1)}</span>
                <h4>${ex.title}</h4>
                <p style="font-size:0.85rem; color:#666;">${ex.question.substring(0, 60)}${ex.question.length > 60 ? '...' : ''}</p>
                ${completed ? '<span style="color:#4ECDC4;">✓ Completado</span>' : ''}
            </div>
        `;
    });

    html += `
            </div>
            
            <!-- Check-in Emocional -->
            <div class="checkin-container">
                <h3>🏆 Check-in Emocional</h3>
                <p>¿Cómo te sentiste con este tema?</p>
                <div class="emojis">
                    ${week.checkin.emojis.map((emoji, i) => `
                        <span onclick="saveEmotion(${weekIndex}, '${emoji}', '${week.checkin.labels[i]}')" 
                              title="${week.checkin.labels[i]}">
                            ${emoji}
                        </span>
                    `).join('')}
                </div>
                <div id="emotionDisplay_${weekIndex}" style="margin-top:8px; font-size:0.9rem;">
                    ${state.emotions[weekIndex] ? `Último sentimiento: ${state.emotions[weekIndex].emoji} ${state.emotions[weekIndex].label}` : 'Toca un emoji para registrar tu emoción'}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
    updateProgress();
}

// ===== TABLA DE VERBOS =====
function renderVerbTable() {
    let html = `
        <div class="verb-table-container">
            <h3 style="padding: 12px 16px 0;">📋 Tabla Maestra de Verbos</h3>
            <table class="verb-table">
                <thead>
                    <tr>
                        <th>Base</th>
                        <th>Past</th>
                        <th>Participle</th>
                        <th>-ING</th>
                        <th>Español</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    VERB_TABLE.forEach(v => {
        html += `
            <tr>
                <td><strong>${v.base}</strong></td>
                <td>${v.past}</td>
                <td>${v.participle}</td>
                <td>${v.ing}</td>
                <td>${v.spanish}</td>
            </tr>
        `;
    });
    
    html += `</tbody></table></div>`;
    return html;
}

// ===== EJERCICIOS =====
function openExercise(weekIndex, exerciseIndex) {
    const week = WEEKS[weekIndex];
    const ex = week.exercises[exerciseIndex];
    const modal = document.getElementById('exerciseModal');
    const content = document.getElementById('exerciseContent');
    const title = document.getElementById('exerciseTitle');

    title.textContent = `🧩 ${ex.title}`;
    
    let html = `<p><strong>${ex.question}</strong></p>`;
    
    if (ex.type === 'multiple') {
        html += `<div style="margin:16px 0;">`;
        ex.options.forEach(opt => {
            html += `
                <label style="display:block; padding:8px; background:#f8f9fa; margin:4px 0; border-radius:8px; cursor:pointer;">
                    <input type="radio" name="exercise_answer" value="${opt}"> ${opt}
                </label>
            `;
        });
        html += `</div>`;
    } else if (ex.type === 'fill') {
        html += `
            <input type="text" id="exerciseInput" placeholder="Escribe tu respuesta..." 
                   style="width:100%; padding:12px; border:2px solid #e0e0e0; border-radius:12px; font-size:1rem; margin:12px 0;">
            ${ex.hint ? `<p style="font-size:0.85rem; color:#666;">💡 Pista: ${ex.hint}</p>` : ''}
        `;
    } else {
        html += `
            <textarea id="exerciseInput" placeholder="Escribe o dibuja tu respuesta creativa aquí..." 
                      style="width:100%; padding:12px; border:2px solid #e0e0e0; border-radius:12px; font-size:1rem; margin:12px 0; min-height:120px;"></textarea>
            <p style="font-size:0.85rem; color:#666;">💡 ${ex.hint || 'Sé creativa con tu respuesta'}</p>
        `;
    }

    content.innerHTML = html;
    modal.classList.remove('hidden');

    // Guardar referencia para verificar
    window._currentExercise = { weekIndex, exerciseIndex, ex };
}

// Verificar ejercicio
document.getElementById('checkExercise').addEventListener('click', function() {
    const { weekIndex, exerciseIndex, ex } = window._currentExercise;
    const input = document.getElementById('exerciseInput');
    let userAnswer = '';
    let isCorrect = false;

    if (ex.type === 'multiple') {
        const selected = document.querySelector('input[name="exercise_answer"]:checked');
        userAnswer = selected ? selected.value : '';
        isCorrect = userAnswer === ex.answer;
    } else {
        userAnswer = input ? input.value.trim() : '';
        // Comparación flexible (ignorar mayúsculas, espacios)
        const normalize = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();
        isCorrect = normalize(userAnswer) === normalize(ex.answer);
    }

    if (!userAnswer) {
        alert('Por favor, responde primero la pregunta.');
        return;
    }

    if (isCorrect) {
        alert('✅ ¡Correcto! +10 puntos');
        state.points += 10;
        state.exerciseResults[ex.id] = { completed: true, answer: userAnswer, correct: true };
    } else {
        alert(`❌ Casi. La respuesta correcta es: "${ex.answer}"`);
        state.exerciseResults[ex.id] = { completed: false, answer: userAnswer, correct: false };
    }

    saveState();
    updateProgress();
    document.getElementById('exerciseModal').classList.add('hidden');
    renderWeek(weekIndex);
});

document.getElementById('closeExercise').addEventListener('click', function() {
    document.getElementById('exerciseModal').classList.add('hidden');
});

// ===== ROLE PLAY =====
let roleplayIndex = 0;

function showNextRolePlay(weekIndex) {
    const week = WEEKS[weekIndex];
    roleplayIndex = (roleplayIndex + 1) % week.roleplay.tutor.length;
    
    const container = document.querySelector('.roleplay-container');
    const bubbles = container.querySelectorAll('.roleplay-bubble');
    
    if (bubbles.length >= 2) {
        bubbles[0].querySelector('p').textContent = week.roleplay.tutor[roleplayIndex];
        bubbles[1].querySelector('p').textContent = week.roleplay.student[roleplayIndex];
    }
}

function startRolePlayInversion(weekIndex) {
    const week = WEEKS[weekIndex];
    const container = document.querySelector('.roleplay-container');
    
    // Generar diálogo aleatorio invertido
    const tIdx = Math.floor(Math.random() * week.roleplay.tutor.length);
    const sIdx = Math.floor(Math.random() * week.roleplay.student.length);
    
    const html = `
        <div style="margin-top:16px; padding:16px; background:#f8f9fa; border-radius:12px;">
            <h4>🔄 Inversión de Roles - ¡Ahora tú preguntas!</h4>
            <div class="roleplay-bubble student">
                <div class="speaker">👩‍🎓 Alumna (tú):</div>
                <p>${week.roleplay.tutor[tIdx]} (pregunta al tutor)</p>
            </div>
            <div class="roleplay-bubble tutor">
                <div class="speaker">👨‍🏫 Tutor (responde):</div>
                <p>${week.roleplay.student[sIdx]} (responde)</p>
            </div>
            <p style="font-size:0.85rem; color:#666; margin-top:8px;">💡 ¡Bien! Ahora evalúa si el tutor respondió correctamente usando el tiempo verbal adecuado.</p>
        </div>
    `;
    
    // Insertar después de los botones
    const existing = container.querySelector('.roleplay-inversion');
    if (existing) existing.remove();
    
    const div = document.createElement('div');
    div.className = 'roleplay-inversion';
    div.innerHTML = html;
    container.appendChild(div);
}

// ===== EMOCIONES =====
function saveEmotion(weekIndex, emoji, label) {
    state.emotions[weekIndex] = { emoji, label, timestamp: new Date().toISOString() };
    saveState();
    
    const display = document.getElementById(`emotionDisplay_${weekIndex}`);
    if (display) {
        display.textContent = `❤️ Sentimiento registrado: ${emoji} ${label}`;
        display.style.color = '#4ECDC4';
        display.style.fontWeight = 'bold';
    }
    
    // Efecto de feedback
    alert(`¡Gracias por compartir! ${emoji} ${label}`);
}

// ===== PROGRESO =====
function updateProgress() {
    const totalExercises = WEEKS.reduce((sum, w) => sum + w.exercises.length, 0);
    const completed = Object.values(state.exerciseResults).filter(r => r.completed).length;
    const percentage = totalExercises > 0 ? Math.round((completed / totalExercises) * 100) : 0;
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('totalPoints').textContent = state.points;
}

// ===== EXPORTAR RESULTADOS =====
document.getElementById('exportBtn').addEventListener('click', function() {
    let report = `📊 REPORTE DE AVANCE - MASTER CHEF DEL INGLÉS\n`;
    report += `==========================================\n`;
    report += `👩‍🎓 Estudiante: ${state.studentName}\n`;
    report += `📅 Fecha: ${new Date().toLocaleDateString()}\n`;
    report += `⭐ Puntos totales: ${state.points}\n\n`;
    
    report += `📈 PROGRESO POR SEMANA:\n`;
    WEEKS.forEach((week, i) => {
        const total = week.exercises.length;
        const done = week.exercises.filter(e => state.exerciseResults[e.id]?.completed).length;
        const emotion = state.emotions[i] ? `${state.emotions[i].emoji} ${state.emotions[i].label}` : 'No registrado';
        report += `\n📅 ${week.title}\n`;
        report += `   ✅ Ejercicios: ${done}/${total}\n`;
        report += `   🎭 Emoción: ${emotion}\n`;
    });
    
    report += `\n📝 DETALLE DE EJERCICIOS:\n`;
    WEEKS.forEach((week) => {
        week.exercises.forEach(ex => {
            const result = state.exerciseResults[ex.id];
            if (result) {
                report += `\n${ex.title}:\n`;
                report += `   Respuesta: ${result.answer || 'No respondida'}\n`;
                report += `   ${result.correct ? '✅ Correcto' : '❌ Incorrecto'}\n`;
            }
        });
    });
    
    // Descargar como archivo de texto
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `reporte_ingles_${state.studentName}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    
    alert('📊 ¡Reporte exportado exitosamente!');
});

// ===== NAVEGACIÓN =====
document.querySelectorAll('.week-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        const weekIndex = parseInt(this.dataset.week);
        renderWeek(weekIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ===== CONFIGURACIÓN DE EVENTOS GENERALES =====
function setupEventListeners() {
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });
}

// Inicializar
console.log('🍳 Master Chef del Inglés - Guía de Vacaciones');
console.log('📚 Cargado con éxito!');