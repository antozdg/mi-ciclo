import { Phase } from "./cycle";
import { Lang } from "./translations";

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
  highlight?: string;
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
  { icon: string; accent: string }
> = {
  hormonas: { icon: "🧬", accent: "#FF1FA3" },
  nutricion: { icon: "🥗", accent: "#FF6A00" },
  ejercicio: { icon: "⚡", accent: "#C97EFF" },
  emociones: { icon: "🌊", accent: "#FF1FA3" },
  fertilidad: { icon: "✨", accent: "#FFE94D" },
  suplementos: { icon: "💊", accent: "#4CAF50" },
};

const ES_CONTENT: Record<Phase, PhaseContent> = {
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
      highlight: "Fertilidad actual: muy baja. Tu ventana fértil comienza aproximadamente en el día {{fertileStart}} de tu ciclo.",
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

const EN_CONTENT: Record<Phase, PhaseContent> = {
  menstrual: {
    hormonas: {
      title: "Estrogen and progesterone at their lowest",
      body: "During menstruation, both estrogen and progesterone are at their lowest levels. This is what triggers bleeding and creates that feeling of low energy and heightened sensitivity. It's not weakness — it's biology.",
      tips: [
        "Menstrual pain is caused by prostaglandins, compounds that contract the uterus.",
        "Heat helps relax uterine muscles and reduces pain.",
        "Low estrogen levels can affect your mood — it's normal to feel more withdrawn.",
      ],
      highlight: "Your body is doing enormous work. Rest isn't optional — it's part of the process.",
    },
    nutricion: {
      title: "Replenish iron and reduce inflammation",
      body: "You lose iron through bleeding, so prioritize iron-rich foods. Combine them with vitamin C for better absorption. Reduce inflammatory foods like refined sugar, alcohol and ultra-processed food that can worsen cramps.",
      tips: [
        "Iron: lentils, spinach, lean red meat, tofu, pumpkin seeds.",
        "Vitamin C to absorb iron: red pepper, orange, kiwi, strawberries.",
        "Omega-3: salmon, sardines, walnuts — reduces inflammation and cramps.",
        "Avoid excess caffeine — it can intensify cramps.",
      ],
      highlight: "Dark chocolate +70% cacao has magnesium and antioxidants — one of the few cravings that's actually backed by science.",
    },
    ejercicio: {
      title: "Gentle, mindful movement",
      body: "This isn't the time for intense workouts. Your body is working hard internally. Gentle movement helps circulate blood, reduces cramps and improves mood without draining your reserves.",
      tips: [
        "Restorative or yin yoga: ideal for the first days.",
        "Gentle 20-30 minute walks: activate endorphins without overloading.",
        "Hip and lower back stretches to relieve pain.",
        "If your flow is very heavy, day 1 and 2 are for rest. No guilt.",
      ],
      highlight: "Listen to your body. If you need to stay still, staying still IS doing something.",
    },
    emociones: {
      title: "Introversion, clarity and release",
      body: "The hormonal drop can bring irritability, sadness or a feeling of being at the edge. But this phase also has something powerful: brutal clarity about what you want and don't want. It's a good time to reflect, not to make big decisions.",
      tips: [
        "Journaling: write without filter what you feel. Don't edit it.",
        "Set limits on your calendar — canceling plans isn't social failure.",
        "If you cry 'for no reason', that is the reason: your body processes a lot internally.",
        "Avoid important difficult conversations on the most intense days.",
      ],
      highlight: "What you suspect during your menstrual phase about your life is usually true. Note it, but wait to act.",
    },
    fertilidad: {
      title: "Very low fertility",
      body: "During menstruation, the probability of getting pregnant is very low but not impossible. The egg from the previous cycle is already gone. However, since sperm can live up to 5 days, if you ovulate very early in your cycle, there is a minimal chance.",
      tips: [
        "If you're trying to conceive, this isn't your fertile window.",
        "If you're avoiding pregnancy, keep using contraception.",
        "The first day of your period marks Day 1 of the new cycle.",
      ],
      highlight: "Current fertility: very low. Your fertile window begins approximately on day {{fertileStart}} of your cycle.",
    },
    suplementos: {
      title: "Iron, magnesium and omega-3",
      body: "This is the phase where supplements have the most direct impact. Replenishing what the body loses and reducing inflammation makes a real difference in how you feel.",
      tips: [
        "Iron: especially if your flow is heavy. Take it with vitamin C.",
        "Magnesium: reduces cramps, improves sleep and mood. Glycinate or citrate form.",
        "Omega-3: reduces inflammatory prostaglandins that cause cramps.",
        "Vitamin D: many people with intense cramps have a deficiency.",
        "Avoid calcium at the same time as iron — they compete for absorption.",
      ],
      highlight: "Magnesium glycinate taken before bed is one of the best-evidenced supplements for cramps and sleep in this phase.",
    },
  },

  folicular: {
    hormonas: {
      title: "Estrogen starts to rise",
      body: "Follicles in the ovaries begin to mature and produce increasing amounts of estrogen. This hormone is your ally: it improves mood, energy, memory, skin and libido. Your brain literally functions better with high estrogen.",
      tips: [
        "High estrogen increases serotonin — hence the good mood in this phase.",
        "Verbal memory and processing speed improve with high estrogen.",
        "Skin tends to look more luminous and hair shinier.",
        "Testosterone also rises slightly, increasing confidence.",
      ],
      highlight: "This is your 'recharge' phase. Everything you plant here — habits, projects, connections — has a better chance of thriving.",
    },
    nutricion: {
      title: "Complex carbohydrates and fermented foods",
      body: "Your energy is rising and your metabolism is more efficient. It's a good time to incorporate fermented foods that support estrogen metabolism, and complex carbohydrates to sustain growing energy.",
      tips: [
        "Fermented: kefir, natural yogurt, sauerkraut, kimchi, kombucha.",
        "Cruciferous vegetables: broccoli, cauliflower, Brussels sprouts — help metabolize estrogen.",
        "Flaxseeds: phytoestrogens that support hormonal balance.",
        "Legumes: lentils, chickpeas — sustained energy.",
        "Avoid severe caloric restrictions in this phase — your body handles them well now.",
      ],
      highlight: "Seed phase: incorporate flax and pumpkin seeds into your diet this week. They support hormone production.",
    },
    ejercicio: {
      title: "Turn up the intensity — your body can handle more",
      body: "Estrogen improves muscle strength, coordination and recovery. This is the best time for more demanding workouts, learning new movements and breaking your records. Your pain threshold is also higher now.",
      tips: [
        "HIIT, crossfit, running: your cardiovascular endurance is on the rise.",
        "Strength and weights: estrogen increases muscle protein synthesis.",
        "New classes or technical challenges: coordination and motor learning are optimized.",
        "Take advantage to establish routines — your body incorporates them better now.",
      ],
      highlight: "Your muscles recover faster in this phase. You can train consecutive days without as much wear.",
    },
    emociones: {
      title: "Curiosity, optimism and openness",
      body: "High estrogen brings mental clarity, optimism and a desire to connect. This is a naturally extroverted phase: conversations flow, ideas appear, the future looks more hopeful. Take advantage for things that require social energy.",
      tips: [
        "Important meetings, presentations, networking: your moment.",
        "Start new projects — motivation is high and genuine.",
        "Your empathy is higher — good time for pending difficult conversations.",
        "FOMO can be intense: learn to say no even if it's harder than in other phases.",
      ],
      highlight: "The energy of the follicular phase is real but finite. Don't waste it on commitments you don't want — save some for when it drops.",
    },
    fertilidad: {
      title: "Rising fertility",
      body: "As follicles mature, fertility increases toward ovulation. Cervical mucus begins to become more transparent and elastic — a natural sign that you're approaching your fertile window.",
      tips: [
        "Cervical mucus changes: from creamy/white to transparent and elastic like egg white.",
        "Libido generally increases in this phase — part of the evolutionary design.",
        "If trying to conceive: start paying attention to your body's signals.",
        "If avoiding pregnancy: don't neglect contraception.",
      ],
      highlight: "The fertile window is approaching. The days before ovulation are almost as fertile as ovulation day itself.",
    },
    suplementos: {
      title: "B6, zinc and seeds",
      body: "In the follicular phase the body is in building mode. The nutrients that support hormone production and cellular energy are the stars.",
      tips: [
        "Zinc: supports follicle maturation. In pumpkin seeds, shellfish, meat.",
        "Vitamin B6: regulates mood and supports hormonal synthesis.",
        "Flaxseeds (1 tbsp/day): mild phytoestrogens that support this phase.",
        "B-complex: sustained energy throughout the day.",
        "Vitamin C: antioxidant that supports ovarian health.",
      ],
      highlight: "Seed rotation protocol: flax and pumpkin in the follicular phase. Sesame and sunflower in the luteal phase.",
    },
  },

  ovulatoria: {
    hormonas: {
      title: "Peak estrogen, LH and testosterone",
      body: "The luteinizing hormone (LH) spikes and triggers ovulation. Estrogen reaches its maximum and testosterone briefly rises. This combination creates your highest energy moment, social attractiveness and confidence of the month.",
      tips: [
        "LH peak triggers egg release — lasts approximately 24 hours.",
        "High testosterone increases libido, assertiveness and motivation.",
        "Peak estrogen improves verbal fluency and persuasive capacity.",
        "You may feel a slight pain on one side of the abdomen — that's ovulation (mittelschmerz).",
      ],
      highlight: "Your body is at its biological peak. The confidence you feel now is real — it's not ego.",
    },
    nutricion: {
      title: "Antioxidants and fiber to support ovulation",
      body: "Ovulation generates controlled inflammation. Antioxidants help manage it. Fiber supports the elimination of excess estrogen. Keep a varied and colorful diet.",
      tips: [
        "Antioxidants: berries, tomatoes, asparagus, colorful peppers.",
        "Fiber: vegetables, whole grains, legumes — eliminate hormonal excess.",
        "Lean protein: chicken, fish, eggs — support hormonal synthesis.",
        "Hydration: cervical mucus depends on you being well hydrated.",
        "Anti-inflammatory foods: turmeric, ginger, garlic.",
      ],
      highlight: "Eat all the colors this week. Each plant pigment is a different antioxidant.",
    },
    ejercicio: {
      title: "Your physical performance peak",
      body: "The combination of estrogen, testosterone and LH creates the highest sports performance window of the cycle. Your strength, endurance and coordination are at their highest. Ideal for competitions, physical tests or breaking personal records.",
      tips: [
        "Maximum strength: the best time for heavy loads.",
        "Intense cardio: your VO2 max is on the rise.",
        "Team sports and activities with others: social energy boosts you.",
        "Watch out for injuries: high estrogen can affect ligament laxity.",
      ],
      highlight: "If you have a competition, physical test or something important, try to schedule it in this window.",
    },
    emociones: {
      title: "Charisma, connection and presence",
      body: "You're at your peak of sociability and interpersonal attractiveness. Conversations flow, people seek you out, you feel present and confident. It's a good time to lead, present projects, or have conversations that require charisma and conviction.",
      tips: [
        "Presentations, pitches, negotiations: your time to shine.",
        "Dates, first impressions, social events: charisma is at maximum.",
        "Your voice sounds different — studies show the tone rises and becomes more attractive.",
        "Watch out: high confidence can lead to impulsive commitments. Check before saying yes to everything.",
      ],
      highlight: "What feels easy now may require double the energy in other phases. Delegate, lead, connect.",
    },
    fertilidad: {
      title: "Your fertile window — maximum fertility",
      body: "You're at your highest fertility moment. The egg has been released and has a lifespan of 12-24 hours. Sperm can live up to 5 days, which is why the days before ovulation are also fertile.",
      tips: [
        "Cervical mucus is now transparent, elastic and abundant — like raw egg white.",
        "If trying to get pregnant: this is the moment. Have sex every 1-2 days.",
        "If avoiding pregnancy: maximum caution in these days.",
        "Ovulation tests (LH): a positive peak indicates ovulation will occur in 24-48 hours.",
        "Basal temperature rises 0.2°C after ovulation.",
      ],
      highlight: "Fertility: MAXIMUM. The egg is available for 12-24 hours. Previous days are also fertile.",
    },
    suplementos: {
      title: "Antioxidants to support ovulation",
      body: "Ovulation is a controlled inflammatory process. Antioxidants protect the egg and support its healthy release.",
      tips: [
        "CoQ10: improves egg quality — especially important if trying to conceive.",
        "Vitamin E: fat-soluble antioxidant that protects the egg.",
        "Vitamin C: supports post-ovulation progesterone synthesis.",
        "Folic acid: essential if trying to conceive, but benefits everyone.",
        "N-acetylcysteine (NAC): potent antioxidant that improves ovarian quality.",
      ],
      highlight: "CoQ10 (ubiquinol) has solid evidence for improving egg quality. Benefits everyone, not just those trying to conceive.",
    },
  },

  lutea: {
    hormonas: {
      title: "Progesterone takes over",
      body: "After ovulation, the empty follicle becomes the corpus luteum and produces progesterone. This hormone is calming, pro-sleep and pro-self-care. Estrogen also rises slightly. If there's no fertilization, both drop toward the end of the phase and the cycle restarts.",
      tips: [
        "Progesterone raises basal body temperature by 0.2-0.5°C.",
        "It has a sedative effect — hence the tiredness and need for more sleep.",
        "The drop in estrogen at the end of the phase can cause premenstrual symptoms.",
        "Premenstrual syndrome (PMS) occurs in the second half of the luteal phase.",
      ],
      highlight: "Progesterone isn't your enemy — it's the nesting hormone. Embrace active calm mode.",
    },
    nutricion: {
      title: "Magnesium, tryptophan and calming foods",
      body: "Basal metabolism rises slightly — you may feel more hungry and that's normal. Cravings for carbohydrates and sugar have a hormonal basis. Prioritize foods that support serotonin and calm the nervous system.",
      tips: [
        "Magnesium: dark chocolate, seeds, nuts, legumes — reduces PMS.",
        "Tryptophan (serotonin precursor): turkey, eggs, oats, banana, sunflower seeds.",
        "Complex carbohydrates: oats, sweet potato, quinoa — satisfying without blood sugar spikes.",
        "Sesame and sunflower seeds: support progesterone production.",
        "Reduce salt to minimize fluid retention.",
      ],
      highlight: "Carb cravings in this phase are your body asking for serotonin. Give it to it the smart way.",
    },
    ejercicio: {
      title: "Moderate strength, yoga and walks",
      body: "High progesterone can make you feel more tired and with less tolerance for intense exercise. But movement is still beneficial — it reduces PMS, improves mood and helps with fluid retention.",
      tips: [
        "Pilates and yoga: perfect for this phase — strength without excessive impact.",
        "Long walks: activate without exhausting, improve mood.",
        "Moderate weights: you can maintain your routine but lower the intensity.",
        "Swimming: water helps with inflammation and fluid retention.",
        "Listen to fatigue — in the second half of this phase, rest is valuable.",
      ],
      highlight: "It's not that you're less — it's that your body is in a different mode. Move your body, but don't compete with yourself.",
    },
    emociones: {
      title: "Depth, attention to detail and self-care",
      body: "The luteal phase is the most misunderstood of the cycle. It's not 'the bad mood phase' — it's the phase of depth, introspection and sustained work. Your tolerance for nonsense drops, and that can be a compass if you learn to use it.",
      tips: [
        "Deep, solitary work: writing, analysis, individual creative projects.",
        "Your radar detects inconsistencies better — useful for reviewing contracts, plans, etc.",
        "If something bothers you now that didn't before, it may be real. Or it may be hormonal. Note it.",
        "Reduce your social agenda if you can — it's not antisocial, it's self-regulation.",
        "Exercise and magnesium are the best allies against emotional PMS.",
      ],
      highlight: "What you see clearly in the luteal phase about your life (relationships, work, habits) deserves attention — even if the way you feel it is intense.",
    },
    fertilidad: {
      title: "Low fertility — if not fertilized",
      body: "If the egg wasn't fertilized, the corpus luteum degrades, progesterone and estrogen drop, and the endometrium prepares to shed. Fertility is at its lowest point in the second half of the cycle.",
      tips: [
        "Cervical mucus returns to dry or creamy/white — sign of low fertility.",
        "If trying to conceive and you had sex in the fertile window: the two-week wait begins now.",
        "Early pregnancy symptoms can be confused with premenstrual symptoms.",
        "A pregnancy test is reliable from day 12-14 post-ovulation.",
      ],
      highlight: "Fertility: low. If trying to conceive, you did what you could. Now it's time to wait.",
    },
    suplementos: {
      title: "Magnesium, B6 and vitex for PMS",
      body: "This is the phase where PMS supplements have the most impact. The goal is to support progesterone, calm the nervous system and reduce inflammation.",
      tips: [
        "Magnesium glycinate (300-400mg): reduces cramps, irritability, fluid retention and cravings.",
        "Vitamin B6 (50-100mg): supports progesterone synthesis and serotonin production.",
        "Vitex agnus-castus (chasteberry): regulates the luteal cycle — consult dosage with a professional.",
        "Sesame and sunflower seeds: seed rotation protocol for the luteal phase.",
        "L-theanine: calms anxiety without drowsiness. Ideal if PMS includes nervousness.",
      ],
      highlight: "Magnesium is the supplement with the most evidence for PMS. If you take only one, make it that one.",
    },
  },
};

export const PHASE_CONTENT: Record<Lang, Record<Phase, PhaseContent>> = {
  es: ES_CONTENT,
  en: EN_CONTENT,
};
