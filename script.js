/* ==========================================================================
   1. CONTENIDO DE LAS 12 CARTAS ("ÁBREME CUANDO...")
   ========================================================================== */

const lettersData = {
  1: {
    title: "quieras saber por qué creé este rincón",
    subtitle: "CARTA 01 • UN ESPACIO PARA TI",
    theme: "gmail",
    content: `Quiero darte la bienvenida a este espacio de tranquilidad y relajación. Honestamente, mientras estoy haciendo esto no estoy pensando mucho si esto es demasiado o no; simplemente considero que es algo que quiero hacer por ti.

Yo entiendo que hubo un malentendido entre los dos, sin embargo, al conocerte me pareciste una mujer muy interesante, por no decir maravillosa. Sé que lo he dicho varias veces y posiblemente no me creas o lo veas como un piropo nada más, pero todo esto me sale del corazón y solo lo hago por personas a las que respeto y de quienes me siento orgulloso de conocer.

No quiero apresurar las cosas y no quiero que esto se trate solo de mí. Así que, aunque sé que no me conoces lo suficiente ni tienes la confianza aún conmigo de ser un espacio de paz y tranquilidad para ti, quiero darte un "espacio" personal en donde puedas relajarte y ser tú misma. Yo entiendo lo que se siente pasar por muchas presiones y tener un día saturado en la universidad; espero que este pueda ser tu lugar seguro.`
  },
  2: {
    title: "tengas un día pesado y necesites despejarte",
    subtitle: "CARTA 02 • DESAHOGO CREATIVO",
    theme: "moleskine",
    isInteractive: true,
    content: `A veces la mente se satura de pendientes, ruidos o días grises y lo único que hace falta es soltarlo en papel. 

No hay reglas, formato ni filtros aquí: escribe lo que se te venga a la mente. Puede ser una historia absurda, cómo te sientes hoy, una idea random o simplemente desahogarte.

Lo que escribas aquí es completamente tuyo. Me encantaría muchísimo leerlo si decides compartírmelo, pero respeto absoluto y total a tu privacidad si prefieres guardártelo para ti. Tú decides qué hacer con tus palabras:`
  },
  3: {
    title: "estés aburrida y quieras un juego rápido",
    subtitle: "CARTA 03 • ARCADE 80S",
    theme: "arcade",
    content: `¡Misión activada! 🕹️

Si el aburrimiento está haciendo de las suyas, vamos a romper la rutina con un pequeño dilema de decisiones rápidas. Responde mentalmente (o escríbeme luego tu resultado):

1. ¿Un viaje improvisado a la playa o una cabaña tranquila en la montaña?
2. ¿Maratón de películas en casa con pizza o salir a probar un restaurante nuevo?
3. ¿Tener la capacidad de viajar en el tiempo o de teletransportarte a cualquier parte?

¡Desafío completado! Si quieres compartir tus respuestas o ponerme a prueba a mí con tres preguntas, tienes el canal de mensajes abierto.`
  },
  4: {
    title: "necesites una buena recomendación musical",
    subtitle: "CARTA 04 • SYNTHWAVE / DISCO",
    theme: "synthwave",
    content: `La música tiene esa capacidad genial de cambiar el estado de ánimo en segundos.

Cuando busco concentrarme, relajarme o simplemente acompañar el día con buena vibra, suelo acudir a temas que combinan melodías envolventes y ritmos tranquilos.

Mi cancion favorita para cuando necesito claridad, no rendirme luchar y seguir adelante incluso en mis momentos mas oscuros se llama "i will not bow" de la banda Breaking Benjamin, ya si buscas algo para relajarte descansar y olvidarte de todo siempre pongo mago de oz "el aguante"

¿Qué canción te transporta a ti inmediatamente a un buen lugar o un recuerdo bonito? Me encantaría escucharla.`
  },
  5: {
    title: "no puedas dormir y los pensamientos no paren",
    subtitle: "CARTA 05 • NOCHE ESTELAR",
    theme: "midnight",
    content: `Hola, noctámbula. Es tarde y la mente a veces decide ponerse activa justo cuando todo el resto del mundo está en silencio.

A veces nos quedamos repasando conversaciones, pendientes del día siguiente o ideas al azar. Mi recomendación: deja el teléfono a un lado después de leer esto, ajusta bien tus cobijas y enfócate solo en el ritmo tranquilo de tu respiración.

Cualquier cosa que tengas por resolver puede esperar sin problemas hasta mañana por la mañana. 

Que tengas una noche muy tranquila y descanses bonito.`
  },
  6: {
    title: "quieras cambiar de aires, despejar la mente y ver una película conmigo",
    subtitle: "CARTA 06 • NOCHE DE PELI & CINE VIRTUAL",
    theme: "cafe",
    content: `A veces el día pide a gritos una pausa total, ponerse algo cómodo y desconectar del mundo un rato. 🎬🍿

Si abriste esta carta hoy, tómalo como una invitación oficial para cambiar de aires: elegimos algo divertido para ver (una película, una serie o lo que se nos antoje), preparamos snacks cada uno y nos conectamos a verla juntos a la distancia.

Sin prisas, sin presiones y con total comodidad. Tú pones la elección de la peli (o el debate de qué ver) y yo pongo la compañía. 

¿Cuándo armamos la noche de cine?`
  },
  7: {
    title: "dudes de ti o te sientas insegura por algo",
    subtitle: "CARTA 07 • ART DÉCO GATSBY",
    theme: "gatsby",
    content: `Un recordatorio rápido para hoy:

A todos nos pasa que en ocasiones dudamos antes de una presentación, un proyecto, un examen o una decisión importante. Es completamente normal sentir ese pequeño nerviosismo.

Pero no dejes que ese momento de duda tape lo inteligente, capaz y dedicada que eres. Tienes un estilo y una perspectiva única que aportan muchísimo donde sea que estés.

Confía en tus capacidades y en el esfuerzo que le pones a las cosas. Vas a hacer un trabajo genial.`
  },
  8: {
    title: "tengas una gran noticia y quieras celebrarla",
    subtitle: "CARTA 08 • FIESTA VINTAGE",
    theme: "party",
    content: `¡FELICIDADES! 🎉

Si abriste esta carta es porque algo muy bueno ocurrió hoy: aprobaste algo importante, lograste esa meta que tenías en mente o simplemente te dio una alegría inesperada la semana.

Me alegra muchísimo saberlo. Cada logro, grande o pequeño, merece ser celebrado y reconocido como se debe.

Tómate el tiempo para disfrutar la satisfacción del trabajo bien hecho. ¡Brindo a la distancia por ese éxito y por los muchos más que vienen!, podrias escribirmela por texto estoy muy seguro que amarias ver mi reaccion a tremendo suceso y lo feliz y orgulloso que estoy por ti siempre creo y he creido en tus capacidades desde que te conoci.`
  },
  9: {
    title: "quieras descubrir un dato curioso que no sabías",
    subtitle: "CARTA 09 • BOTÁNICA ANTIQUE",
    theme: "botanic",
    content: `Bienvenida a la sección de curiosidades aleatorias. 🌿

¿Sabías que las nutrias marinas se toman de las patas mientras duermen para no separarse ni flotar a la deriva por las corrientes? O que los árboles en un bosque pueden comunicarse y compartir nutrientes bajo tierra mediante una red microscópica de hongos.

El mundo está lleno de pequeños detalles fascinantes cuando nos detenemos a observarlos.

Si tú tienes algún dato curioso raro o genial que te sepás de memoria, me lo tienes que contar.`
  },
  10: {
    title: "necesites una dosis rápida de buen humor",
    subtitle: "CARTA 10 • POP ART CÓMIC",
    theme: "comic",
    content: `¡Modo buen humor activado! 💥

La vida no tiene por qué ser tan seria todo el tiempo. Aquí va una pequeña observación reflexiva:

"¿Sabes cuál es el colmo del panadero? Encontrar a su mujer con las manos en la masa."

"¿Cómo se le dice a un electricista japonés? Yokito Fokito."

"¿Qué hace una vaca en una mina? Vaca-minando."

Espero que esto te saque al menos una sonrisa o una mueca ligera. Que tengas un día genial y ligero.`
  },
  11: {
    title: "vayas de viaje o salgas a caminar",
    subtitle: "CARTA 11 • COMPAÑÍA EN EL CAMINO",
    theme: "aviation",
    content: `¡Buen viaje y excelente trayecto! ✈️

No importa si te diriges a otra ciudad, a un destino lejano o simplemente saliste a caminar un rato para despejar la mente por tu lugar favorito.

Cambiar de ambiente siempre renueva las ideas y nos recarga de buena energía. Disfruta el camino, observa el paisaje, ponte tu playlist preferida y aprovecha cada momento del recorrido. Quiero que sepas que a pesar de la distancia y de lo lejos que estemos yo siempre estare ahi apoyandote y yo se que en tus momentos de paz y de seguridad estaras pensando en mi porque lo que mas me gustaria mas que nada en este mundo primero que nada es ser tu lugar seguro y tu seas el mio no sabes lo mucho que ame contarte cosas el primer dia, se que ambos estábamos penosos pero aun asi disfrute cada segundo, desde ahi supe que esto por primera vez en mucho tiempo era un presagio de que los proximos dias crecera algo muy hermoso sin prisas ni atajos algo que estoy muy seguro que sera tan lindo, sano y dulce que supera todo lo que alguna vez los dos hemos deseado al tener una relacion con alguien y cada vez que hablo contigo siento como si el evento mas improbable y hermoso de ver sucediera todos los dias sin lugar a dudas es emocionante pasar tiempo contigo y descubrir cosas nuevas de ti.

Que tengas un excelente viaje de ida y vuelta.`
  },
  12: {
    title: "simplemente te preguntes qué pienso de ti",
    subtitle: "CARTA 12 • ROMÁNTICO VINO",
    theme: "romantic",
    content: `Llegaste al sobre final...        
Desde que te conoci aquella noche en la plataforma recuerdo que lo primero que pense fue ni miss universo con todo el maquillaje del mundo, ni todos los soles de la existencia, ni todas las gemas preciosas de todos los mundos podrian superar su porte su brillo y lo hermosa que es, sin lugar a dudas no suelo basarme en el fisico cuando conozco a alguien sin embargo quede en shock al instante, Imagina mi sorpresa cuando al escribirte y conocerte vi todo un mundo nuevo del cual apenas si habia soñado que fuera posible, con algo tan impresionante como tu personalidad fue dificil contenerse y no ser tan lanzado la verdad y cuando me contaste sobre los detalles fue algo maravilloso que me enfoque en sorprenderte y apoyarte mas que en cualquier otra cosa desde entonces. reconozco que talvez tuve una idea un poco fuera de lugar sin embargo tengo muy claro lo que realmente deseo y pienso de ti, eres sin lugar a dudas el mayor misterio que deseo resolver con calma, un alma bondadosa dulce aplicada e inteligente que sin lugar a dudas estoy 100% seguro que llegara muy lejos en la vida, eres una mujer muy responsable y madura y me fascina que tienes muy claro lo que quieres y lo que buscas, tienes esa personalidad tan fina, hermosa, amable, gentil, divertida, confiable y sobretodo espectacular y por mas ambicioso que suene como adulto y como hombre, estoy muy decidido con lo que quiero y no tengo nada que me retenga de conseguirlo asi tenga que ser paciente estoy dispuesto a dar mi mayor esfuerzo para conseguirlo porque se que nada valdria mas la pena en este mundo, reconozco con lo muy poco que se de ti lo que vales e independientemente si lo sepas o no hasta que nivel eres una mujer tan unica y especial deseo ser yo quien con toda honestidad poco a poco a medida que siga descubriendo cosas de ti siempre te recuerde lo especial y fantastica que eres, el que siempre te apoya y el que siempre te va a escuchar sin juzgarte ni pedirte que cambies siempre voy a desear con cada fibra de mi ser conocer a la autentica tu porque ¡¡¡¡¡Vale es maravillosa!!!!!`
  }
};

