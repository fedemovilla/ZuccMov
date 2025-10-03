// Simple Exercise Generator Application - Fixed ExRx.net URLs
class SimpleExerciseGenerator {
    constructor() {
        this.selectedMuscles = new Set();
        this.userInfo = {
            age: '',
            experience: '',
            goal: '',
            time: ''
        

    
fetch('injury_adaptations.json')
  .then(response => response.json())
  .then(data => {
    this.injuryAdaptations = data;
  });
};
        this.location = null;
        this.currentStep = 1;
        
        // Exercise database with CORRECTED ExRx.net URLs
        this.exercises = {
            chest: {
                gym: [
                    {
                        name: "Press de Banca con Barra",
                        description: "Ejercicio fundamental para desarrollo del pecho. Acuéstate en el banco, agarra la barra al ancho de hombros, baja controladamente hasta el pecho y empuja hacia arriba.",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra y banco",
                        muscles: "Pectoral Mayor, Tríceps",
                        link: "https://exrx.net/WeightExercises/PectoralSternal/BBBenchPress",
                        difficulty: "intermedio",
                        beginner_tip: "Comienza con barra vacía para dominar la técnica",
                        advanced_tip: "Puedes añadir peso progresivamente según tu fuerza"
                    },
                    {
                        name: "Press Inclinado con Mancuernas",
                        description: "Excelente para el pecho superior. En banco inclinado 30-45°, empuja las mancuernas hacia arriba y ligeramente hacia adentro.",
                        sets: "3 series de 10-15 repeticiones",
                        equipment: "Mancuernas y banco inclinado",
                        muscles: "Pectoral Superior, Deltoides",
                        link: "https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Usa mancuernas ligeras al principio",
                        advanced_tip: "Controla bien el descenso para mayor activación"
                    },
                    {
                        name: "Aperturas con Mancuernas",
                        description: "Ejercicio de aislamiento para el pecho. Con ligera flexión en codos, baja las mancuernas en arco hasta sentir estiramiento.",
                        sets: "3 series de 12-15 repeticiones",
                        equipment: "Mancuernas y banco",
                        muscles: "Pectoral Mayor",
                        link: "https://exrx.net/WeightExercises/PectoralSternal/DBFly",
                        difficulty: "intermedio",
                        beginner_tip: "Peso ligero y movimiento controlado",
                        advanced_tip: "Enfócate en la contracción al subir"
                    }
                ],
                home: [
                    {
                        name: "Flexiones de Brazos",
                        description: "Ejercicio clásico de peso corporal. En posición de plancha, baja el pecho hasta casi tocar el suelo manteniendo el cuerpo recto.",
                        sets: "3 series de 8-20 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Pectoral Mayor, Tríceps, Core",
                        link: "https://exrx.net/WeightExercises/PectoralSternal/BWPushup",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Comienza de rodillas si es muy difícil",
                        advanced_tip: "Prueba variaciones como flexiones diamante",
                        progressions: ["Flexiones de pared", "Flexiones inclinadas", "Flexiones de rodillas", "Flexiones completas"]
                    },
                    {
                        name: "Flexiones Diamante",
                        description: "Flexiones con manos formando diamante. Mantén codos cerca del cuerpo, baja hasta tocar las manos con el pecho.",
                        sets: "3 series de 5-12 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Tríceps, Pectoral Centro",
                        link: "https://exrx.net/WeightExercises/Triceps/BWTrianglePushup",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina flexiones regulares primero",
                        advanced_tip: "Variación excelente para tríceps"
                    }
                ]
            },
            legs: {
                gym: [
                    {
                        name: "Sentadilla con Barra",
                        description: "El rey de los ejercicios de piernas. Con la barra en la espalda alta, desciende como sentándote hasta que muslos estén paralelos.",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Barra y rack",
                        muscles: "Cuádriceps, Glúteos, Isquiotibiales",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BBSquat",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Aprende la técnica con barra vacía o goblet squat",
                        advanced_tip: "Ejercicio fundamental para fuerza y masa muscular"
                    },
                    {
                        name: "Peso Muerto Rumano",
                        description: "Patrón de bisagra de cadera. Empuja caderas hacia atrás, baja la barra manteniendo piernas casi rectas hasta sentir estiramiento.",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra o mancuernas",
                        muscles: "Isquiotibiales, Glúteos, Espalda Baja",
                        link: "https://exrx.net/WeightExercises/Hamstrings/BBRomanianDeadlift",
                        difficulty: "intermedio",
                        beginner_tip: "Practica el movimiento sin peso primero",
                        advanced_tip: "Excelente para cadena posterior"
                    },
                    {
                        name: "Prensa de Piernas",
                        description: "Ejercicio seguro para piernas. Pies en plataforma al ancho de hombros, baja hasta 90° y empuja hacia arriba.",
                        sets: "3 series de 10-15 repeticiones",
                        equipment: "Máquina prensa",
                        muscles: "Cuádriceps, Glúteos",
                        link: "https://exrx.net/WeightExercises/Quadriceps/LVSeatedLegPress",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Ajusta bien el asiento y comienza con peso ligero",
                        advanced_tip: "Buena alternativa a sentadillas para volumen"
                    }
                ],
                home: [
                    {
                        name: "Sentadilla Corporal",
                        description: "Movimiento fundamental. Pies al ancho de hombros, baja como sentándote en una silla invisible, mantén pecho alto.",
                        sets: "3 series de 12-25 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Cuádriceps, Glúteos, Pantorrillas",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BWSquat",
                        difficulty: "principiante",
                        beginner_tip: "Usa una silla real como referencia al principio",
                        advanced_tip: "Puedes añadir saltos o hacer más repeticiones",
                        progressions: ["Sentadilla asistida", "Sentadilla parcial", "Sentadilla completa", "Sentadilla con salto"]
                    },
                    {
                        name: "Estocadas Alternadas",
                        description: "Da paso largo adelante, baja hasta ambas rodillas en 90°. Rodilla trasera casi toca suelo. Regresa y alterna.",
                        sets: "3 series de 10-15 por pierna",
                        equipment: "Peso corporal",
                        muscles: "Cuádriceps, Glúteos, Estabilizadores",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BWLunge",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Usa pared para equilibrio si es necesario",
                        advanced_tip: "Excelente para equilibrio y fuerza unilateral"
                    }
                ]
            },
            back: {
                gym: [
                    {
                        name: "Dominadas",
                        description: "Ejercicio supremo de espalda. Cuelga con brazos extendidos, tira hasta que mentón pase la barra. Baja controladamente.",
                        sets: "3 series de 5-12 repeticiones",
                        equipment: "Barra dominadas",
                        muscles: "Dorsal Ancho, Bíceps, Romboides",
                        link: "https://exrx.net/WeightExercises/LatissimusDorsi/BWPullup",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Usa banda elástica o máquina asistida",
                        advanced_tip: "Ejercicio rey para desarrollo de espalda"
                    },
                    {
                        name: "Remo con Barra",
                        description: "Inclinado 45°, tira barra hacia abdomen bajo. Aprieta omóplatos al final. Espalda recta siempre.",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Barra olímpica",
                        muscles: "Dorsal, Romboides, Trapecio Medio",
                        link: "https://exrx.net/WeightExercises/BackGeneral/BBBentOverRow",
                        difficulty: "intermedio",
                        beginner_tip: "Comienza con peso ligero para dominar técnica",
                        advanced_tip: "Fundamental para espalda fuerte y postura"
                    },
                    {
                        name: "Jalones al Pecho",
                        description: "Sentado, tira barra hacia pecho superior. Codos hacia abajo y atrás. Nunca detrás del cuello.",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Máquina jalones",
                        muscles: "Dorsal Ancho, Bíceps",
                        link: "https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Buena preparación para dominadas futuras",
                        advanced_tip: "Enfócate en activar los dorsales, no solo los brazos"
                    }
                ],
                home: [
                    {
                        name: "Remo Invertido",
                        description: "Debajo de mesa resistente, agarra borde, tira cuerpo hacia arriba manteniendo línea recta. Aprieta omóplatos.",
                        sets: "3 series de 8-15 repeticiones",
                        equipment: "Mesa resistente",
                        muscles: "Dorsal, Romboides, Bíceps",
                        link: "https://exrx.net/WeightExercises/BackGeneral/BWSupineRow",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Asegúrate de que la mesa sea muy resistente",
                        advanced_tip: "Excelente alternativa casera a remos",
                        progressions: ["Remo con rodillas flexionadas", "Remo piernas extendidas", "Remo pies elevados"]
                    },
                    {
                        name: "Superman",
                        description: "Boca abajo, levanta brazos, pecho y piernas simultáneamente. Mantén 1-2 segundos, baja controladamente.",
                        sets: "3 series de 12-20 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Erector Espinal, Glúteos",
                        link: "https://exrx.net/WeightExercises/ErectorSpinae/BWSuperman",
                        difficulty: "principiante",
                        beginner_tip: "Comienza con movimientos pequeños",
                        advanced_tip: "Excelente para fortalecimiento de espalda baja"
                    }
                ]
            },
            arms: {
                gym: [
                    {
                        name: "Curl de Bíceps con Barra",
                        description: "De pie, flexiona codos llevando barra hacia hombros. Codos fijos a los lados, no balancees el torso.",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra recta o W",
                        muscles: "Bíceps Braquial",
                        link: "https://exrx.net/WeightExercises/Biceps/BBCurl",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Peso moderado y movimiento controlado",
                        advanced_tip: "Ejercicio básico efectivo para bíceps"
                    },
                    {
                        name: "Press Francés",
                        description: "Acostado, baja barra hacia frente flexionando solo codos. Extiende brazos regresando a posición inicial.",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra W, banco",
                        muscles: "Tríceps Braquial",
                        link: "https://exrx.net/WeightExercises/Triceps/BBLyingTriExt",
                        difficulty: "intermedio",
                        beginner_tip: "Usa barra W para menos estrés en muñecas",
                        advanced_tip: "Excelente para desarrollo de tríceps"
                    }
                ],
                home: [
                    {
                        name: "Flexiones Diamante",
                        description: "Manos formando diamante, codos cerca del cuerpo, baja hasta tocar manos con pecho.",
                        sets: "3 series de 5-12 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Tríceps, Pectoral",
                        link: "https://exrx.net/WeightExercises/Triceps/BWTrianglePushup",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Progresa desde flexiones regulares",
                        advanced_tip: "Excelente para tríceps sin equipo"
                    },
                    {
                        name: "Fondos en Silla",
                        description: "Espalda a silla, manos en borde, baja cuerpo flexionando codos hasta 90°. Empuja hacia arriba.",
                        sets: "3 series de 8-15 repeticiones",
                        equipment: "Silla resistente",
                        muscles: "Tríceps, Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/Triceps/BWBenchDip",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Silla muy estable, flexiona piernas para facilitar",
                        advanced_tip: "Extiende piernas para mayor dificultad"
                    }
                ]
            },
            shoulders: {
                gym: [
                    {
                        name: "Press Militar",
                        description: "De pie, empuja barra desde pecho hasta sobre cabeza en línea recta. Core muy activado.",
                        sets: "3 series de 6-10 repeticiones",
                        equipment: "Barra olímpica",
                        muscles: "Deltoides, Tríceps, Core",
                        link: "https://exrx.net/WeightExercises/DeltoidAnterior/BBMilitaryPress",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina técnica con peso ligero primero",
                        advanced_tip: "Ejercicio completo para hombros y core"
                    },
                    {
                        name: "Elevaciones Laterales",
                        description: "Levanta mancuernas hacia lados hasta altura de hombros. Codos ligeramente flexionados.",
                        sets: "3 series de 12-15 repeticiones",
                        equipment: "Mancuernas ligeras",
                        muscles: "Deltoides Lateral",
                        link: "https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise",
                        difficulty: "principiante",
                        beginner_tip: "Peso ligero, no levantes más alto que hombros",
                        advanced_tip: "Excelente para anchura de hombros"
                    }
                ],
                home: [
                    {
                        name: "Flexiones Pike",
                        description: "Posición V invertida, baja cabeza hacia suelo flexionando brazos. Empuja hacia arriba.",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Deltoides Anterior, Tríceps",
                        link: "https://exrx.net/WeightExercises/DeltoidAnterior/BWPikePushup",
                        difficulty: "intermedio",
                        beginner_tip: "Comienza con rango parcial",
                        advanced_tip: "Progresión hacia flexiones verticales",
                        progressions: ["Pike pies suelo", "Pike pies elevados", "Flexiones verticales"]
                    }
                ]
            },
            abs: {
                gym: [
                    {
                        name: "Plancha con Peso",
                        description: "Posición plancha con peso en espalda. Mantén línea recta perfecta, core contraído.",
                        sets: "3 series de 20-45 segundos",
                        equipment: "Disco de peso",
                        muscles: "Core completo",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina plancha sin peso primero",
                        advanced_tip: "Añade peso gradualmente"
                    },
                    {
                        name: "Abdominales en Polea",
                        description: "Arrodillado, flexiona tronco hacia abajo contrayendo abdomen. Movimiento desde core, no brazos.",
                        sets: "3 series de 12-20 repeticiones",
                        equipment: "Polea alta con cuerda",
                        muscles: "Recto Abdominal",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/CBKneelingCrunch",
                        difficulty: "intermedio",
                        beginner_tip: "Peso ligero, siente trabajo en abdomen",
                        advanced_tip: "Enfócate en la contracción, no en el peso"
                    }
                ],
                home: [
                    {
                        name: "Plancha Estándar",
                        description: "Antebrazos en suelo, cuerpo recto de cabeza a talones. Core contraído, glúteos apretados.",
                        sets: "3 series de 20-60 segundos",
                        equipment: "Peso corporal",
                        muscles: "Core completo",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Progresa tiempo gradualmente",
                        advanced_tip: "Ejercicio fundamental para core",
                        progressions: ["Plancha rodillas", "Plancha inclinada", "Plancha estándar", "Plancha con elevaciones"]
                    },
                    {
                        name: "Crunch Abdominal",
                        description: "Acostado, eleva torso flexionando columna. Solo hasta despegar omóplatos. Manos en pecho.",
                        sets: "3 series de 15-25 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Recto Abdominal",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/Crunch",
                        difficulty: "principiante",
                        beginner_tip: "No tires del cuello, movimiento controlado",
                        advanced_tip: "Ejercicio básico efectivo para abdomen"
                    },
                    {
                        name: "Bicicleta Abdominal",
                        description: "Acostado, lleva codo a rodilla opuesta alternadamente. Como pedalear en el aire.",
                        sets: "3 series de 20-30 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Oblicuos, Recto Abdominal",
                        link: "https://exrx.net/WeightExercises/Obliques/BWTwistingCrunch",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Ritmo controlado, no tires cuello",
                        advanced_tip: "Excelente para oblicuos y coordinación"
                    }
                ]
            },
            cardio: {
                gym: [
                    {
                        name: "Cinta de Correr",
                        description: "Alterna períodos moderados con intensos. Ej: 2 min caminar rápido, 1 min trotar.",
                        sets: "20-30 minutos",
                        equipment: "Cinta de correr",
                        muscles: "Sistema cardiovascular",
                        link: "https://exrx.net/Aerobic/Exercises/TreadmillWalkSP",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Comienza caminando, usa clip seguridad",
                        advanced_tip: "Varía velocidad e inclinación"
                    },
                    {
                        name: "Bicicleta Estática",
                        description: "Pedaleo constante con variaciones de intensidad. Asiento bien ajustado.",
                        sets: "20-30 minutos",
                        equipment: "Bicicleta estática",
                        muscles: "Sistema cardiovascular, Piernas",
                        link: "https://exrx.net/Aerobic/Exercises/Cycling",
                        difficulty: "principiante",
                        beginner_tip: "Asiento altura correcta, resistencia baja",
                        advanced_tip: "Ejercicio de bajo impacto excelente"
                    }
                ],
                home: [
                    {
                        name: "Jumping Jacks",
                        description: "Salta separando piernas y elevando brazos sobre cabeza. Regresa saltando a posición inicial.",
                        sets: "3 series de 30-60 segundos",
                        equipment: "Peso corporal",
                        muscles: "Sistema cardiovascular",
                        link: "https://exrx.net/WeightExercises/Cardio/BWJumpingJack",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Aterrizaje suave, superficie apropiada",
                        advanced_tip: "Ejercicio cardiovascular clásico y efectivo"
                    },
                    {
                        name: "Mountain Climbers",
                        description: "Posición plancha, alterna llevando rodillas al pecho rápidamente. Como correr en plancha.",
                        sets: "3 series de 20-30 segundos",
                        equipment: "Peso corporal",
                        muscles: "Cardio, Core, Hombros",
                        link: "https://exrx.net/WeightExercises/HipFlexors/BWMountainClimber",
                        difficulty: "intermedio",
                        beginner_tip: "Mantén posición plancha, domina plancha primero",
                        advanced_tip: "Excelente combinación cardio-fuerza"
                    },
                    {
                        name: "Caminata Vigorosa",
                        description: "Caminar a paso firme donde puedas hablar pero sientes que trabajas. Postura erguida.",
                        sets: "20-45 minutos",
                        equipment: "Ninguno",
                        muscles: "Sistema cardiovascular, Piernas",
                        link: "https://exrx.net/Aerobic/Exercises/Walking",
                        difficulty: "principiante",
                        beginner_tip: "Calzado apropiado, ruta segura",
                        advanced_tip: "Base perfecta para cualquier nivel de fitness"
                    }
                ]
            }
        };

        // Rest of the code remains the same...
        this.timeMapping = {
            "15-30": { exercisesPerMuscle: 1, totalRange: "4-6 ejercicios" },
            "30-45": { exercisesPerMuscle: 2, totalRange: "6-8 ejercicios" },
            "45-60": { exercisesPerMuscle: 2, totalRange: "8-12 ejercicios" },
            "60+": { exercisesPerMuscle: 3, totalRange: "12-16 ejercicios" }
        };

        this.goalInfo = {
            health: { focus: "Salud general y bienestar", rest: "60-90 segundos" },
            strength: { focus: "Desarrollo de fuerza máxima", rest: "2-3 minutos" },
            muscle: { focus: "Ganancia de masa muscular", rest: "60-90 segundos" },
            weight_loss: { focus: "Pérdida de peso y definición", rest: "30-60 segundos" }
        };

        this.init();
    }

