// Enhanced Scientific Exercise Prescription Application with Injury Adaptation System
class ScientificExerciseApp {
    constructor() {
        this.selectedZones = new Set();
        this.userAssessment = {};
        this.location = null;
        this.injury = "none"; // Default injury state
        this.safetyIssues = new Set();
        this.currentStep = 1;
        this.medicalClearanceType = null;
        this.bypassEnabled = false;
        
        // Load injury adaptations data
        this.injuryAdaptations = {
            "knee": {
                "avoid": ["Sentadilla con Barra", "Estocadas Alternadas", "Jumping Jacks", "Mountain Climbers"],
                "prefer": ["Sentadilla parcial", "Glute bridges", "Wall sits", "Bicicleta Estática", "Caminata Vigorosa"]
            },
            "shoulder": {
                "avoid": ["Press Militar", "Press de Banca con Barra", "Fondos en Silla", "Flexiones Pike"],
                "prefer": ["Scapular stabilization", "Elevaciones Laterales", "Remo Invertido", "Plancha Estándar"]
            },
            "lowerback": {
                "avoid": ["Peso Muerto Rumano", "Remo con Barra", "Crunch Abdominal"],
                "prefer": ["Superman", "Plancha Estándar", "Caminata Vigorosa"]
            },
            "ankle": {
                "avoid": ["Jumping Jacks", "Mountain Climbers", "Estocadas Alternadas"],
                "prefer": ["Remo con Barra", "Remo Invertido", "Plancha Estándar", "Bicicleta Estática"]
            },
            "none": {
                "avoid": [],
                "prefer": []
            }
        };
        
        // Comprehensive exercise database
        this.exercises = {
            chest: {
                gym: [
                    {
                        name: "Press de Banca con Barra",
                        description: "Ejercicio fundamental para desarrollo del pectoral mayor",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra olímpica y banco",
                        muscles: "Pectoral Mayor, Tríceps, Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/PectoralSternal/BBBenchPress",
                        difficulty: "intermedio",
                        beginner_tip: "Usa siempre un spotter para cargas pesadas",
                        advanced_tip: "Varía el agarre para trabajar diferentes ángulos"
                    },
                    {
                        name: "Press Inclinado con Mancuernas",
                        description: "Excelente para desarrollo del pecho superior",
                        sets: "3 series de 10-15 repeticiones",
                        equipment: "Par de mancuernas y banco inclinado (30-45°)",
                        muscles: "Pectoral Mayor (fibras superiores), Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Comienza con peso ligero para dominar el patrón",
                        advanced_tip: "Enfócate en la contracción al final del movimiento"
                    }
                ],
                home: [
                    {
                        name: "Flexiones de Brazos Estándar",
                        description: "Ejercicio funcional fundamental para fuerza del tren superior",
                        sets: "3 series de 8-20 repeticiones",
                        equipment: "Peso corporal solamente",
                        muscles: "Pectoral Mayor, Tríceps, Deltoides Anterior, Core",
                        link: "https://exrx.net/WeightExercises/PectoralSternal/BWPushup",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Comienza con rodillas apoyadas si es necesario",
                        advanced_tip: "Varía la posición de las manos para diferentes énfasis"
                    },
                    {
                        name: "Flexiones Diamante",
                        description: "Variante avanzada que enfatiza el desarrollo de tríceps",
                        sets: "3 series de 5-12 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Tríceps, Pectoral Mayor (centro), Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/Triceps/BWCloseGripPushup",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina flexiones regulares primero",
                        advanced_tip: "Controla la fase excéntrica para mayor activación"
                    }
                ]
            },
            legs: {
                gym: [
                    {
                        name: "Sentadilla con Barra",
                        description: "El ejercicio rey para desarrollo de miembros inferiores",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Barra olímpica y rack de sentadillas",
                        muscles: "Cuádriceps, Glúteo Mayor, Isquiotibiales, Core",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BBSquat",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Aprende la técnica sin peso primero",
                        advanced_tip: "Varía la profundidad según tus objetivos"
                    },
                    {
                        name: "Peso Muerto Rumano",
                        description: "Fundamental para la cadena posterior",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra olímpica o mancuernas",
                        muscles: "Isquiotibiales, Glúteo Mayor, Erector Espinal",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BBStiffLegDeadlift",
                        difficulty: "intermedio",
                        beginner_tip: "Enfócate en empujar las caderas hacia atrás",
                        advanced_tip: "Mantén la barra muy cerca del cuerpo"
                    }
                ],
                home: [
                    {
                        name: "Sentadilla Corporal",
                        description: "Movimiento funcional fundamental y seguro",
                        sets: "3 series de 12-25 repeticiones",
                        equipment: "Peso corporal solamente",
                        muscles: "Cuádriceps, Glúteos, Isquiotibiales, Pantorrillas",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BWSquat",
                        difficulty: "principiante",
                        beginner_tip: "Usa una silla como guía para la profundidad",
                        advanced_tip: "Añade pausa en la posición inferior"
                    },
                    {
                        name: "Estocadas Alternadas",
                        description: "Excelente para equilibrio y corrección de desequilibrios",
                        sets: "3 series de 10-15 por pierna",
                        equipment: "Peso corporal",
                        muscles: "Cuádriceps, Glúteos, Isquiotibiales, Estabilizadores",
                        link: "https://exrx.net/WeightExercises/GluteusMaximus/BWLunge",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Usa pared para equilibrio si es necesario",
                        advanced_tip: "Enfócate en la activación del glúteo"
                    }
                ]
            },
            back: {
                gym: [
                    {
                        name: "Remo con Barra",
                        description: "Fundamental para fuerza de tracción",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Barra olímpica",
                        muscles: "Dorsal Ancho, Romboides, Trapecio Medio",
                        link: "https://exrx.net/WeightExercises/BackGeneral/BBBentOverRow",
                        difficulty: "intermedio",
                        beginner_tip: "Mantén la espalda recta durante todo el movimiento",
                        advanced_tip: "Aprieta los omóplatos al final del movimiento"
                    },
                    {
                        name: "Dominadas",
                        description: "Ejercicio compuesto supremo para la espalda",
                        sets: "3 series de 5-12 repeticiones",
                        equipment: "Barra de dominadas",
                        muscles: "Dorsal Ancho, Romboides, Trapecio Medio, Bíceps",
                        link: "https://exrx.net/WeightExercises/LatissimusDorsi/BWPullup",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Usa banda elástica o máquina asistida",
                        advanced_tip: "Controla la fase negativa"
                    }
                ],
                home: [
                    {
                        name: "Remo Invertido",
                        description: "Excelente alternativa casera a dominadas",
                        sets: "3 series de 8-15 repeticiones",
                        equipment: "Mesa resistente o barra baja",
                        muscles: "Dorsal Ancho, Romboides, Trapecio Medio, Bíceps",
                        link: "https://exrx.net/WeightExercises/BackGeneral/BWSupineRow",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Asegúrate de que la mesa sea muy resistente",
                        advanced_tip: "Eleva los pies para mayor dificultad"
                    },
                    {
                        name: "Superman",
                        description: "Seguro para fortalecimiento de espalda baja",
                        sets: "3 series de 12-20 repeticiones",
                        equipment: "Peso corporal, colchoneta opcional",
                        muscles: "Erector Espinal, Glúteos, Deltoides Posterior",
                        link: "https://exrx.net/WeightExercises/ErectorSpinae/Superman",
                        difficulty: "principiante",
                        beginner_tip: "Comienza con movimientos pequeños",
                        advanced_tip: "Mantén la contracción 2-3 segundos"
                    }
                ]
            },
            arms: {
                gym: [
                    {
                        name: "Curl de Bíceps con Barra",
                        description: "Ejercicio básico para desarrollo de bíceps",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra recta o barra W",
                        muscles: "Bíceps Braquial, Braquial Anterior",
                        link: "https://exrx.net/WeightExercises/Biceps/BBCurl",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Mantén los codos fijos a los lados",
                        advanced_tip: "Controla la fase negativa"
                    },
                    {
                        name: "Press Francés",
                        description: "Efectivo para desarrollo completo del tríceps",
                        sets: "3 series de 8-12 repeticiones",
                        equipment: "Barra W o recta, banco plano",
                        muscles: "Tríceps Braquial (las 3 porciones)",
                        link: "https://exrx.net/WeightExercises/Triceps/BBLyingTriExt",
                        difficulty: "intermedio",
                        beginner_tip: "Usa barra W para menos estrés en muñecas",
                        advanced_tip: "Mantén los codos fijos"
                    }
                ],
                home: [
                    {
                        name: "Fondos en Silla",
                        description: "Versión casera segura de fondos para tríceps",
                        sets: "3 series de 8-15 repeticiones",
                        equipment: "Silla resistente",
                        muscles: "Tríceps, Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/Triceps/BWBenchDip",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Flexiona piernas para reducir dificultad",
                        advanced_tip: "Extiende piernas para mayor desafío"
                    }
                ]
            },
            shoulders: {
                gym: [
                    {
                        name: "Press Militar",
                        description: "Fundamental para desarrollo de hombros",
                        sets: "3 series de 6-10 repeticiones",
                        equipment: "Barra olímpica",
                        muscles: "Deltoides, Tríceps, Core",
                        link: "https://exrx.net/WeightExercises/DeltoidAnterior/BBMilitaryPress",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina la técnica con peso ligero",
                        advanced_tip: "Mantén el core muy activado"
                    },
                    {
                        name: "Elevaciones Laterales",
                        description: "Específico para anchura de hombros",
                        sets: "3 series de 12-15 repeticiones",
                        equipment: "Par de mancuernas ligeras",
                        muscles: "Deltoides Lateral, Deltoides Anterior",
                        link: "https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise",
                        difficulty: "principiante",
                        beginner_tip: "Peso ligero a moderado siempre",
                        advanced_tip: "Controla la fase negativa"
                    }
                ],
                home: [
                    {
                        name: "Flexiones Pike",
                        description: "Excelente ejercicio casero para hombros",
                        sets: "3 series de 6-12 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Deltoides Anterior, Tríceps, Core",
                        link: "https://exrx.net/WeightExercises/DeltoidAnterior/BWPikePress",
                        difficulty: "intermedio",
                        beginner_tip: "Comienza con rango parcial",
                        advanced_tip: "Eleva los pies para mayor dificultad"
                    }
                ]
            },
            abs: {
                gym: [
                    {
                        name: "Plancha con Peso",
                        description: "Superior para estabilidad del core",
                        sets: "3 series de 20-45 segundos",
                        equipment: "Disco de peso",
                        muscles: "Recto Abdominal, Transverso, Oblicuos",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/WtPlank",
                        difficulty: "intermedio-avanzado",
                        beginner_tip: "Domina plancha sin peso primero",
                        advanced_tip: "Añade peso gradualmente"
                    },
                    {
                        name: "Crunch Abdominal",
                        description: "Básico para desarrollo abdominal",
                        sets: "3 series de 15-25 repeticiones",
                        equipment: "Peso corporal",
                        muscles: "Recto Abdominal",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/BWCrunch",
                        difficulty: "principiante",
                        beginner_tip: "Movimiento controlado, no uses impulso",
                        advanced_tip: "Mantén tensión constante en abdomen"
                    }
                ],
                home: [
                    {
                        name: "Plancha Estándar",
                        description: "Fundamental para estabilidad del core",
                        sets: "3 series de 20-60 segundos",
                        equipment: "Peso corporal, colchoneta opcional",
                        muscles: "Core completo, Estabilizadores",
                        link: "https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Progresa tiempo gradualmente",
                        advanced_tip: "Mantén línea perfecta del cuerpo"
                    },
                    {
                        name: "Bicicleta Abdominal",
                        description: "Efectivo para oblicuos y abdomen",
                        sets: "3 series de 20-30 repeticiones",
                        equipment: "Peso corporal, colchoneta",
                        muscles: "Oblicuos, Recto Abdominal",
                        link: "https://exrx.net/WeightExercises/Obliques/BWTwistingCrunch",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Ritmo controlado, no muy rápido",
                        advanced_tip: "Enfócate en la rotación del torso"
                    }
                ]
            },
            cardio: {
                gym: [
                    {
                        name: "Bicicleta Estática",
                        description: "Cardiovascular de bajo impacto",
                        sets: "20-30 minutos",
                        equipment: "Bicicleta estática",
                        muscles: "Sistema cardiovascular, Cuádriceps, Glúteos",
                        link: "https://exrx.net/Aerobic/Exercises/Cycling",
                        difficulty: "principiante",
                        beginner_tip: "Ajuste profesional del asiento",
                        advanced_tip: "Varía la resistencia por intervalos"
                    },
                    {
                        name: "Cinta de Correr",
                        description: "Cardiovascular fundamental",
                        sets: "20-30 minutos",
                        equipment: "Cinta de correr",
                        muscles: "Sistema cardiovascular, Piernas completas",
                        link: "https://exrx.net/Aerobic/Exercises/TreadmillRun",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Comienza con caminata",
                        advanced_tip: "Incorpora intervalos de intensidad"
                    }
                ],
                home: [
                    {
                        name: "Jumping Jacks",
                        description: "Pliométrico para acondicionamiento",
                        sets: "3 series de 30-60 segundos",
                        equipment: "Peso corporal",
                        muscles: "Sistema cardiovascular, Piernas, Hombros",
                        link: "https://exrx.net/Aerobic/Exercises/JumpingJack",
                        difficulty: "principiante-intermedio",
                        beginner_tip: "Superficie apropiada para saltar",
                        advanced_tip: "Mantén ritmo constante"
                    },
                    {
                        name: "Mountain Climbers",
                        description: "Alta intensidad, múltiples grupos musculares",
                        sets: "3 series de 20-30 segundos",
                        equipment: "Peso corporal",
                        muscles: "Sistema cardiovascular, Core, Hombros",
                        link: "https://exrx.net/Aerobic/Exercises/MountainClimber",
                        difficulty: "intermedio",
                        beginner_tip: "Domina plancha primero",
                        advanced_tip: "Mantén posición de plancha perfecta"
                    },
                    {
                        name: "Caminata Vigorosa",
                        description: "Cardio suave y accesible",
                        sets: "20-45 minutos",
                        equipment: "Ninguno",
                        muscles: "Sistema cardiovascular, Piernas",
                        link: "https://exrx.net/Aerobic/Exercises/Walking",
                        difficulty: "principiante",
                        beginner_tip: "Comienza con 10-15 minutos",
                        advanced_tip: "Añade inclinaciones o intervalos"
                    }
                ]
            }
        };

        // Time-based routine structure
        this.routineTimeStructures = {
            "15-30": {
                total_exercises: [4, 6],
                exercises_per_zone: 1,
                warm_up: "3-5 minutos",
                main_workout: "10-20 minutos",
                cool_down: "2-5 minutos",
                structure: "1 ejercicio básico por zona seleccionada"
            },
            "30-45": {
                total_exercises: [6, 8],
                exercises_per_zone: [1, 2],
                warm_up: "5-8 minutos",
                main_workout: "20-30 minutos",
                cool_down: "5-7 minutos",
                structure: "1-2 ejercicios por zona, priorizando básicos"
            },
            "45-60": {
                total_exercises: [8, 12],
                exercises_per_zone: 2,
                warm_up: "8-10 minutos",
                main_workout: "35-45 minutos",
                cool_down: "7-10 minutos",
                structure: "2 ejercicios por zona (1 básico + 1 auxiliar)"
            },
            "60+": {
                total_exercises: [12, 16],
                exercises_per_zone: [2, 3],
                warm_up: "10-15 minutos",
                main_workout: "45-60 minutos",
                cool_down: "10-15 minutos",
                structure: "2-3 ejercicios por zona con variaciones"
            }
        };

        this.init();
    }

