// ╔═══════════════════════════════════════════════════════════════╗
// ║              CONFIGURACIÓN PERSONALIZABLE DEL SISTEMA         ║
// ╠═══════════════════════════════════════════════════════════════╣
// ║  Modifica estos valores para personalizar tu sistema          ║
// ╚═══════════════════════════════════════════════════════════════╝

const SYSTEM_CONFIG = {
    // ===== IDENTIDAD DEL SISTEMA =====
    brand: {
        name: "INVESTIGAOPF",           // Nombre del sistema
        shortName: "OPF",                   // Nombre corto para CLI
        version: "10.0",                    // Versión
        classification: "MÁXIMA",           // Nivel de clasificación
        tagline: "Sistema Avanzado de Generación de Prompts",
        company: "OPF Intelligence",        // Nombre de la empresa/organización
    },
    
    // ===== COLORES DEL TEMA =====
    colors: {
        primaryBg: "#000000",               // Fondo principal
        secondaryBg: "#0a0f1c",            // Fondo secundario
        tertiaryBg: "#131927",             // Fondo terciario
        accentPrimary: "#00ff88",          // Color de acento principal (verde)
        accentSecondary: "#0088ff",        // Color de acento secundario (azul)
        accentDanger: "#ff0040",           // Color de peligro (rojo)
        accentWarning: "#ffaa00",          // Color de advertencia (amarillo)
        textPrimary: "#ffffff",            // Texto principal
        textSecondary: "#94a3b8",          // Texto secundario
        borderColor: "#1e293b",            // Color de bordes
    },
    
    // ===== CONFIGURACIÓN DEL LOGO SVG =====
    logo: {
enabled: true,
type: "image",                      
size: 100,
animated: true,
imageUrl: "OPF sin fondo (2).png",  
textContent: "OPF",
subText: "INTELLIGENCE",
},
    
    // ===== MÉTRICAS Y ESTADÍSTICAS =====
    metrics: {
        showPrecision: true,                // Mostrar precisión
        showPromptCount: true,              // Mostrar contador de prompts
        showQuality: true,                  // Mostrar calidad
        showSavedTime: true,                // Mostrar tiempo ahorrado
        defaultPrecision: 98,               // Precisión inicial (%)
        defaultQuality: 96,                 // Calidad inicial (%)
    },

       
    // ===== PLANTILLAS PREDEFINIDAS =====
    // ===== PLANTILLAS PREDEFINIDAS =====
    templates: {
        enabled: true,
        items: [
            { id: 'investigacion', icon: '🕵️', name: 'Investigación', desc: 'Análisis profundo y recopilación de evidencias' },
            { id: 'forense', icon: '🔍', name: 'Análisis Forense', desc: 'Examen detallado de evidencias digitales/físicas' },
            { id: 'inteligencia', icon: '🎯', name: 'Inteligencia', desc: 'Análisis OSINT, HUMINT y GEOINT' },
            { id: 'corporativa', icon: '🏢', name: 'Investigación Corporativa', desc: 'Due diligence y análisis empresarial' },
            { id: 'fraudes', icon: '💳', name: 'Investigación de Fraudes', desc: 'Detección y análisis de actividades fraudulentas' },
            { id: 'digitalizacion', icon: '💻', name: 'Digitalización Oficina', desc: 'Checklist completo para modernizar la oficina' }
        ]
    },
    
    // ===== CONFIGURACIÓN DE FUNCIONALIDADES =====
    features: {
        showClassificationBadge: true,      // Mostrar badge de clasificación
        showStatusBar: true,                // Mostrar barra de estado
        enableHistory: true,                // Habilitar historial
        maxHistoryItems: 5,                 // Máximo de items en historial
        enableAnimations: true,             // Habilitar animaciones
        enableGridBackground: true,         // Habilitar fondo con grid animado
        enableGlowEffects: true,            // Habilitar efectos de brillo
        autoSave: true,                     // Guardar automáticamente
    },
    
    // ===== TEXTOS PERSONALIZABLES =====
    texts: {
        generatorTitle: "Configuración de la Investigación",
        templatesTitle: "Tipos de Investigación",
        metricsTitle: "Métricas Operativas",
        outputTitle: "Prompts de Investigación Generado",
        historyTitle: "Historial de Casos",
        generateButton: "🎯 Generar Prompt",
        clearButton: "🔄 Limpiar Campos",
        exampleButton: "📝 Cargar Ejemplo",
        copyButton: "📋 Copiar Prompt",
        emptyOutput: "El prompt de investigación aparecerá aquí...",
        emptyHistory: "El historial de casos aparecerá aquí después de generar prompts",
    },
    
    // ===== CONFIGURACIÓN DE API Y CLI =====
    api: {
        enabled: true,                      // Habilitar API
        cliPrefix: "OPF",                   // Prefijo para comandos CLI (ej: OPF.status())
        exposeGlobal: true,                 // Exponer API globalmente
    },
    
    // ===== CONFIGURACIÓN DE ROLES Y TONOS =====
    roles: [
        { value: 'detective', label: 'Detective Privado Senior' },
        { value: 'analista', label: 'Analista de Inteligencia' },
        { value: 'forense', label: 'Perito Forense Digital' },
        { value: 'corporativo', label: 'Investigador Corporativo' },
        { value: 'fraudes', label: 'Especialista en Fraudología' },
        { value: 'osint', label: 'Analista OSINT' },
        { value: 'seguridad', label: 'Especialista en Seguridad' },
    ],
    
    tones: [
        { value: 'profesional', label: 'Profesional y Formal' },
        { value: 'confidencial', label: 'Estrictamente Confidencial' },
        { value: 'tactico', label: 'Táctico Operativo' },
        { value: 'analitico', label: 'Analítico y Metódico' },
        { value: 'judicial', label: 'Judicializable' },
        { value: 'directo', label: 'Directo y Conciso' },
        { value: 'tecnico', label: 'Técnico Especializado' },
    ],

    digitalizacion: {
        categorias: [
            'Gestión Documental y Archivos',
            'Sistemas de Gestión de Casos', 
            'Seguridad y Copias de Seguridad',
            'Equipamiento Tecnológico',
            'Herramientas de Investigación',
            'Automatización y Eficiencia',
            'Protocolos de Seguridad Cibernética'
        ],
        checklistBase: [
            "Digitalizar expedientes y archivos físicos existentes",
            "Implementar sistema de gestión documental con OCR",
            "Establecer protocolos de indexación y búsqueda",
            "Crear sistema de retención y destrucción documental",
            "Implementar un sistema de gestión de casos (CMS) centralizado",
            "Configurar flujos de trabajo para diferentes tipos de casos",
            "Establecer sistema de permisos y acceso por roles",
            "Automatizar recordatorios y seguimiento de plazos",
            "Configurar sistema de copias de seguridad automáticas 3-2-1",
            "Implementar cifrado de datos sensibles",
            "Establecer política de recuperación ante desastres",
            "Realizar auditorías regulares de seguridad",
            "Actualizar equipos informáticos y periféricos",
            "Implementar estación de trabajo para análisis forense",
            "Modernizar equipos de vigilancia y captura",
            "Adquirir dispositivos móviles seguros para trabajo de campo",
            "Usar software especializado de análisis de datos",
            "Implementar herramientas OSINT avanzadas",
            "Utilizar software de transcripción automática de audio",
            "Configurar herramientas de análisis de redes sociales",
            "Implementar sistema de seguimiento de gastos y horas",
            "Automatizar generación de informes y facturas",
            "Configurar calendario digital compartido sincronizado",
            "Implementar sistema de gestión de tareas colaborativas",
            "Establecer protocolos de seguridad cibernética básicos",
            "Implementar autenticación de dos factores",
            "Configurar VPN para acceso remoto seguro",
            "Establecer política de contraseñas y actualizaciones",
            "Realizar formación en ciberseguridad para el equipo"
        ]
    }
};

