// 24 conversation themes (inspired by Mural's theme catalogue).
// Names/tips are written in Spanish (app base language) and translated at
// runtime with translateLessonText() into the user's native language.

export interface ConvTheme {
  id: string;
  emoji: string;
  name: string;
  scenario: string;
  keywords: string[];   // matched against vocabulary meanings
  difficulty: 1 | 2 | 3;
}

export const CONV_THEMES: ConvTheme[] = [
  { id: 'cafe', emoji: '☕', name: 'En el café', scenario: 'Pides algo de beber y charlas con el camarero.', keywords: ['café','agua','té','beber','leche','azúcar'], difficulty: 1 },
  { id: 'restaurant', emoji: '🍽️', name: 'En el restaurante', scenario: 'Reservas mesa, pides la comida y pagas la cuenta.', keywords: ['comida','comer','carne','pescado','arroz','menú','cuenta'], difficulty: 1 },
  { id: 'market', emoji: '🧺', name: 'En el mercado', scenario: 'Compras fruta y verdura y preguntas los precios.', keywords: ['fruta','verdura','manzana','precio','comprar','barato','caro'], difficulty: 1 },
  { id: 'directions', emoji: '🗺️', name: 'Pedir direcciones', scenario: 'Estás perdido y preguntas cómo llegar.', keywords: ['dónde','calle','derecha','izquierda','cerca','lejos','estación'], difficulty: 1 },
  { id: 'transport', emoji: '🚉', name: 'Tren y autobús', scenario: 'Compras un billete y preguntas por el andén.', keywords: ['tren','autobús','billete','andén','metro','taxi','viaje'], difficulty: 1 },
  { id: 'hotel', emoji: '🏨', name: 'En el hotel', scenario: 'Haces el check-in y pides algo para la habitación.', keywords: ['habitación','llave','noche','hotel','cama','reserva'], difficulty: 2 },
  { id: 'shopping', emoji: '🛍️', name: 'De compras', scenario: 'Buscas ropa de tu talla y preguntas el precio.', keywords: ['ropa','camisa','zapatos','talla','precio','tienda','probar'], difficulty: 2 },
  { id: 'doctor', emoji: '🩺', name: 'En el médico', scenario: 'Explicas qué te duele y entiendes las indicaciones.', keywords: ['dolor','cabeza','médico','enfermo','medicina','fiebre','cuerpo'], difficulty: 2 },
  { id: 'pharmacy', emoji: '💊', name: 'En la farmacia', scenario: 'Pides una medicina sin receta.', keywords: ['medicina','farmacia','pastilla','dolor','receta'], difficulty: 2 },
  { id: 'introductions', emoji: '🙋', name: 'Presentarse', scenario: 'Dices tu nombre, de dónde eres y a qué te dedicas.', keywords: ['nombre','llamar','país','vivir','trabajo','edad','años'], difficulty: 1 },
  { id: 'smalltalk', emoji: '💬', name: 'Charla ligera', scenario: 'Hablas del tiempo, del fin de semana y de tus planes.', keywords: ['tiempo','hoy','mañana','fin de semana','bien','gustar'], difficulty: 1 },
  { id: 'family', emoji: '👨‍👩‍👧', name: 'Hablar de la familia', scenario: 'Describes a tu familia y a las personas cercanas.', keywords: ['familia','madre','padre','hermano','hijo','amigo','casa'], difficulty: 1 },
  { id: 'work', emoji: '💼', name: 'En el trabajo', scenario: 'Presentas tu trabajo y hablas con un colega.', keywords: ['trabajo','oficina','jefe','reunión','proyecto','empresa'], difficulty: 3 },
  { id: 'interview', emoji: '📝', name: 'Entrevista de trabajo', scenario: 'Respondes preguntas sobre tu experiencia.', keywords: ['experiencia','estudiar','universidad','habilidad','trabajo'], difficulty: 3 },
  { id: 'school', emoji: '🎒', name: 'En clase', scenario: 'Preguntas al profesor y hablas con compañeros.', keywords: ['escuela','profesor','estudiar','libro','clase','examen','aprender'], difficulty: 2 },
  { id: 'phone', emoji: '📞', name: 'Una llamada', scenario: 'Llamas para pedir información o cambiar una cita.', keywords: ['teléfono','llamar','hablar','hora','cita','esperar'], difficulty: 3 },
  { id: 'airport', emoji: '✈️', name: 'En el aeropuerto', scenario: 'Facturas el equipaje y pasas el control.', keywords: ['avión','aeropuerto','maleta','pasaporte','vuelo','puerta'], difficulty: 2 },
  { id: 'bank', emoji: '🏦', name: 'En el banco', scenario: 'Cambias dinero o abres una cuenta.', keywords: ['dinero','banco','tarjeta','cuenta','pagar','efectivo'], difficulty: 3 },
  { id: 'home', emoji: '🏠', name: 'Buscar piso', scenario: 'Visitas un piso y preguntas por el alquiler.', keywords: ['casa','piso','habitación','cocina','baño','alquiler','ventana'], difficulty: 3 },
  { id: 'weather', emoji: '🌤️', name: 'El tiempo y la naturaleza', scenario: 'Comentas el clima y lo que vas a hacer.', keywords: ['sol','lluvia','frío','calor','nieve','viento','tiempo'], difficulty: 1 },
  { id: 'hobbies', emoji: '🎨', name: 'Aficiones', scenario: 'Cuentas qué te gusta hacer en tu tiempo libre.', keywords: ['gustar','música','deporte','leer','película','jugar','bailar'], difficulty: 2 },
  { id: 'travel', emoji: '🧳', name: 'Planear un viaje', scenario: 'Decides adónde ir y qué visitar.', keywords: ['viaje','ciudad','visitar','playa','montaña','hotel','ir'], difficulty: 2 },
  { id: 'emergency', emoji: '🆘', name: 'Una emergencia', scenario: 'Pides ayuda con calma y explicas qué ocurre.', keywords: ['ayuda','policía','perder','urgente','peligro','llamar'], difficulty: 2 },
  { id: 'culture', emoji: '🎎', name: 'Costumbres y fiestas', scenario: 'Hablas de tradiciones, comida típica y celebraciones.', keywords: ['fiesta','tradición','regalo','celebrar','comida','año'], difficulty: 3 },
];

export function themeById(id: string): ConvTheme | undefined {
  return CONV_THEMES.find(t => t.id === id);
}