    init() {
        this.setupZoneSelection();
        this.setupAssessmentForm();
        this.setupLocationSelection();
        this.setupInjurySelection();
        this.setupMedicalClearance();
        this.setupNavigation();
        this.showStep(1);
    }

    setupZoneSelection() {
        const zoneButtons = document.querySelectorAll('.zone-button');
        zoneButtons.forEach(button => {
            button.addEventListener('click', () => {
                const zone = button.getAttribute('data-zone');
                this.toggleZone(zone, button);
            });
        });
    }

    toggleZone(zone, button) {
        if (this.selectedZones.has(zone)) {
            this.selectedZones.delete(zone);
            button.classList.remove('selected');
        } else {
            this.selectedZones.add(zone);
            button.classList.add('selected');
        }
        
        this.updateSelectedZonesList();
        this.updateContinueButton();
    }

    updateSelectedZonesList() {
        const listElement = document.getElementById('selected-list');
        const zoneNames = {
            chest: "Pecho",
            legs: "Piernas",
            back: "Espalda",
            arms: "Brazos",
            shoulders: "Hombros",
            abs: "Abdomen",
            cardio: "Cardio"
        };
        
        if (this.selectedZones.size === 0) {
            listElement.textContent = 'Ningún grupo muscular seleccionado';
            return;
        }

        const selectedNames = Array.from(this.selectedZones).map(zone => {
            const name = zoneNames[zone] || zone;
            return `<span class="selected-zone-tag">${name}</span>`;
        });

        listElement.innerHTML = selectedNames.join(' ');
    }