// ===== NO MODIFICAR DEBAJO DE ESTA LÍNEA =====

// ========== APLICAR CONFIGURACIÓN ==========
function applyConfiguration() {
    const config = SYSTEM_CONFIG;
    
    // Aplicar colores CSS
    const root = document.documentElement;
    Object.entries(config.colors).forEach(([key, value]) => {
        const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--config-${cssVarName}`, value);
    });
    
    // Aplicar textos
    document.title = `${config.brand.name} - ${config.brand.tagline}`;
    document.getElementById('systemName').textContent = config.brand.name;
    document.getElementById('systemTagline').textContent = config.brand.tagline;
    
    // Aplicar badge de clasificación
    if (config.features.showClassificationBadge && config.brand.classification) {
        document.getElementById('classificationBadge').style.display = 'inline-block';
        document.getElementById('classificationLevel').textContent = config.brand.classification;
    }
    
    // Mostrar barra de estado
    if (config.features.showStatusBar) {
        document.getElementById('statusBar').style.display = 'flex';
    }
    
    // Aplicar grid de fondo
    if (config.features.enableGridBackground) {
        document.body.classList.add('grid-enabled');
    }
    
    // Aplicar textos personalizables
    document.getElementById('generatorTitle').textContent = config.texts.generatorTitle;
    document.getElementById('templatesTitle').textContent = config.texts.templatesTitle;
    document.getElementById('metricsTitle').textContent = config.texts.metricsTitle;
    document.getElementById('outputTitle').textContent = config.texts.outputTitle;
    document.getElementById('historyTitle').textContent = config.texts.historyTitle;
    document.getElementById('generateBtn').textContent = config.texts.generateButton;
    document.getElementById('clearBtn').textContent = config.texts.clearButton;
    document.getElementById('exampleBtn').textContent = config.texts.exampleButton;
    document.getElementById('output').setAttribute('data-placeholder', config.texts.emptyOutput);
    document.getElementById('emptyHistoryText').textContent = config.texts.emptyHistory;
    document.getElementById('loadingText').textContent = `${config.brand.name} generando prompt optimizado...`;
    
    // Ocultar historial si está deshabilitado
    if (!config.features.enableHistory) {
        document.getElementById('historyPanel').style.display = 'none';
    }
    
    // Generar logo
    generateLogo();
    
    // Generar opciones de roles y tonos
    generateSelects();
    
    // Generar plantillas
    generateTemplates();
    
    // Generar métricas
    generateMetrics();

     // Generar opciones de digitalización
     generateDigitalizacionOptions();
}

function generateLogo() {
    const logoContainer = document.getElementById('systemLogo');
    const config = SYSTEM_CONFIG.logo;
    
    if (!config.enabled) {
        logoContainer.style.display = 'none';
        return;
    }
    
    if (config.animated) {
        logoContainer.classList.add('animated');
    }
    
    logoContainer.style.width = config.size + 'px';
    logoContainer.style.height = config.size + 'px';
    
    if (config.type === 'image' && config.imageUrl) {
        logoContainer.innerHTML = `<img src="${config.imageUrl}" alt="${SYSTEM_CONFIG.brand.name}" style="width:100%;height:100%;">`;
    } else if (config.type === 'text') {
        logoContainer.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-weight:bold;">
                <div style="font-size:24px;color:var(--accent-primary)">${config.textContent}</div>
                ${config.subText ? `<div style="font-size:8px;color:var(--accent-secondary)">${config.subText}</div>` : ''}
            </div>
        `;
    } else {
        // Logo SVG por defecto
        logoContainer.innerHTML = `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:var(--accent-primary);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:var(--accent-secondary);stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGradient)" stroke-width="2" opacity="0.8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#logoGradient)" stroke-width="1" opacity="0.6"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#logoGradient)" stroke-width="0.5" opacity="0.4"/>
                <text x="50" y="45" font-family="SF Mono, Monaco, monospace" font-size="24" font-weight="bold" text-anchor="middle" fill="url(#logoGradient)">${config.textContent}</text>
                <text x="50" y="60" font-family="SF Mono, Monaco, monospace" font-size="6" text-anchor="middle" fill="var(--accent-primary)" opacity="0.8">${config.subText}</text>
                <path d="M 15 50 L 25 50" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
                <path d="M 75 50 L 85 50" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
                <path d="M 50 15 L 50 25" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
                <path d="M 50 75 L 50 85" stroke="url(#logoGradient)" stroke-width="2" opacity="0.6"/>
            </svg>
        `;
    }
}

function generateSelects() {
    const roleSelect = document.getElementById('role');
    const toneSelect = document.getElementById('tone');
    
    // Generar opciones de roles
    SYSTEM_CONFIG.roles.forEach(role => {
        const option = document.createElement('option');
        option.value = role.value;
        option.textContent = role.label;
        roleSelect.appendChild(option);
    });
    
    // Generar opciones de tonos
    SYSTEM_CONFIG.tones.forEach(tone => {
        const option = document.createElement('option');
        option.value = tone.value;
        option.textContent = tone.label;
        toneSelect.appendChild(option);
    });
}

function generateTemplates() {
    if (!SYSTEM_CONFIG.templates.enabled) {
        document.getElementById('templates').parentElement.style.display = 'none';
        return;
    }
    
    const templatesContainer = document.getElementById('templates');
    templatesContainer.innerHTML = '';
    
    SYSTEM_CONFIG.templates.items.forEach(template => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.addEventListener('click', () => selectTemplate(template.id, card));
        card.innerHTML = `
            <strong>${template.icon} ${template.name}</strong>
            <p style="font-size: 0.85rem; margin-top: 5px;">${template.desc}</p>
        `;
        templatesContainer.appendChild(card);
    });
}