/* ==========================================================================
   2. ESTADO GLOBAL & ELEMENTOS DEL DOM
   ========================================================================== */

let currentCardId = null;
let typingTimeout = null;

const modal = document.getElementById('letter-modal');
const bannerTitle = document.getElementById('banner-title');
const bannerSubtitle = document.getElementById('banner-subtitle');
const letterContent = document.getElementById('letter-content');
const typingCursor = document.getElementById('typing-cursor');
const closeBtn = document.getElementById('modal-close-btn');
const replayBtn = document.getElementById('replay-typing-btn');

const musicBtn = document.getElementById('music-toggle-btn');
const bgAudio = document.getElementById('bg-audio');
const musicIconPlay = document.getElementById('music-icon-play');
const musicIconPause = document.getElementById('music-icon-pause');
const musicBtnText = document.getElementById('music-btn-text');

/* ==========================================================================
   3. MOTOR DE ESCRITURA PROGRESIVA (LETRA POR LETRA)
   ========================================================================== */

function typeWriterEffect(text, container) {
  if (typingTimeout) clearTimeout(typingTimeout);
  container.innerHTML = "";
  typingCursor.classList.remove('hidden');

  let index = 0;
  const speed = 18;

  function typeNextChar() {
    if (index < text.length) {
      const char = text.charAt(index);
      if (char === '\n') {
        container.innerHTML += '<br>';
      } else {
        container.innerHTML += char;
      }
      index++;
      const delay = (char === '.' || char === '?' || char === '!') ? speed * 10 : speed + Math.random() * 12;
      typingTimeout = setTimeout(typeNextChar, delay);
    } else {
      typingCursor.classList.add('hidden');
    }
  }

  typeNextChar();
}

