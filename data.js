const PRODUCTS = [
  {
    "id": "bike-xc-29",
    "name": "Bicicleta MTB XC 29",
    "category": "Bicicletas",
    "price": 890,
    "oldPrice": 1040,
    "sku": "BIKE-XC-29",
    "stock": "Disponible",
    "description": "Bicicleta de montaña rodado 29 ideal para caminos, senderos y entrenamiento recreativo.",
    "details": [
      "Cuadro de aluminio",
      "Frenos hidráulicos",
      "Transmisión 1x12",
      "Rodado 29"
    ],
    "imageUrl": "images/scott-f.jpeg",
    "imageAlt": "Bicicleta MTB XC 29"
  },
  {
    "id": "helmet-pro",
    "name": "Casco MTB Pro",
    "category": "Seguridad",
    "price": 79,
    "oldPrice": 99,
    "sku": "HELMET-PRO",
    "stock": "Disponible",
    "description": "Casco liviano con ventilación amplia y ajuste trasero para mayor comodidad.",
    "details": [
      "Talles M y L",
      "Sistema de ajuste rápido",
      "Ventilación frontal",
      "Peso liviano"
    ],
    "imageUrl": "images/casco-mtb.jpg",
    "imageAlt": "Casco MTB Pro"
  },
  {
    "id": "gloves-grip",
    "name": "Guantes Grip Gel",
    "category": "Indumentaria",
    "price": 32,
    "oldPrice": 42,
    "sku": "GLOVES-GRIP",
    "stock": "Disponible",
    "description": "Guantes con palma acolchada y excelente agarre para salidas largas.",
    "details": [
      "Palma antideslizante",
      "Acolchado gel",
      "Talles S al XL",
      "Lavables"
    ],
    "imageUrl": "images/guantes.jpg",
    "imageAlt": "Guantes Grip Gel"
  },
  {
    "id": "bottle-thermal",
    "name": "Caramañola Térmica",
    "category": "Accesorios",
    "price": 24,
    "oldPrice": 31,
    "sku": "BOTTLE-THERMAL",
    "stock": "Disponible",
    "description": "Botella térmica deportiva para mantener la bebida fresca por más tiempo.",
    "details": [
      "Capacidad 650 ml",
      "Libre de BPA",
      "Apta para porta-caramañola",
      "Tapa antiderrame"
    ],
    "imageUrl": "images/botella.jpg",
    "imageAlt": "Caramañola Térmica"
  },
  {
    "id": "trainer-indoor",
    "name": "Rodillo Indoor Smart",
    "category": "Entrenamiento",
    "price": 340,
    "oldPrice": 399,
    "sku": "TRAINER-INDOOR",
    "stock": "Pocas unidades",
    "description": "Rodillo de entrenamiento indoor para mantener el ritmo todo el año.",
    "details": [
      "Resistencia magnética",
      "Compatible con apps",
      "Plegable",
      "Bajo ruido"
    ],
    "imageUrl": "images/rodillo.jpg",
    "imageAlt": "Rodillo Indoor Smart"
  },
  {
    "id": "jersey-road",
    "name": "Jersey Ciclismo Aero",
    "category": "Indumentaria",
    "price": 58,
    "oldPrice": 72,
    "sku": "JERSEY-AERO",
    "stock": "Disponible",
    "description": "Jersey respirable de corte deportivo con bolsillos traseros.",
    "details": [
      "Tela respirable",
      "Cierre completo",
      "3 bolsillos traseros",
      "Talles S al XXL"
    ],
    "imageUrl": "images/maillot.jpg",
    "imageAlt": "Jersey Ciclismo Aero"
  },
  {
    "id": "lights-set",
    "name": "Set Luces USB",
    "category": "Seguridad",
    "price": 45,
    "oldPrice": 55,
    "sku": "LIGHTS-USB",
    "stock": "Disponible",
    "description": "Set de luces recargables para circular con mayor visibilidad.",
    "details": [
      "Delantera y trasera",
      "Recarga USB",
      "Modo intermitente",
      "Alta visibilidad"
    ],
    "imageUrl": "images/luces.jpg",
    "imageAlt": "Set Luces USB"
  },
  {
    "id": "repair-kit",
    "name": "Kit Reparación Ruta/MTB",
    "category": "Accesorios",
    "price": 29,
    "oldPrice": 36,
    "sku": "REPAIR-KIT",
    "stock": "Disponible",
    "description": "Kit compacto con herramientas básicas para salidas en ruta o montaña.",
    "details": [
      "Multiherramienta",
      "Parches",
      "Palancas",
      "Bolso compacto"
    ],
    "imageUrl": "images/kit.jpg",
    "imageAlt": "Kit Reparación Ruta/MTB"
  }
];

const POLICIES = {
  "shipping": {
    "title": "Envíos",
    "text": "Montevideo y Canelones: 24 a 48 horas hábiles. Interior: 3 a 5 días hábiles."
  },
  "returns": {
    "title": "Cambios y devoluciones",
    "text": "Los cambios pueden solicitarse dentro de los 10 días corridos con el producto sin uso y en su empaque original."
  },
  "payments": {
    "title": "Medios de pago",
    "text": "Aceptamos transferencia bancaria, tarjeta, efectivo al retirar y links de pago."
  },
  "warranty": {
    "title": "Garantía",
    "text": "Bicicletas: 12 meses por defectos de fábrica. Accesorios e indumentaria: 30 días."
  }
};

const DEMO_ORDERS = {
  "ORD-1027": {
    "status": "Confirmado",
    "detail": "Tu pedido está en preparación y será despachado en las próximas 24 horas."
  },
  "ORD-1041": {
    "status": "Enviado",
    "detail": "Tu pedido fue enviado. Entrega estimada: mañana."
  },
  "ORD-1088": {
    "status": "Pendiente de pago",
    "detail": "Estamos esperando la confirmación del pago para procesar el pedido."
  }
};