function generateMetrics() {
    const metricsContainer = document.getElementById('metricsContainer');
    metricsContainer.innerHTML = '';
    
    const metrics = [
        { id: 'promptCount', label: 'Prompts Generados', value: '0', show: SYSTEM_CONFIG.metrics.showPromptCount },
        { id: 'avgQuality', label: 'Calidad Promedio', value: SYSTEM_CONFIG.metrics.defaultQuality + '%', show: SYSTEM_CONFIG.metrics.showQuality },
        { id: 'savedTime', label: 'Tiempo Ahorrado', value: '0h', show: SYSTEM_CONFIG.metrics.showSavedTime },
        { id: 'precision', label: `Precisión ${SYSTEM_CONFIG.brand.shortName}`, value: SYSTEM_CONFIG.metrics.defaultPrecision + '%', show: SYSTEM_CONFIG.metrics.showPrecision },
    ];
    
    metrics.forEach(metric => {
        if (metric.show) {
            const card = document.createElement('div');
            card.className = 'metric-card';
            card.innerHTML = `
                <div class="metric-value" id="${metric.id}">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
            `;
            metricsContainer.appendChild(card);
        }
    });
}

function generateDigitalizacionOptions() {
    const categoriasGrid = document.getElementById('categoriasGrid');
    categoriasGrid.innerHTML = '';
    
    SYSTEM_CONFIG.digitalizacion.categorias.forEach((categoria, index) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `
            <input type="checkbox" id="cat-${index}" checked>
            <label for="cat-${index}" style="display:inline; margin-left:8px;">${categoria}</label>
        `;
        categoriasGrid.appendChild(card);
    });
}