/* ==========================================================================
   4. APERTURA Y TRANSICIÓN AL BANNER
   ========================================================================== */

function openLetterModal(cardId) {
  const data = lettersData[cardId];
  if (!data) return;

  currentCardId = cardId;
  bannerTitle.textContent = `Ábreme cuando... ${data.title}`;
  bannerSubtitle.textContent = data.subtitle;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  switchParticleTheme(data.theme);

  // Verificamos si es la Carta 02 interactiva de desahogo
  if (data.isInteractive && cardId == '2') {
    if (typingTimeout) clearTimeout(typingTimeout);
    typingCursor.classList.add('hidden');

    let htmlContent = `<p class="mb-4">${data.content}</p>`;
    htmlContent += `
      <textarea id="user-free-text" rows="5" placeholder="Escribe aquí lo que se te venga a la mente sin filtros..." class="w-full mt-2 mb-4 p-4 bg-white/90 border border-stone-300 rounded-xl text-stone-900 text-base font-bodyText focus:outline-none focus:border-rose-500 shadow-inner resize-none"></textarea>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button onclick="enviarCorreo('propio')" class="w-full sm:w-auto px-4 py-2.5 bg-stone-800 hover:bg-stone-900 text-stone-200 text-xs uppercase tracking-wider rounded-lg shadow transition-all">
          📩 Guardarlo para mí (Enviar a mi correo)
        </button>
        <button onclick="enviarCorreo('Julian')" class="w-full sm:w-auto px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs uppercase tracking-wider rounded-lg shadow transition-all">
          💌 Compartírselo a Julián (Me encantaría leerlo)
        </button>
      </div>
    `;
    letterContent.innerHTML = htmlContent;
  } else {
    // Para todas las demás cartas se activa la animación letra por letra
    typeWriterEffect(data.content, letterContent);
  }

  // Marcar visualmente la carta como leída/abierta en la grilla principal
  const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
  if (cardElement) {
    cardElement.classList.add('opened');
  }
}

function closeLetterModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  if (typingTimeout) clearTimeout(typingTimeout);
  typingCursor.classList.add('hidden');
  switchParticleTheme('default');
}

/* Función auxiliar para enviar el texto libre por correo */
function enviarCorreo(destino) {
  const textoEscrito = document.getElementById('user-free-text').value;
  if (!textoEscrito.trim()) {
    alert("Escribe al menos un par de palabras antes de enviar.");
    return;
  }

  const asunto = encodeURIComponent("Lo que se vino a mi mente - Carta 02 Ábreme cuando...");
  const cuerpo = encodeURIComponent(textoEscrito);

  let emailDestino = "";
  if (destino === 'Julian') {
    emailDestino = "julian@gmail.com"; 
  } else {
    emailDestino = ""; 
  }

  window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
}

/* ==========================================================================
   5. LISTENERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.envelope-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.getAttribute('data-card-id');
      openLetterModal(cardId);
    });
  });

  closeBtn.addEventListener('click', closeLetterModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLetterModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeLetterModal();
  });

  replayBtn.addEventListener('click', () => {
    if (currentCardId && lettersData[currentCardId]) {
      if (lettersData[currentCardId].isInteractive) {
        return;
      }
      typeWriterEffect(lettersData[currentCardId].content, letterContent);
    }
  });

  let isPlaying = false;
  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgAudio.pause();
      musicIconPlay.classList.remove('hidden');
      musicIconPause.classList.add('hidden');
      musicBtnText.textContent = "Reproducir música de fondo";
      isPlaying = false;
    } else {
      bgAudio.play().then(() => {
        musicIconPlay.classList.add('hidden');
        musicIconPause.classList.remove('hidden');
        musicBtnText.textContent = "Pausar música";
        isPlaying = true;
      }).catch(err => {
        console.log("Interacción de audio requerida por el navegador:", err);
      });
    }
  });

  initParticleCanvas();
});

/* ==========================================================================
   6. MOTOR DE PARTÍCULAS EN CANVAS DINÁMICO POR TEMAS
   ========================================================================== */

