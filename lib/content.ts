import { Phase } from "./cycle";

export type Category =
  | "hormonas"
  | "nutricion"
  | "ejercicio"
  | "emociones"
  | "fertilidad"
  | "suplementos";

export interface ContentItem {
  title: string;
  body: string;
  tips: string[];
  highlight?: string; // optional callout box
}

export interface PhaseContent {
  hormonas: ContentItem;
  nutricion: ContentItem;
  ejercicio: ContentItem;
  emociones: ContentItem;
  fertilidad: ContentItem;
  suplementos: ContentItem;
}

export const CATEGORY_META: Record<
  Category,
  { label: string; icon: string; accent: string }
> = {
  hormonas: { label: "Hormonas", icon: "🧬", accent: "#FF1FA3" },
  nutricion: { label: "Nutrición", icon: "🥗", accent: "#FF6A00" },
  ejercicio: { label: "Ejercicio", icon: "⚡", accent: "#C97EFF" },
  emociones: { label: "Emociones", icon: "🌊", accent: "#FF1FA3" },
  fertilidad: { label: "Fertilidad", icon: "✨", accent: "#FFE94D" },
  suplementos: { label: "Suplementos", icon: "💊", accent: "#4CAF50" },
};

export const PHASE_CONTENT: Record<Phase, PhaseContent> = {
  menstrual: {
    hormonas: {
      title: "Estrógeno y progesterona en su mínimo",
      body: "Durante la menstruación, tanto el estrógeno como la progesterona están en sus niveles más bajos. Esto es lo que activa el sangrado y genera esa sensación de poca energía y mayor sensibilidad. No es debilidad — es biología.",
      tips: [
        "El dolor menstrual es causado por prostaglandinas, compuestos que contraen el útero.",
        "El calor ayuda a relajar los músculos uterinos y reduce el dolor.",
        "Los niveles bajos de estrógeno pueden afectar tu estado de ánimo — es normal sentirte más hacia adentro.",
      ],
      highlight: "Tu cuerpo está haciendo un trabajo enorme. El descanso no es opcional — es parte del proceso.",
    },
    nutricion: {
      title: "Reponer hierro y reducir inflamación",
      body: "Perdés hierro con el sangrado, así que priorizá alimentos ricos en hierro. Combinados con vitamina C para mejor absorción. Reducí alimentos inflamatorios como azúcar refinada, alcohol y comida ultra-procesada que pueden empeorar los cólicos.",
      tips: [
        "Hierro: lentejas, espinaca, carne roja magra, tofu, semillas de zapallo.",
        "Vitamina C para absorber el hierro: pimiento rojo, naranja, kiwi, frutillas.",
        "Omega-3: salmón, sardinas, nueces — reduce inflamación y cólicos.",
        "Evitá la cafeína en exceso — puede intensificar los cólicos.",
      ],
      highlight: "El chocolate negro +70% cacao tiene magnesio y antioxidantes — uno de los pocos antojos que tiene respaldo.",
    },
    ejercicio: {
      title: "Movimiento suave y consciente",
      body: "No es momento de entrenamientos intensos. Tu cuerpo está trabajando duro internamente. El movimiento suave ayuda a circular la sangre, reduce cólicos y mejora el estado de ánimo sin agotar tus reservas.",
      tips: [
        "Yoga restaurativo o yin yoga: ideal para los primeros días.",
        "Caminatas suaves de 20-30 minutos: activan endorfinas sin sobrecargar.",
        "Estiramientos de cadera y zona lumbar para aliviar el dolor.",
        "Si el flujo es muy intenso, día 1 y 2 son para descansar. Sin culpa.",
      ],
      highlight: "Escuchá tu cuerpo. Si necesitás quedarte quieta, quedarte quieta ES hacer algo.",
    },
    emociones: {
      title: "Introversión, claridad y soltar",
      body: "La caída hormonal puede traer irritabilidad, tristeza o una sensación de estar al límite. Pero esta fase también tiene algo poderoso: una claridad brutal sobre lo que querés y lo que no. Es un buen momento para reflexionar, no para tomar decisiones grandes.",
      tips: [
        "Journaling: escribí sin filtro lo que sentís. No lo edites.",
        "Ponele límites al calendario — cancelar planes no es falla social.",
        "Si llorás 'sin razón', esa es la razón: tu cuerpo procesa mucho internamente.",
        "Evitá conversaciones difíciles importantes en los días más intensos.",
      ],
      highlight: "Lo que sospechás en tu fase menstrual sobre tu vida suele ser verdad. Anotalo, pero esperá para actuar.",
    },
    fertilidad: {
      title: "Fertilidad muy baja",
      body: "Durante la menstruación, la probabilidad de quedar embarazada es muy baja pero no imposible. El óvulo del ciclo anterior ya no está. Sin embargo, como los espermatozoides pueden vivir hasta 5 días, si ovulás muy temprano en tu ciclo, existe una chance mínima.",
      tips: [
        "Si buscás un embarazo, esta no es tu ventana fértil.",
        "Si evitás un embarazo, seguí usando método anticonceptivo.",
        "El primer día del período marca el Día 1 del nuevo ciclo.",
      ],
      highlight: "Fertilidad actual: muy baja. Tu ventana fértil comienza aproximadamente en el día " + "{{fertileStart}}" + " de tu ciclo.",
    },
    suplementos: {
      title: "Hierro, magnesio y omega-3",
      body: "Esta es la fase donde los suplementos tienen más impacto directo. Reponer lo que el cuerpo pierde y reducir la inflamación marca una diferencia real en cómo te sentís.",
      tips: [
        "Hierro: especialmente si tu flujo es abundante. Tomalo con vitamina C.",
        "Magnesio: reduce cólicos, mejora el sueño y el estado de ánimo. Forma glicinato o citrato.",
        "Omega-3: reduce prostaglandinas inflamatorias que causan cólicos.",
        "Vitamina D: muchas personas con cólicos intensos tienen deficiencia.",
        "Evitá el calcio al mismo tiempo que el hierro — compiten por absorción.",
      ],
      highlight: "El magnesio glicinato tomado antes de dormir es uno de los suplementos con mejor evidencia para cólicos y sueño en esta fase.",
    },
  },

  folicular: {
    hormonas: {
      title: "El estrógeno empieza a subir",
      body: "Los folículos en los ovarios empiezan a madurar y producen estrógeno de forma creciente. Esta hormona es tu aliada: mejora el humor, la energía, la memoria, la piel y la libido. El cerebro literalmente funciona mejor con estrógeno alto.",
      tips: [
        "El estrógeno alto aumenta la serotonina — de ahí el buen humor de esta fase.",
        "La memoria verbal y la velocidad de procesamiento mejoran con estrógeno alto.",
        "La piel tiende a verse más luminosa y el pelo más brillante.",
        "La testosterona también sube levemente, aumentando la confianza.",
      ],
      highlight: "Esta es tu fase de 'recarga'. Todo lo que sembrás acá — hábitos, proyectos, conexiones — tiene más chances de prosperar.",
    },
    nutricion: {
      title: "Carbohidratos complejos y fermentados",
      body: "Tu energía está subiendo y tu metabolismo es más eficiente. Es un buen momento para incorporar alimentos fermentados que apoyan el metabolismo del estrógeno, y carbohidratos complejos para sostener la energía creciente.",
      tips: [
        "Fermentados: kéfir, yogur natural, chucrut, kimchi, kombucha.",
        "Crucíferas: brócoli, coliflor, repollito de Bruselas — ayudan a metabolizar el estrógeno.",
        "Semillas de lino: fitoestrógenos que apoyan el balance hormonal.",
        "Legumbres: lentejas, garbanzos — energía sostenida.",
        "Evitá restricciones calóricas severas en esta fase — tu cuerpo las procesa bien ahora.",
      ],
      highlight: "Fase de semillas: incorporá semillas de lino y de zapallo en tu dieta esta semana. Apoyan la producción hormonal.",
    },
    ejercicio: {
      title: "Subí la intensidad — tu cuerpo puede más",
      body: "El estrógeno mejora la fuerza muscular, la coordinación y la recuperación. Es el mejor momento para entrenamientos más exigentes, aprender movimientos nuevos y romper tus marcas. Tu umbral de dolor también es más alto ahora.",
      tips: [
        "HIIT, crossfit, running: tu resistencia cardiovascular está en alza.",
        "Fuerza y pesas: el estrógeno aumenta la síntesis de proteínas musculares.",
        "Clases nuevas o desafíos técnicos: la coordinación y el aprendizaje motor están optimizados.",
        "Aprovechá para establecer rutinas — el cuerpo las incorpora mejor ahora.",
      ],
      highlight: "Tus músculos se recuperan más rápido en esta fase. Podés entrenar días consecutivos sin tanto desgaste.",
    },
    emociones: {
      title: "Curiosidad, optimismo y apertura",
      body: "El estrógeno alto trae claridad mental, optimismo y ganas de conectar. Es una fase naturalmente extrovertida: las conversaciones fluyen, las ideas aparecen, el futuro se ve con más esperanza. Aprovechá para las cosas que requieren energía social.",
      tips: [
        "Reuniones importantes, presentaciones, networking: tu momento.",
        "Arrancá proyectos nuevos — la motivación es alta y genuina.",
        "Tu empatía es más alta — buen momento para conversaciones difíciles pendientes.",
        "El FOMO puede ser intenso: aprendé a decir que no aunque te cueste más que en otras fases.",
      ],
      highlight: "La energía de la fase folicular es real pero finita. No la malgastes en compromisos que no querés — ahorrá algo para cuando baje.",
    },
    fertilidad: {
      title: "Fertilidad aumentando",
      body: "A medida que los folículos maduran, la fertilidad va aumentando hacia la ovulación. El moco cervical empieza a volverse más transparente y elástico — una señal natural de que te estás acercando a tu ventana fértil.",
      tips: [
        "El moco cervical cambia: de cremoso/blanco a transparente y elástico como clara de huevo.",
        "La libido generalmente aumenta en esta fase — parte del diseño evolutivo.",
        "Si buscás un embarazo: empezá a prestar atención a las señales del cuerpo.",
        "Si evitás un embarazo: no descuides el método anticonceptivo.",
      ],
      highlight: "La ventana fértil se acerca. Los días previos a la ovulación son casi tan fértiles como el día mismo.",
    },
    suplementos: {
      title: "B6, zinc y semillas",
      body: "En la fase folicular el cuerpo está en modo construcción. Los nutrientes que apoyan la producción hormonal y la energía celular son los protagonistas.",
      tips: [
        "Zinc: apoya la maduración del folículo. En semillas de zapallo, mariscos, carne.",
        "Vitamina B6: regula el estado de ánimo y apoya la síntesis hormonal.",
        "Semillas de lino (1 cda/día): fitoestrógenos suaves que apoyan esta fase.",
        "Complejo B: energía sostenida durante el día.",
        "Vitamina C: antioxidante que apoya la salud ovárica.",
      ],
      highlight: "Protocolo de rotación de semillas: lino y zapallo en la fase folicular. Sésamo y girasol en la lútea.",
    },
  },

  ovulatoria: {
    hormonas: {
      title: "Pico de estrógeno, LH y testosterona",
      body: "La hormona luteinizante (LH) dispara su pico y desencadena la ovulación. El estrógeno llega a su máximo y la testosterona sube brevemente. Esta combinación crea tu momento de mayor energía, atractivo social y confianza del mes.",
      tips: [
        "La LH en pico provoca la liberación del óvulo — dura aproximadamente 24 horas.",
        "La testosterona alta aumenta la libido, la asertividad y la motivación.",
        "El estrógeno en su pico mejora la fluidez verbal y la capacidad de persuasión.",
        "Podés sentir un leve dolor en un lado del abdomen — es la ovulación (mittelschmerz).",
      ],
      highlight: "Tu cuerpo está en su momento biológico más poderoso. Lo que sentís de confianza ahora es real — no es ego.",
    },
    nutricion: {
      title: "Antioxidantes y fibra para apoyar la ovulación",
      body: "La ovulación genera inflamación controlada. Los antioxidantes ayudan a manejarla. La fibra apoya la eliminación del exceso de estrógeno. Mantené una alimentación variada y colorida.",
      tips: [
        "Antioxidantes: berries, tomates, espárragos, pimientos de colores.",
        "Fibra: vegetales, granos enteros, legumbres — eliminan el exceso hormonal.",
        "Proteína magra: pollo, pescado, huevos — apoyan la síntesis hormonal.",
        "Hidratación: el moco cervical depende de que estés bien hidratada.",
        "Alimentos antiinflamatorios: cúrcuma, jengibre, ajo.",
      ],
      highlight: "Comé de todos los colores esta semana. Cada pigmento vegetal es un antioxidante distinto.",
    },
    ejercicio: {
      title: "Tu pico de rendimiento físico",
      body: "La combinación de estrógeno, testosterona y LH crea la ventana de mayor rendimiento deportivo del ciclo. Tu fuerza, resistencia y coordinación están en su punto más alto. Ideal para competencias, pruebas físicas o romper récords personales.",
      tips: [
        "Fuerza máxima: es el mejor momento para cargas pesadas.",
        "Cardio intenso: tu VO2 max está en alza.",
        "Deportes de equipo y actividades con otras personas: la energía social te potencia.",
        "Ojo con las lesiones: el estrógeno alto puede afectar la laxitud de los ligamentos.",
      ],
      highlight: "Si tenés una competencia, prueba física o algo importante, intentá agendarlo en esta ventana.",
    },
    emociones: {
      title: "Carisma, conexión y presencia",
      body: "Estás en tu punto de máxima sociabilidad y atractivo interpersonal. Las conversaciones fluyen, la gente te busca, te sentís presente y segura. Es un buen momento para liderar, presentar proyectos, o tener conversaciones que requieren carisma y convicción.",
      tips: [
        "Presentaciones, pitches, negociaciones: tu momento de brillar.",
        "Citas, primeras impresiones, eventos sociales: el carisma está al máximo.",
        "Tu voz suena diferente — estudios muestran que el tono sube y se vuelve más atractivo.",
        "Cuidado: la confianza alta puede llevar a compromisos impulsivos. Chequeá antes de decir que sí a todo.",
      ],
      highlight: "Lo que te parece fácil ahora puede requerir el doble de energía en otras fases. Delegá, liderá, conectá.",
    },
    fertilidad: {
      title: "Tu ventana fértil — fertilidad máxima",
      body: "Estás en tu momento de mayor fertilidad. El óvulo fue liberado y tiene una vida de 12-24 horas. Los espermatozoides pueden vivir hasta 5 días, por eso los días previos a la ovulación también son fértiles.",
      tips: [
        "El moco cervical ahora es transparente, elástico y abundante — como clara de huevo cruda.",
        "Si buscás quedar embarazada: este es el momento. Tener relaciones cada 1-2 días.",
        "Si evitás un embarazo: máxima precaución en estos días.",
        "Tests de ovulación (LH): el pico positivo indica que la ovulación ocurrirá en 24-48 hs.",
        "La temperatura basal sube 0.2°C después de la ovulación.",
      ],
      highlight: "Fertilidad: MÁXIMA. El óvulo está disponible por 12-24 horas. Los días previos también son fértiles.",
    },
    suplementos: {
      title: "Antioxidantes para apoyar la ovulación",
      body: "La ovulación es un proceso inflamatorio controlado. Los antioxidantes protegen al óvulo y apoyan su liberación saludable.",
      tips: [
        "CoQ10: mejora la calidad del óvulo — especialmente importante si buscás embarazo.",
        "Vitamina E: antioxidante liposoluble que protege al óvulo.",
        "Vitamina C: apoya la síntesis de progesterona post-ovulación.",
        "Ácido fólico: esencial si buscás embarazo, pero beneficia a todas.",
        "N-acetilcisteína (NAC): antioxidante potente que mejora la calidad ovárica.",
      ],
      highlight: "El CoQ10 (ubiquinol) tiene evidencia sólida para mejorar la calidad del óvulo. Beneficia a todas, no solo a quienes buscan embarazo.",
    },
  },

  lutea: {
    hormonas: {
      title: "La progesterona toma el mando",
      body: "Después de la ovulación, el folículo vacío se convierte en cuerpo lúteo y produce progesterona. Esta hormona es calmante, pro-sueño y pro-autocuidado. También sube levemente el estrógeno. Si no hay fecundación, ambas bajan hacia el final de la fase y el ciclo reinicia.",
      tips: [
        "La progesterona sube la temperatura corporal basal en 0.2-0.5°C.",
        "Tiene un efecto sedante — de ahí el cansancio y la necesidad de más sueño.",
        "La baja de estrógeno al final de la fase puede causar síntomas premenstruales.",
        "El síndrome premenstrual (SPM) ocurre en la segunda mitad de la fase lútea.",
      ],
      highlight: "La progesterona no es tu enemiga — es la hormona del nido. Abrazá el modo calma activa.",
    },
    nutricion: {
      title: "Magnesio, triptófano y alimentos calmantes",
      body: "El metabolismo basal sube levemente — podés sentir más hambre y eso es normal. Los antojos de carbohidratos y azúcar tienen base hormonal. Priorizá alimentos que apoyen la serotonina y calmen el sistema nervioso.",
      tips: [
        "Magnesio: chocolate negro, semillas, nueces, legumbres — reduce SPM.",
        "Triptófano (precursor de serotonina): pavo, huevos, avena, banana, semillas de girasol.",
        "Carbohidratos complejos: avena, batata, quinoa — sacian sin picos de azúcar.",
        "Semillas de sésamo y girasol: apoyan la producción de progesterona.",
        "Reducí sal para minimizar la retención de líquidos.",
      ],
      highlight: "Los antojos de carbohidratos en esta fase son tu cuerpo pidiendo serotonina. Dásela de forma inteligente.",
    },
    ejercicio: {
      title: "Fuerza moderada, yoga y caminatas",
      body: "La progesterona alta puede hacerte sentir más cansada y con menos tolerancia al ejercicio intenso. Pero el movimiento sigue siendo beneficioso — reduce el SPM, mejora el ánimo y ayuda con la retención de líquidos.",
      tips: [
        "Pilates y yoga: perfectos para esta fase — fuerza sin impacto excesivo.",
        "Caminatas largas: activan sin agotar, mejoran el humor.",
        "Pesas moderadas: podés mantener tu rutina pero bajá la intensidad.",
        "Natación: el agua ayuda con la inflamación y retención de líquidos.",
        "Escuchá el cansancio — en la segunda mitad de esta fase, el descanso vale.",
      ],
      highlight: "No es que seas menos — es que tu cuerpo está en modo diferente. Mové el cuerpo, pero sin competirte a vos misma.",
    },
    emociones: {
      title: "Profundidad, atención al detalle y autocuidado",
      body: "La fase lútea es la más incomprendida del ciclo. No es 'la fase del mal humor' — es la fase de la profundidad, la introspección y el trabajo sostenido. Tu tolerancia a las boludeces baja, y eso puede ser una brújula si aprendés a usarlo.",
      tips: [
        "Trabajo profundo y solitario: escritura, análisis, proyectos creativos individuales.",
        "Tu radar detecta inconsistencias mejor — útil para revisión de contratos, planes, etc.",
        "Si algo te molesta ahora y no te molestaba antes, puede ser real. O puede ser hormonal. Anotalo.",
        "Reducí la agenda social si podés — no es antisocial, es autorregulación.",
        "El ejercicio y el magnesio son los mejores aliados contra el SPM emocional.",
      ],
      highlight: "Lo que ves con claridad en la fase lútea sobre tu vida (relaciones, trabajo, hábitos) merece atención — incluso si la forma en que lo sentís es intensa.",
    },
    fertilidad: {
      title: "Fertilidad baja — si no hubo fecundación",
      body: "Si el óvulo no fue fecundado, el cuerpo lúteo se degrada, la progesterona y el estrógeno bajan, y el endometrio se prepara para desprenderse. La fertilidad está en su punto más bajo de la segunda mitad del ciclo.",
      tips: [
        "El moco cervical vuelve a ser seco o cremoso/blanco — señal de baja fertilidad.",
        "Si buscás embarazo y tuviste relaciones en la ventana fértil: la espera de dos semanas comienza ahora.",
        "Los síntomas de embarazo temprano pueden confundirse con síntomas premenstruales.",
        "Un test de embarazo es confiable a partir del día 12-14 post-ovulación.",
      ],
      highlight: "Fertilidad: baja. Si buscás embarazo, ya hiciste lo que podías. Ahora es esperar.",
    },
    suplementos: {
      title: "Magnesio, B6 y vitex para el SPM",
      body: "Esta es la fase donde los suplementos para el SPM tienen más impacto. El objetivo es apoyar la progesterona, calmar el sistema nervioso y reducir la inflamación.",
      tips: [
        "Magnesio glicinato (300-400mg): reduce cólicos, irritabilidad, retención de líquidos y antojos.",
        "Vitamina B6 (50-100mg): apoya la síntesis de progesterona y la producción de serotonina.",
        "Vitex agnus-castus (sauzgatillo): regula el ciclo lúteo — consultar dosis con profesional.",
        "Semillas de sésamo y girasol: protocolo de rotación de semillas para la fase lútea.",
        "L-teanina: calma la ansiedad sin somnolencia. Ideal si el SPM incluye nerviosismo.",
      ],
      highlight: "El magnesio es el suplemento con más evidencia para el SPM. Si tomás uno solo, que sea ese.",
    },
  },
};