function toggleDigitalizacionPanel(isVisible) {
    const digitalizacionPanel = document.getElementById('digitalizacionOptions');
    if (digitalizacionPanel) {
        digitalizacionPanel.classList.toggle('active', !!isVisible);
    }
}

// ========== SISTEMA DE GENERACIÓN DE PROMPTS ==========
const PromptSystem = {
    count: 0,
    history: [],
    selectedTemplate: null,
    
    templates: {
        investigacion: {
            objective: `Realizar investigación exhaustiva con metodología ${SYSTEM_CONFIG.brand.name}`,
            context: `Caso que requiere análisis profundo, recopilación de evidencias y generación de reporte ejecutivo siguiendo protocolos ${SYSTEM_CONFIG.brand.shortName}`,
            role: 'detective',
            tone: 'profesional'
        },
        forense: {
            objective: 'Análisis forense digital y preservación de evidencias',
            context: `Examen detallado de dispositivos digitales, preservación de cadena de custodia y análisis forense siguiendo estándares ${SYSTEM_CONFIG.brand.shortName}`,
            role: 'forense',
            tone: 'tecnico'
        },
        inteligencia: {
            objective: 'Recopilación y análisis de inteligencia OSINT/HUMINT',
            context: `Operación de inteligencia que requiere análisis de fuentes abiertas, verificación de información y generación de inteligencia accionable con metodología ${SYSTEM_CONFIG.brand.shortName}`,
            role: 'osint',
            tone: 'confidencial'
        },
        corporativa: {
            objective: 'Due diligence e investigación corporativa',
            context: `Investigación empresarial que requiere análisis de antecedentes, verificación de información corporativa y evaluación de riesgos con estándares ${SYSTEM_CONFIG.brand.shortName}`,
            role: 'corporativo',
            tone: 'profesional'
        },
        fraudes: {
            objective: 'Investigación de actividades fraudulentas',
            context: `Análisis de patrones sospechosos, detección de fraudes y recopilación de evidencias para procedimientos legales con prompts ${SYSTEM_CONFIG.brand.shortName}`,
            role: 'fraudes',
            tone: 'analitico'
        },
        digitalizacion: {
            objective: `Plan de digitalización y modernización para oficina de investigaciones`,
            context: `Necesito un plan completo y personalizado para digitalizar y modernizar todos los aspectos de una oficina de detective privado, incluyendo gestión documental, sistemas tecnológicos, seguridad y herramientas de investigación`,
            role: 'consultor-tecnologico',
            tone: 'practico'
        }
        
    }
};