    // All other methods remain exactly the same...
    init() {
        this.setupMuscleSelection();
        this.setupPersonalForm();
        this.setupLocationSelection();
        this.setupNavigation();
        this.showStep(1);
    
    this.setupInjurySelection();}

    setupMuscleSelection() {
        const muscleButtons = document.querySelectorAll('.muscle-button');
        muscleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const muscle = button.getAttribute('data-muscle');
                this.toggleMuscle(muscle, button);
            });
        });
    }

    toggleMuscle(muscle, button) {
        if (this.selectedMuscles.has(muscle)) {
            this.selectedMuscles.delete(muscle);
            button.classList.remove('selected');
        } else {
            this.selectedMuscles.add(muscle);
            button.classList.add('selected');
        }
        
        this.updateSelectedMusclesList();
        this.updateContinueButton();
    }

    updateSelectedMusclesList() {
        const listElement = document.getElementById('selected-list');
        const muscleNames = {
            chest: "Pecho",
            legs: "Piernas", 
            back: "Espalda",
            arms: "Brazos",
            shoulders: "Hombros",
            abs: "Abdomen",
            cardio: "Cardio"
        };
        
        if (this.selectedMuscles.size === 0) {
            listElement.textContent = 'Ningún grupo muscular seleccionado';
            return;
        }

        const selectedNames = Array.from(this.selectedMuscles).map(muscle => {
            const name = muscleNames[muscle] || muscle;
            return `<span class="selected-muscle-tag">${name}</span>`;
        });

        listElement.innerHTML = selectedNames.join(' ');
    }

    updateContinueButton() {
        const continueButton = document.getElementById('continue-step1');
        continueButton.disabled = this.selectedMuscles.size === 0;
    }

    setupPersonalForm() {
        const fields = ['age', 'experience', 'goal', 'time'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('change', () => {
                    this.userInfo[fieldId] = field.value;
                });
            }
        });
    }

    setupLocationSelection() {
        const locationButtons = document.querySelectorAll('.location-button');
        locationButtons.forEach(button => {
            button.addEventListener('click', () => {
                const location = button.getAttribute('data-location');
                this.selectLocation(location, button);
            });
        });
    }

    selectLocation(location, button) {
        document.querySelectorAll('.location-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
        this.location = location;
        document.getElementById('continue-step3').disabled = false;
    }

    setupNavigation() {
        document.getElementById('continue-step1').addEventListener('click', () => {
            this.showStep(2);
        });

        document.getElementById('back-step2').addEventListener('click', () => {
            this.showStep(1);
        });
        
        document.getElementById('continue-step2').addEventListener('click', () => {
            this.showStep(3);
        });

        document.getElementById('back-step3').addEventListener('click', () => {
            this.showStep(2);
        });
        
        document.getElementById('continue-step3').addEventListener('click', () => {
            this.generateRoutine();
            this.showStep(4);
        });

        document.getElementById('restart').addEventListener('click', () => {
            this.resetApp();
        });
    }

    showStep(stepNumber) {
        document.querySelectorAll('.step-section').forEach(step => {
            step.classList.add('hidden');
        });
        document.getElementById(`step${stepNumber}`).classList.remove('hidden');
        this.currentStep = stepNumber;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    generateRoutine() {
        this.displayRoutineSummary();
        this.displayExercises();
    }

    displayRoutineSummary() {
        const summarySection = document.getElementById('routine-summary');
        const summaryInfo = document.getElementById('summary-info');
        const timeInfo = this.timeMapping[this.userInfo.time] || this.timeMapping["30-45"];
        const goalInfo = this.goalInfo[this.userInfo.goal] || this.goalInfo.health;
        
        summaryInfo.innerHTML = `
            <div class="summary-grid">
                <div class="summary-item">
                    <div class="summary-label">Grupos Musculares</div>
                    <div class="summary-value">${this.selectedMuscles.size}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Ubicación</div>
                    <div class="summary-value">${this.location === 'home' ? 'Casa' : 'Gimnasio'}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Tiempo Estimado</div>
                    <div class="summary-value">${this.userInfo.time || '30-45 min'}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Ejercicios Totales</div>
                    <div class="summary-value">${timeInfo.totalRange}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Experiencia</div>
                    <div class="summary-value">${this.userInfo.experience || 'General'}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Objetivo</div>
                    <div class="summary-value">${goalInfo.focus}</div>
                </div>
            </div>
            ${goalInfo.rest ? `<p style="text-align: center; margin-top: var(--space-16); color: var(--color-text-secondary);">
                <strong>Descanso recomendado:</strong> ${goalInfo.rest} entre series
            </p>` : ''}
        `;
        summarySection.classList.remove('hidden');
    }

    displayExercises() {
        const exercisesContainer = document.getElementById('exercises-container');
        let exercisesHTML = '';
        const timeInfo = this.timeMapping[this.userInfo.time] || this.timeMapping["30-45"];
        const exercisesPerMuscle = timeInfo.exercisesPerMuscle;
        
        this.selectedMuscles.forEach(muscle => {
            const muscleExercises = this.getExercisesForMuscle(muscle, exercisesPerMuscle);
            if (muscleExercises.length > 0) {
                exercisesHTML += `
                    <div class="muscle-section">
                        <h3 class="muscle-section-title">${this.getMuscleDisplayName(muscle)}</h3>
                        ${muscleExercises.map(exercise => this.createExerciseCard(exercise)).join('')}
                    </div>
                `;
            }
        });
        
        if (!exercisesHTML) {
            exercisesHTML = `
                <div class="muscle-section">
                    <h3 class="muscle-section-title">Rutina Básica Recomendada</h3>
                    <div class="exercise-card">
                        <div class="exercise-header">
                            <h4 class="exercise-name">Rutina de Inicio</h4>
                        </div>
                        <div class="exercise-description">
                            Recomendamos comenzar con actividades básicas como caminata de 15-20 minutos, 
                            estiramientos suaves y ejercicios de respiración hasta que puedas seleccionar 
                            grupos musculares específicos.
                        </div>
                    </div>
                </div>
            `;
        }
        exercisesContainer.innerHTML = exercisesHTML;
    }

    getExercisesForMuscle(muscle, count) {
        const muscleData = this.exercises[muscle];
        if (!muscleData) return [];
        const exerciseList = this.location === 'home' ? muscleData.home : muscleData.gym;
        if (!exerciseList || exerciseList.length === 0) return [];
        const shuffled = [...exerciseList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    getMuscleDisplayName(muscle) {
        const names = {
            chest: "Pecho",
            legs: "Piernas", 
            back: "Espalda",
            arms: "Brazos",
            shoulders: "Hombros",
            abs: "Abdomen",
            cardio: "Cardio"
        };
        return names[muscle] || muscle;
    }

    createExerciseCard(exercise) {
        const tip = this.getTipForUser(exercise);
        const progressionsHTML = exercise.progressions ? this.createProgressionsHTML(exercise.progressions) : '';
        
        return `
            <div class="exercise-card">
                <div class="exercise-header">
                    <h4 class="exercise-name">${exercise.name}</h4>
                </div>
                <div class="exercise-description">${exercise.description}</div>
                <div class="exercise-details">
                    <div class="exercise-detail">
                        <div class="exercise-detail-label">Series y Repeticiones</div>
                        <div class="exercise-detail-value">${exercise.sets}</div>
                    </div>
                    <div class="exercise-detail">
                        <div class="exercise-detail-label">Equipo</div>
                        <div class="exercise-detail-value">${exercise.equipment}</div>
                    </div>
                    <div class="exercise-detail">
                        <div class="exercise-detail-label">Músculos</div>
                        <div class="exercise-detail-value">${exercise.muscles}</div>
                    </div>
                    <div class="exercise-detail">
                        <div class="exercise-detail-label">Dificultad</div>
                        <div class="exercise-detail-value">${exercise.difficulty}</div>
                    </div>
                </div>
                ${tip ? `
                    <div class="exercise-tips">
                        <div class="tips-label">Consejo para tu nivel</div>
                        <div class="tips-text">${tip}</div>
                    </div>
                ` : ''}
                ${progressionsHTML}
                <a href="${exercise.link}" target="_blank" rel="noopener noreferrer" class="exercise-link">
                    Ver técnica en ExRx.net
                </a>
            </div>
        `;
    }

    getTipForUser(exercise) {
        if (this.userInfo.experience === 'principiante' && exercise.beginner_tip) {
            return exercise.beginner_tip;
        } else if (this.userInfo.experience === 'avanzado' && exercise.advanced_tip) {
            return exercise.advanced_tip;
        }
        return null;
    }

    createProgressionsHTML(progressions) {
        return `
            <div class="progressions">
                <div class="progressions-label">Progresiones disponibles</div>
                ${progressions.map((progression, index) => `
                    <div class="progression-item"><strong>Nivel ${index + 1}:</strong> ${progression}</div>
                `).join('')}
            </div>
        `;
    }

    resetApp() {
        this.selectedMuscles.clear();
        this.userInfo = { age: '', experience: '', goal: '', time: '' };
        this.location = null;
        
        document.querySelectorAll('.muscle-button').forEach(button => {
            button.classList.remove('selected');
        });
        document.querySelectorAll('.location-button').forEach(button => {
            button.classList.remove('selected');
        });
        
        document.getElementById('age').value = '';
        document.getElementById('experience').value = '';
        document.getElementById('goal').value = '';
        document.getElementById('time').value = '';
        
        document.getElementById('continue-step1').disabled = true;
        document.getElementById('continue-step3').disabled = true;
        document.getElementById('routine-summary').classList.add('hidden');
        
        this.updateSelectedMusclesList();
        this.showStep(1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.exerciseApp = new SimpleExerciseGenerator();
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.matches('button')) {
            e.target.click();
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.matches('a[target="_blank"]')) {
            return true;
        }
    });
});