let ctx, width, height;
let particles = [];
let currentTheme = 'default';

function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles(currentTheme);
  });

  createParticles('default');
  animateParticles();
}

function switchParticleTheme(theme) {
  currentTheme = theme;
  createParticles(theme);
}

function createParticles(theme) {
  particles = [];
  const count = 40;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.2,
      color: '#f43f5e',
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  particles.forEach(p => {
    switch (theme) {
      case 'gmail': p.color = '#ef4444'; break;
      case 'moleskine': p.color = '#d97706'; p.speedY = Math.random() * 0.4 + 0.1; break;
      case 'arcade': p.color = '#06b6d4'; p.size = Math.random() * 4 + 2; break;
      case 'synthwave': p.color = '#ec4899'; p.speedY = -Math.random() * 0.6 - 0.2; break;
      case 'midnight': p.color = '#60a5fa'; break;
      case 'cafe': p.color = '#f43f5e'; p.speedY = -Math.random() * 0.5 - 0.2; break;
      case 'gatsby': p.color = '#eab308'; break;
      case 'party': p.color = ['#ef4444', '#3b82f6', '#eab308', '#10b981'][Math.floor(Math.random() * 4)]; p.speedY = Math.random() * 0.6 + 0.3; break;
      case 'botanic': p.color = '#10b981'; break;
      case 'comic': p.color = '#facc15'; p.size = Math.random() * 5 + 2; break;
      case 'aviation': p.color = '#38bdf8'; p.speedX = Math.random() * 1.2 + 0.4; break;
      case 'romantic': p.color = '#f43f5e'; break;
      default: p.color = '#ffffff'; break;
    }
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}