function generatePrompt() {
    const objective = document.getElementById('objective').value;
    const context = document.getElementById('context').value;
    const role = document.getElementById('role').value;
    const tone = document.getElementById('tone').value;
    const examples = document.getElementById('examples').value;
    const useDigitalizacion = PromptSystem.selectedTemplate === 'digitalizacion';

    if (!objective || !context) {
        alert(`Por favor completa al menos el objetivo y contexto para ${SYSTEM_CONFIG.brand.name}`);
        return;
    }

    // Mostrar loading
    document.getElementById('loading').classList.add('active');
    document.getElementById('output').style.display = 'none';

    setTimeout(() => {
        const prompt = useDigitalizacion
            ? buildDigitalizacionPrompt({ objective, context })
            : buildPrompt({ objective, context, role, tone, examples });

        displayPrompt(prompt);
        saveToHistory(prompt);
        updateMetrics();

        // Ocultar loading
        document.getElementById('loading').classList.remove('active');
        document.getElementById('output').style.display = 'block';
    }, 1500);
}

function buildPrompt(params) {
    const roleDesc = SYSTEM_CONFIG.roles.find(r => r.value === params.role);
    const toneDesc = SYSTEM_CONFIG.tones.find(t => t.value === params.tone);

    let prompt = `## PROMPT ${SYSTEM_CONFIG.brand.name} v${SYSTEM_CONFIG.brand.version}\n`;
    if (SYSTEM_CONFIG.brand.classification) {
        prompt += `## CLASIFICACION: ${SYSTEM_CONFIG.brand.classification}\n`;
    }
    prompt += `\n`;
    
    prompt += `### ROL Y CERTIFICACION DEL INVESTIGADOR\n`;
    prompt += `Actua como ${roleDesc ? roleDesc.label.toLowerCase() : params.role} especializado en ${params.objective.toLowerCase()}.\n\n`;
    
    prompt += `### CONTEXTO OPERACIONAL DEL CASO\n`;
    prompt += `${params.context}\n\n`;
    
    prompt += `### OBJETIVO PRINCIPAL DE LA INVESTIGACION\n`;
    prompt += `${params.objective}\n\n`;
    
    prompt += `### PROTOCOLO DE COMUNICACION Y REPORTE\n`;
    prompt += `Manten un protocolo ${toneDesc ? toneDesc.label.toLowerCase() : params.tone}.\n\n`;

    if (params.examples) {
        prompt += `### EVIDENCIAS Y PISTAS DISPONIBLES\n`;
        prompt += `${params.examples}\n\n`;
    }

    prompt += `### PROMPT DE INVESTIGACION ESTRUCTURADO\n`;
    prompt += `- **Fase 1**: Recopilacion y preservacion de evidencias\n`;
    prompt += `- **Fase 2**: Analisis forense y verificacion de informacion\n`;
    prompt += `- **Fase 3**: Correlacion de datos y generacion de inteligencia\n`;
    prompt += `- **Fase 4**: Elaboracion de reporte ejecutivo y recomendaciones\n`;
    prompt += `- **Fase 5**: Preservacion de cadena de custodia documental\n\n`;

    prompt += `### CRITERIOS DE EXITO OPERATIVO\n`;
    prompt += `- **Precision**: Datos verificables y evidencias solidas\n`;
    prompt += `- **Exhaustividad**: Cobertura completa del objetivo\n`;
    prompt += `- **Trazabilidad**: Cadena de custodia documentada\n`;
    prompt += `- **Accionabilidad**: Recomendaciones ejecutables\n\n`;

    prompt += `### EJECUCION DEL PROMPT\n`;
    prompt += `Proceda con la investigacion siguiendo los protocolos establecidos. `;
    prompt += `Mantenga los mas altos estandares de confidencialidad y precision forense.\n\n`;
    
    prompt += `---\n`;
    prompt += `*Generado por ${SYSTEM_CONFIG.brand.name} v${SYSTEM_CONFIG.brand.version} | ${new Date().toLocaleString()}*`;

    return prompt;
}
function buildDigitalizacionPrompt(params) {
    const officeSize = document.getElementById('officeSize').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline').value;
    
    // Obtener categorías seleccionadas
    const selectedCategorias = [];
    SYSTEM_CONFIG.digitalizacion.categorias.forEach((categoria, index) => {
        if (document.getElementById(`cat-${index}`).checked) {
            selectedCategorias.push(categoria);
        }
    });

    let prompt = `## 💻 PLAN DE DIGITALIZACIÓN ${SYSTEM_CONFIG.brand.name}\n`;
    prompt += `## OFICINA DE INVESTIGACIONES PRIVADAS\n\n`;
    
    prompt += `### 📊 CONTEXTO Y PARÁMETROS\n`;
    prompt += `- **Tamaño de oficina**: ${document.getElementById('officeSize').options[document.getElementById('officeSize').selectedIndex].text}\n`;
    prompt += `- **Presupuesto**: ${document.getElementById('budget').options[document.getElementById('budget').selectedIndex].text}\n`;
    prompt += `- **Timeline**: ${document.getElementById('timeline').options[document.getElementById('timeline').selectedIndex].text}\n`;
    prompt += `- **Contexto específico**: ${params.context}\n\n`;

    prompt += `### 🎯 OBJETIVO ESTRATÉGICO\n`;
    prompt += `${params.objective}\n\n`;

    prompt += `### ✅ CHECKLIST COMPLETO DE DIGITALIZACIÓN\n\n`;

    // Agrupar items del checklist por categorías seleccionadas
    selectedCategorias.forEach(categoria => {
        prompt += `#### ${categoria.toUpperCase()}\n`;
        
        SYSTEM_CONFIG.digitalizacion.checklistBase.forEach(item => {
            // Asignar items a categorías (simplificado - en una implementación real sería más sofisticado)
            if (
                (categoria.includes('Documental') && (item.includes('expedientes') || item.includes('documental'))) ||
                (categoria.includes('Gestión de Casos') && (item.includes('gestión de casos') || item.includes('CMS'))) ||
                (categoria.includes('Seguridad') && (item.includes('seguridad') || item.includes('backup') || item.includes('ciberseguridad'))) ||
                (categoria.includes('Equipamiento') && (item.includes('equipos') || item.includes('estación de trabajo'))) ||
                (categoria.includes('Herramientas') && (item.includes('software') || item.includes('OSINT') || item.includes('transcripción'))) ||
                (categoria.includes('Automatización') && (item.includes('automatizar') || item.includes('seguimiento') || item.includes('calendario'))) ||
                (categoria.includes('Protocolos') && (item.includes('protocolos') || item.includes('autenticación') || item.includes('VPN')))
            ) {
                prompt += `- [ ] ${item}\n`;
            }
        });
        prompt += `\n`;
    });

    prompt += `### 🛠️ RECOMENDACIONES ESPECÍFICAS\n`;
    prompt += `#### Para presupuesto ${budget}:\n`;
    
    if (budget === 'bajo') {
        prompt += `- Enfocar en soluciones open-source y gratuitas\n`;
        prompt += `- Priorizar digitalización documental básica\n`;
        prompt += `- Implementar backups en la nube con servicios gratuitos\n`;
    } else if (budget === 'medio') {
        prompt += `- Invertir en CMS especializado para investigadores\n`;
        prompt += `- Adquirir herramientas OSINT profesionales\n`;
        prompt += `- Implementar soluciones de seguridad robustas\n`;
    } else {
        prompt += `- Sistema completo de gestión integral\n`;
        prompt += `- Equipamiento de alta gama para análisis forense\n`;
        prompt += `- Soluciones empresariales con soporte 24/7\n`;
    }
    prompt += `\n`;

    prompt += `### 📅 PLAN DE IMPLEMENTACIÓN POR FASES\n`;
    if (timeline === 'inmediato') {
        prompt += `**Fase 1 (Días 1-7)**: Digitalización urgente de documentos críticos\n`;
        prompt += `**Fase 2 (Días 8-15)**: Configuración de backups y seguridad básica\n`;
        prompt += `**Fase 3 (Días 16-30)**: Implementación de herramientas esenciales\n`;
    } else if (timeline === 'corto') {
        prompt += `**Mes 1**: Evaluación y planificación detallada\n`;
        prompt += `**Mes 2**: Implementación de sistemas core\n`;
        prompt += `**Mes 3**: Optimización y formación del equipo\n`;
    } else if (timeline === 'medio') {
        prompt += `**Trimestre 1**: Infraestructura y sistemas básicos\n`;
        prompt += `**Trimestre 2**: Herramientas especializadas y automatización\n`;
        prompt += `**Trimestre 3**: Seguridad avanzada y optimización\n`;
    } else {
        prompt += `**Semestre 1**: Transformación digital completa\n`;
        prompt += `**Semestre 2**: Maduración y escalamiento de sistemas\n`;
    }
    prompt += `\n`;

    prompt += `### 💰 ESTIMACIÓN DE COSTOS\n`;
    if (budget === 'bajo') {
        prompt += `- **Inversión estimada**: €500 - €2,000\n`;
        prompt += `- **Principales costos**: Software básico, almacenamiento cloud, formación\n`;
    } else if (budget === 'medio') {
        prompt += `- **Inversión estimada**: €2,000 - €10,000\n`;
        prompt += `- **Principales costos**: Software profesional, hardware, consultoría\n`;
    } else {
        prompt += `- **Inversión estimada**: €10,000+\n`;
        prompt += `- **Principales costos**: Sistemas enterprise, equipamiento especializado, desarrollo personalizado\n`;
    }
    prompt += `\n`;

    prompt += `### 📈 MÉTRICAS DE ÉXITO\n`;
    prompt += `- Reducción del 60% en tiempo de gestión documental\n`;
    prompt += `- Incremento del 40% en capacidad de análisis\n`;
    prompt += `- Mejora del 80% en seguridad de datos\n`;
    prompt += `- Ahorro de 15+ horas semanales en tareas administrativas\n\n`;

    prompt += `---\n`;
    prompt += `*Plan generado por ${SYSTEM_CONFIG.brand.name} v${SYSTEM_CONFIG.brand.version} | ${new Date().toLocaleString()}*`;

    return prompt;
}