    updateContinueButton() {
        const continueButton = document.getElementById('continue-step1');
        continueButton.disabled = this.selectedZones.size === 0;
    }

    setupAssessmentForm() {
        const requiredFields = ['age', 'sex', 'height', 'weight', 'activity-level', 'available-time'];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('change', () => this.validateAssessmentForm());
                field.addEventListener('input', () => this.validateAssessmentForm());
            }
        });

        const conditionCheckboxes = document.querySelectorAll('input[name="conditions"]');
        conditionCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.value === 'ninguna' && e.target.checked) {
                    conditionCheckboxes.forEach(cb => {
                        if (cb.value !== 'ninguna') cb.checked = false;
                    });
                } else if (e.target.value !== 'ninguna' && e.target.checked) {
                    const ningunaBox = document.querySelector('input[name="conditions"][value="ninguna"]');
                    if (ningunaBox) ningunaBox.checked = false;
                }
            });
        });
    }

    validateAssessmentForm() {
        const requiredFields = ['age', 'sex', 'height', 'weight', 'activity-level', 'available-time'];
        const continueButton = document.getElementById('continue-step2');
        
        const allValid = requiredFields.every(fieldId => {
            const field = document.getElementById(fieldId);
            return field && field.value.trim() !== '';
        });

        continueButton.disabled = !allValid;
    }

    collectAssessmentData() {
        this.userAssessment = {
            age: parseInt(document.getElementById('age').value),
            sex: document.getElementById('sex').value,
            height: parseInt(document.getElementById('height').value),
            weight: parseInt(document.getElementById('weight').value),
            activity_level: document.getElementById('activity-level').value,
            experience: document.getElementById('experience').value || 'beginner',
            primary_goal: document.getElementById('primary-goal').value || 'general_health',
            available_time: document.getElementById('available-time').value,
            frequency: document.getElementById('frequency').value || '3',
            conditions: Array.from(document.querySelectorAll('input[name="conditions"]:checked')).map(cb => cb.value)
        };

        const heightM = this.userAssessment.height / 100;
        this.userAssessment.bmi = (this.userAssessment.weight / (heightM * heightM)).toFixed(1);
        this.userAssessment.age_group = this.getAgeGroup(this.userAssessment.age);
    }

    getAgeGroup(age) {
        if (age >= 18 && age <= 39) return "18-39";
        if (age >= 40 && age <= 64) return "40-64";
        if (age >= 65) return "65+";
        return "18-39";
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

    setupInjurySelection() {
        const injuryButtons = document.querySelectorAll('.injury-button');
        injuryButtons.forEach(button => {
            button.addEventListener('click', () => {
                injuryButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                this.injury = button.getAttribute('data-injury');
                console.log('Injury selected:', this.injury);
                document.getElementById('continue-step4').disabled = false;
            });
        });
    }

    getExercisesForMuscle(muscle, count) {
        const muscleData = this.exercises[muscle];
        if (!muscleData) return [];
        
        let exerciseList = this.location === 'home' ? muscleData.home : muscleData.gym;
        if (!exerciseList || exerciseList.length === 0) return [];
        
        // Apply injury filtering
        if (this.injury && this.injury !== 'none') {
            const adaptations = this.injuryAdaptations[this.injury] || {};
            const avoidList = adaptations.avoid || [];
            const preferList = adaptations.prefer || [];
            
            console.log(`Filtering for injury: ${this.injury}`);
            console.log('Avoiding:', avoidList);
            
            // Filter out avoided exercises
            exerciseList = exerciseList.filter(ex => {
                const shouldAvoid = avoidList.some(term => 
                    ex.name.toLowerCase().includes(term.toLowerCase())
                );
                return !shouldAvoid;
            });
            
            console.log(`After filtering: ${exerciseList.length} exercises`);
            
            // Add injury modifications to remaining exercises
            exerciseList = exerciseList.map(ex => ({
                ...ex,
                equipment: ex.equipment + " (adaptado para lesión)",
                injury_adapted: true,
                sets: ex.sets.replace(/\d+(-\d+)?/, "2-3") // Reduce intensity
            }));
            
            // If too few exercises after filtering, add alternatives
            if (exerciseList.length < count && preferList.length > 0) {
                const altExercises = preferList.slice(0, count - exerciseList.length).map(name => ({
                    name: name,
                    description: "Ejercicio alternativo seguro recomendado para tu lesión.",
                    sets: "2-3 series de 10-15 repeticiones",
                    equipment: "Peso corporal o bajo impacto",
                    muscles: "Adaptado por lesión",
                    link: "https://exrx.net",
                    difficulty: "bajo impacto",
                    beginner_tip: "Realiza con cuidado y para si sientes dolor",
                    advanced_tip: "Progresa muy gradualmente",
                    injury_alternative: true
                }));
                exerciseList = exerciseList.concat(altExercises);
            }
        }
        
        const shuffled = [...exerciseList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    setupMedicalClearance() {
        const clearanceCheckboxes = document.querySelectorAll('input[name="medical-clearance"]');
        const proceedButton = document.getElementById('proceed-with-clearance');
        
        clearanceCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                clearanceCheckboxes.forEach(cb => {
                    if (cb !== e.target) cb.checked = false;
                });
                
                if (e.target.checked) {
                    this.medicalClearanceType = e.target.value;
                    proceedButton.disabled = false;
                } else {
                    this.medicalClearanceType = null;
                    proceedButton.disabled = true;
                }
            });
        });

        proceedButton.addEventListener('click', () => {
            this.bypassEnabled = true;
            this.showPrescriptionWithBypass();
        });
    }

    showPrescriptionWithBypass() {
        document.getElementById('medical-clearance').classList.add('hidden');
        
        document.getElementById('prescription-summary').classList.remove('hidden');
        document.getElementById('routine-structure').classList.remove('hidden');
        document.getElementById('exercises-section').classList.remove('hidden');
        document.getElementById('progression-guidelines').classList.remove('hidden');
        document.getElementById('routine-footer').classList.remove('hidden');
    }

    setupNavigation() {
        document.getElementById('continue-step1').addEventListener('click', () => {
            this.showStep(2);
        });

        document.getElementById('back-step2').addEventListener('click', () => {
            this.showStep(1);
        });
        
        document.getElementById('continue-step2').addEventListener('click', () => {
            this.collectAssessmentData();
            this.showStep(3);
        });

        document.getElementById('back-step3').addEventListener('click', () => {
            this.showStep(2);
        });
        
        document.getElementById('continue-step3').addEventListener('click', () => {
            this.showStep(4);
        });

        document.getElementById('back-step4').addEventListener('click', () => {
            this.showStep(3);
        });
        
        document.getElementById('continue-step4').addEventListener('click', () => {
            this.generateFullRoutine();
            this.showStep(5);
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

    generateFullRoutine() {
        this.createRoutineStructure();
        this.createFullExercisePrescription();
        this.createProgressionGuidelines();
        
        document.getElementById('prescription-summary').classList.remove('hidden');
        document.getElementById('routine-structure').classList.remove('hidden');
        document.getElementById('exercises-section').classList.remove('hidden');
        document.getElementById('progression-guidelines').classList.remove('hidden');
        document.getElementById('routine-footer').classList.remove('hidden');
    }

    createRoutineStructure() {
        const routineBreakdown = document.getElementById('routine-breakdown');
        const timeStructure = this.routineTimeStructures[this.userAssessment.available_time];
        
        routineBreakdown.innerHTML = `
            <div class="routine-phase">
                <div class="routine-phase-title">🔥 Calentamiento</div>
                <div class="routine-phase-time">${timeStructure.warm_up}</div>
                <div class="routine-phase-description">Movilidad articular y activación progresiva</div>
            </div>
            <div class="routine-phase">
                <div class="routine-phase-title">💪 Entrenamiento Principal</div>
                <div class="routine-phase-time">${timeStructure.main_workout}</div>
                <div class="routine-phase-description">${timeStructure.structure}</div>
            </div>
            <div class="routine-phase">
                <div class="routine-phase-title">🧘 Enfriamiento</div>
                <div class="routine-phase-time">${timeStructure.cool_down}</div>
                <div class="routine-phase-description">Estiramientos y relajación</div>
            </div>
        `;
    }

    createFullExercisePrescription() {
        this.displayUserProfile();
        this.displayFullExerciseRoutine();
    }

    displayUserProfile() {
        const userProfile = document.getElementById('user-profile');
        
        const injuryStatus = this.injury === 'none' ? 'Sin lesiones' : 
            this.injury === 'knee' ? 'Lesión de rodilla' :
            this.injury === 'shoulder' ? 'Lesión de hombro' :
            this.injury === 'lowerback' ? 'Lesión espalda baja' :
            this.injury === 'ankle' ? 'Lesión de tobillo' : 'Desconocida';
        
        userProfile.innerHTML = `
            <div class="user-profile-grid">
                <div class="profile-item">
                    <div class="profile-label">Edad</div>
                    <div class="profile-value">${this.userAssessment.age} años</div>
                </div>
                <div class="profile-item">
                    <div class="profile-label">IMC</div>
                    <div class="profile-value">${this.userAssessment.bmi}</div>
                </div>
                <div class="profile-item">
                    <div class="profile-label">Ubicación</div>
                    <div class="profile-value">${this.location === 'home' ? 'Casa' : 'Gimnasio'}</div>
                </div>
                <div class="profile-item">
                    <div class="profile-label">Estado de Lesión</div>
                    <div class="profile-value">${injuryStatus}</div>
                </div>
                <div class="profile-item">
                    <div class="profile-label">Tiempo por Sesión</div>
                    <div class="profile-value">${this.userAssessment.available_time} minutos</div>
                </div>
                <div class="profile-item">
                    <div class="profile-label">Grupos Musculares</div>
                    <div class="profile-value">${this.selectedZones.size} zonas</div>
                </div>
            </div>
        `;
    }

    displayFullExerciseRoutine() {
        const exercisesList = document.getElementById('exercises-list');
        const timeStructure = this.routineTimeStructures[this.userAssessment.available_time];
        let exercisesHTML = '';
        let totalExercises = 0;
        
        const exercisesPerZone = Array.isArray(timeStructure.exercises_per_zone) ? 
            timeStructure.exercises_per_zone[0] : timeStructure.exercises_per_zone;
        
        const maxTotalExercises = Array.isArray(timeStructure.total_exercises) ? 
            timeStructure.total_exercises[1] : timeStructure.total_exercises;

        // Add injury adaptation notice if applicable
        if (this.injury !== 'none') {
            exercisesHTML += `
                <div class="injury-notice">
                    <h4>🩺 Adaptaciones por Lesión Aplicadas</h4>
                    <p>Su rutina ha sido automáticamente adaptada para ${this.getInjuryLabel(this.injury)}:</p>
                    <ul>
                        <li>✅ Ejercicios peligrosos filtrados automáticamente</li>
                        <li>🔄 Ejercicios alternativos seguros incluidos</li>
                        <li>⚖️ Intensidad y pesos reducidos apropiadamente</li>
                        <li>🛡️ Equipos adaptados para mayor seguridad</li>
                    </ul>
                </div>
            `;
        }

        // Generate exercises for each selected zone
        this.selectedZones.forEach((zone) => {
            const zoneExercises = this.getExercisesForMuscle(zone, exercisesPerZone);
            
            if (zoneExercises.length > 0) {
                exercisesHTML += `<div class="zone-separator">
                    <h4 style="color: var(--color-primary); font-size: var(--font-size-xl); margin: var(--space-24) 0; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                        ${this.getZoneLabel(zone)}
                    </h4>
                </div>`;
                
                zoneExercises.forEach(exercise => {
                    if (totalExercises < maxTotalExercises) {
                        exercisesHTML += this.createDetailedExerciseCard(exercise, zone);
                        totalExercises++;
                    }
                });
            }
        });

        if (totalExercises === 0) {
            exercisesHTML += `
                <div class="card">
                    <div class="card__body">
                        <h4>📋 Rutina Básica Recomendada</h4>
                        <p>Dadas las condiciones reportadas, recomendamos comenzar con actividades de muy baja intensidad:</p>
                        <ul>
                            <li><strong>Caminata suave:</strong> 10-15 minutos diarios</li>
                            <li><strong>Ejercicios de respiración:</strong> 5 minutos, 2 veces al día</li>
                            <li><strong>Estiramientos básicos:</strong> Movimientos lentos y controlados</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        exercisesList.innerHTML = exercisesHTML;
    }

    getInjuryLabel(injury) {
        const labels = {
            knee: "lesión de rodilla",
            shoulder: "lesión de hombro",
            lowerback: "lesión de espalda baja",
            ankle: "lesión de tobillo"
        };
        return labels[injury] || "lesión";
    }

    getZoneLabel(zone) {
        const labels = {
            chest: "💪 Pecho",
            legs: "🦵 Piernas", 
            back: "🏋️ Espalda",
            arms: "💪 Brazos",
            shoulders: "🤸 Hombros",
            abs: "🔥 Abdomen",
            cardio: "❤️ Cardio"
        };
        return labels[zone] || zone;
    }

    createDetailedExerciseCard(exercise, zone) {
        let injuryNotices = '';
        
        if (exercise.injury_adapted) {
            injuryNotices += `<div class="injury-notice">⚠️ Adaptado para lesión: Peso reducido y movimiento controlado</div>`;
        }
        if (exercise.injury_alternative) {
            injuryNotices += `<div class="alt-notice">✅ Ejercicio alternativo seguro para tu lesión</div>`;
        }

        return `
            <div class="exercise-card">
                <div class="exercise-header">
                    <h4 class="exercise-name">${exercise.name}</h4>
                    <span class="exercise-classification classification-basic">Recomendado</span>
                </div>
                
                ${injuryNotices}
                
                <div class="exercise-muscles">
                    <strong>Músculos trabajados:</strong> ${exercise.muscles}
                </div>
                
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
                        <div class="exercise-detail-label">Dificultad</div>
                        <div class="exercise-detail-value">${exercise.difficulty}</div>
                    </div>
                </div>

                <div class="exercise-description">
                    <div class="description-title">📋 Descripción</div>
                    <div class="description-text">${exercise.description}</div>
                    
                    <div class="description-section">
                        <div class="description-section-title">💡 Consejo para Principiantes</div>
                        <div class="description-text">${exercise.beginner_tip}</div>
                    </div>
                    
                    <div class="description-section">
                        <div class="description-section-title">🔥 Consejo Avanzado</div>
                        <div class="description-text">${exercise.advanced_tip}</div>
                    </div>
                </div>

                <a href="${exercise.link}" target="_blank" rel="noopener noreferrer" class="exercise-link">
                    🔗 Ver técnica en ExRx.net
                </a>
            </div>
        `;
    }

    createProgressionGuidelines() {
        const progressionInfo = document.getElementById('progression-info');
        
        let injuryGuidelines = '';
        if (this.injury !== 'none') {
            injuryGuidelines = `
                <div class="progression-item">
                    <div class="progression-title">🩺 Progresión con Lesión</div>
                    <div class="progression-text">Progresa MÁS LENTAMENTE. Si sientes dolor, detente inmediatamente. Consulta profesional médico.</div>
                </div>
            `;
        }
        
        progressionInfo.innerHTML = `
            <div class="progression-grid">
                <div class="progression-item">
                    <div class="progression-title">📅 Frecuencia de Progresión</div>
                    <div class="progression-text">Semana 1-2: Aprender técnica | Semana 3-4: Aumentar repeticiones | Semana 5+: Aumentar dificultad</div>
                </div>
                <div class="progression-item">
                    <div class="progression-title">🎯 Progresión Inteligente</div>
                    <div class="progression-text">Aumenta solo una variable a la vez: repeticiones → series → dificultad</div>
                </div>
                <div class="progression-item">
                    <div class="progression-title">⚠️ Señales de Parar</div>
                    <div class="progression-text">Dolor agudo, mareo, falta de aire excesiva o fatiga extrema</div>
                </div>
                ${injuryGuidelines}
            </div>
        `;
    }

    resetApp() {
        this.selectedZones.clear();
        this.userAssessment = {};
        this.location = null;
        this.injury = "none";
        this.safetyIssues.clear();
        this.medicalClearanceType = null;
        this.bypassEnabled = false;
        
        const form = document.getElementById('assessment-form');
        if (form) form.reset();
        
        document.querySelectorAll('.zone-button, .location-button, .injury-button').forEach(button => {
            button.classList.remove('selected');
        });
        
        // Reset injury selection to default
        const noneButton = document.querySelector('.injury-button[data-injury="none"]');
        if (noneButton) noneButton.classList.add('selected');
        
        document.querySelectorAll('input[name="medical-clearance"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        this.updateSelectedZonesList();
        this.updateContinueButton();
        document.getElementById('continue-step2').disabled = true;
        document.getElementById('continue-step3').disabled = true;
        document.getElementById('continue-step4').disabled = false;
        document.getElementById('proceed-with-clearance').disabled = true;
        
        document.querySelectorAll('.step-section > div:not(.step-header)').forEach(section => {
            if (section.id !== 'step1' && section.id !== 'step2' && section.id !== 'step3' && section.id !== 'step4') {
                section.classList.add('hidden');
            }
        });
        
        this.showStep(1);
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.scientificApp = new ScientificExerciseApp();
});