function displayPrompt(prompt) {
    const outputArea = document.getElementById('output');
    outputArea.innerHTML = `
        <button class="copy-btn" onclick="copyPrompt()">${SYSTEM_CONFIG.texts.copyButton}</button>
        <pre style="white-space: pre-wrap; font-family: inherit; margin: 0; line-height: 1.6;">${escapeHtml(prompt)}</pre>
    `;
}

function copyPrompt() {
    const promptText = document.getElementById('output').querySelector('pre').textContent;
    navigator.clipboard.writeText(promptText).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Copiado!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

function clearForm() {
    document.getElementById('objective').value = '';
    document.getElementById('context').value = '';
    document.getElementById('role').selectedIndex = 0;
    document.getElementById('tone').selectedIndex = 0;
    document.getElementById('examples').value = '';
    document.getElementById('output').innerHTML = '';
    PromptSystem.selectedTemplate = null;
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    toggleDigitalizacionPanel(false);
}

function loadExample() {
    document.getElementById('objective').value = 'Investigación de antecedentes corporativos y due diligence';
    document.getElementById('context').value = 'Empresa de tecnología solicitando due diligence completo de potencial socio comercial. Sector: Fintech. Mercado: Internacional. Requiere verificación de antecedentes legales, financieros y reputacionales.';
    document.getElementById('role').value = 'corporativo';
    document.getElementById('tone').value = 'profesional';
    document.getElementById('examples').value = 'Incluir análisis de registros mercantiles, verificaciones de antecedentes penales, análisis de redes sociales corporativas, y evaluación de riesgos reputacionales.';
}

function selectTemplate(templateName, cardElement) {
    const template = PromptSystem.templates[templateName];
    if (template) {
        document.getElementById('objective').value = template.objective;
        document.getElementById('context').value = template.context;
        document.getElementById('role').value = template.role;
        document.getElementById('tone').value = template.tone;
        PromptSystem.selectedTemplate = templateName;

        // Actualizar visual
        document.querySelectorAll('.template-card').forEach(card => {
            card.classList.remove('selected');
        });
        if (cardElement) {
            cardElement.classList.add('selected');
        }
        toggleDigitalizacionPanel(templateName === 'digitalizacion');
    }
}

function saveToHistory(prompt) {
    if (!SYSTEM_CONFIG.features.enableHistory) return;
    
    const historyItem = {
        prompt: prompt,
        timestamp: new Date(),
        objective: document.getElementById('objective').value,
        system: SYSTEM_CONFIG.brand.name
    };

    PromptSystem.history.unshift(historyItem);
    if (PromptSystem.history.length > SYSTEM_CONFIG.features.maxHistoryItems) {
        PromptSystem.history = PromptSystem.history.slice(0, SYSTEM_CONFIG.features.maxHistoryItems);
    }

    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    if (!SYSTEM_CONFIG.features.enableHistory) return;
    
    const historyContainer = document.getElementById('history');
    if (PromptSystem.history.length === 0) {
        historyContainer.innerHTML = `
            <p style="color: var(--text-secondary); text-align: center; padding: 20px;">
                ${SYSTEM_CONFIG.texts.emptyHistory}
            </p>
        `;
        return;
    }

    historyContainer.innerHTML = PromptSystem.history.map((item, index) => `
        <div class="history-item" onclick="loadFromHistory(${index})">
            <strong>${escapeHtml(item.objective)}</strong>
            <div class="timestamp">${item.timestamp.toLocaleString()} | ${item.system}</div>
        </div>
    `).join('');
}

function loadFromHistory(index) {
    const item = PromptSystem.history[index];
    if (item) {
        displayPrompt(item.prompt);
    }
}

function updateMetrics() {
    PromptSystem.count++;
    
    if (SYSTEM_CONFIG.metrics.showPromptCount) {
        const countElement = document.getElementById('promptCount');
        if (countElement) countElement.textContent = PromptSystem.count;
    }
    
    // Simular calidad basada en completitud del formulario
    const fields = ['objective', 'context', 'examples'];
    let filledFields = 0;
    fields.forEach(field => {
        if (document.getElementById(field).value) filledFields++;
    });
    
    if (SYSTEM_CONFIG.metrics.showQuality) {
        const quality = 85 + (filledFields * 3);
        const qualityElement = document.getElementById('avgQuality');
        if (qualityElement) qualityElement.textContent = quality + '%';
    }

    // Actualizar precisión
    if (SYSTEM_CONFIG.metrics.showPrecision) {
        const precision = SYSTEM_CONFIG.metrics.defaultPrecision + Math.floor(Math.random() * 3);
        const precisionElement = document.getElementById('precision');
        if (precisionElement) precisionElement.textContent = precision + '%';
    }

    // Calcular tiempo ahorrado
    if (SYSTEM_CONFIG.metrics.showSavedTime) {
        const minutesSaved = PromptSystem.count * 15;
        const hours = Math.floor(minutesSaved / 60);
        const minutes = minutesSaved % 60;
        const timeElement = document.getElementById('savedTime');
        if (timeElement) {
            timeElement.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========== SISTEMA MAESTRO ==========
const MasterSystem = {
    initialize: async function() {
        console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                    ${SYSTEM_CONFIG.brand.name.padEnd(45)} ║
║              SISTEMA DE COMANDO Y CONTROL MAESTRO             ║
${SYSTEM_CONFIG.brand.classification ? 
`║                  CLASIFICACIÓN: ${SYSTEM_CONFIG.brand.classification.padEnd(30)} ║
╠═══════════════════════════════════════════════════════════════╣` : 
'╠═══════════════════════════════════════════════════════════════╣'}
║  Inicializando sistemas...                                    ║
╚═══════════════════════════════════════════════════════════════╝
        `);

        if (SYSTEM_CONFIG.api.enabled) {
            this.setupCLI();
        }
        
        console.log(`✅ ${SYSTEM_CONFIG.brand.name} completamente operativo`);
        return true;
    },

    setupCLI: function() {
        const cliName = SYSTEM_CONFIG.api.cliPrefix;
        
        window[cliName] = {
            generatePrompt: () => generatePrompt(),
            clearForm: () => clearForm(),
            loadExample: () => loadExample(),
            getHistory: () => PromptSystem.history,
            getMetrics: () => ({
                prompts: PromptSystem.count,
                history: PromptSystem.history.length
            }),
            help: () => {
                console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                  ${SYSTEM_CONFIG.brand.name} - COMANDOS              ║
╠═══════════════════════════════════════════════════════════════╣
║  ${cliName}.generatePrompt() - Generar prompt                   ║
║  ${cliName}.clearForm()      - Limpiar formulario               ║
║  ${cliName}.loadExample()    - Cargar ejemplo                   ║
║  ${cliName}.getHistory()     - Ver historial                    ║
║  ${cliName}.getMetrics()     - Ver métricas                     ║
║  ${cliName}.help()           - Mostrar esta ayuda               ║
╚═══════════════════════════════════════════════════════════════╝
                `);
            }
        };

        console.log(`💻 CLI configurada. Use "${cliName}.help()" para ver comandos`);
    }
};

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', async () => {
    // Aplicar configuración
    applyConfiguration();
    
    // Inicializar sistema maestro
    await MasterSystem.initialize();
    
    // Cargar datos guardados
    if (SYSTEM_CONFIG.features.autoSave) {
        const savedData = localStorage.getItem(`${SYSTEM_CONFIG.brand.shortName}_data`);
        if (savedData) {
            const data = JSON.parse(savedData);
            PromptSystem.count = data.count || 0;
            PromptSystem.history = data.history || [];
            updateMetrics();
            updateHistoryDisplay();
        }
    }

    console.log(`🎮 ${SYSTEM_CONFIG.brand.name} v${SYSTEM_CONFIG.brand.version} - Sistema cargado completamente`);
});

// Guardar datos antes de cerrar
if (SYSTEM_CONFIG.features.autoSave) {
    window.addEventListener('beforeunload', () => {
        localStorage.setItem(`${SYSTEM_CONFIG.brand.shortName}_data`, JSON.stringify({
            count: PromptSystem.count,
            history: PromptSystem.history
        }));
    });
}

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'Enter':
                e.preventDefault();
                generatePrompt();
                break;
            case 'l':
                e.preventDefault();
                clearForm();
                break;
        }
    }
});
