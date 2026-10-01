const messages = [["💕 Cariño", "Madelyn, octubre comienza y quiero que recibas este primer mensaje como un abrazo en palabras: eres una persona maravillosa y me alegra mucho tener tu amistad."], ["🌷 Amistad", "Hay amistades que llegan poco a poco y terminan ocupando un lugar especial. Gracias por ser una de esas personas que la vida me permitió conocer."], ["✨ Ánimo", "Si hoy algo no sale como esperabas, no te rindas. Respira, vuelve a intentarlo y recuerda que un día difícil no define todo lo que eres capaz de lograr."], ["🤍 Apoyo", "Cuando necesites recordar que puedes seguir adelante, vuelve a estas palabras: confío en la persona que eres y deseo sinceramente verte cumplir tus sueños."], ["💕 Cariño", "Tu manera de ser tiene una belleza que va mucho más allá de una sonrisa. Está en tu forma de tratar, escuchar, ayudar y hacer sentir bien a los demás."], ["🌸 Amistad", "Me gusta saber que existen personas como tú: auténticas, sencillas y capaces de convertir una conversación cualquiera en un recuerdo bonito."], ["✨ Ánimo", "No tienes que tener todo resuelto hoy. A veces avanzar significa simplemente dar un paso más y confiar en que mañana traerá nuevas oportunidades."], ["🤍 Apoyo", "Si alguna vez sientes que llevas demasiado sobre tus hombros, recuerda que también tienes derecho a descansar, pedir ayuda y darte un poco de paciencia."], ["💕 Cariño", "Madelyn, nunca olvides que tu presencia importa. Hay personas que sonríen al saber de ti y recuerdos que son más bonitos porque tú formas parte de ellos."], ["🌷 Amistad", "Una buena amiga no tiene que ser perfecta; tiene que ser sincera. Y una de las cosas que más valoro de ti es precisamente esa forma tan tuya de ser genuina."], ["✨ Ánimo", "Quizá hoy no veas lo lejos que has llegado porque estás mirando lo que todavía falta. Detente un momento y reconoce todo lo que ya has superado."], ["🤍 Apoyo", "Si un día necesitas escuchar algo bonito, aquí tienes una certeza: eres mucho más fuerte de lo que algunos momentos difíciles quieren hacerte creer."], ["💕 Cariño", "Hay detalles tuyos que quizá para ti sean pequeños, pero para quienes te apreciamos pueden significar muchísimo. Nunca dejes de compartir esa esencia tan especial."], ["🌸 Amistad", "Gracias por los momentos de confianza, por las risas inesperadas y por esas conversaciones que hacen que una amistad se sienta real y cercana."], ["✨ Ánimo", "No compares tu camino con el de nadie. Tu historia tiene su propio ritmo, y cada paso que das también cuenta, incluso los que parecen pequeños."], ["🤍 Apoyo", "A mitad del mes quiero recordarte algo importante: no estás obligada a ser fuerte todo el tiempo. También puedes sentir, descansar y volver a empezar."], ["💕 Cariño", "Madelyn, eres una persona maravillosa no porque nunca tengas días difíciles, sino porque aun con ellos sigues conservando cosas bonitas en tu corazón."], ["🌷 Amistad", "Las mejores amistades se construyen con pequeños momentos: una palabra, una risa, una conversación y la tranquilidad de saber que existe cariño sincero."], ["✨ Ánimo", "Cuando aparezca una duda, recuerda todas las veces que pensaste que no podrías y terminaste encontrando la manera. Esta vez también puedes hacerlo."], ["🤍 Apoyo", "Ojalá nunca tengas miedo de decir que necesitas un poco de apoyo. Las personas que te quieren de verdad también desean acompañarte cuando el camino pesa."], ["💕 Cariño", "Tu valor no cambia según el día que tengas. En tus días alegres y en tus días cansados sigues siendo esa persona especial que merece ser tratada con cariño."], ["🌸 Amistad", "Me siento agradecido por cada recuerdo que nuestra amistad ha ido reuniendo. Algunos momentos fueron sencillos, pero juntos adquirieron un significado especial."], ["✨ Ánimo", "Sigue creyendo en lo que puedes construir. Los sueños no siempre avanzan rápido, pero cada esfuerzo sincero deja una huella en el camino."], ["🤍 Apoyo", "Si hoy necesitas una razón para seguir, que sea esta: todavía quedan conversaciones, sonrisas, lugares, personas y momentos bonitos que no has vivido."], ["💕 Cariño", "Hay personas que uno aprende a valorar con el tiempo, y tú eres una de ellas. Tu amistad se ha convertido en un detalle de la vida que agradezco sinceramente."], ["🌷 Amistad", "Gracias por ser parte de esos pequeños instantes que hacen que un día cualquiera termine con una sonrisa. Eso también es una forma hermosa de amistad."], ["✨ Ánimo", "No permitas que un error te haga olvidar tus capacidades. Equivocarse también es aprender, crecer y descubrir nuevas formas de avanzar."], ["🤍 Apoyo", "Si alguna vez dudas de ti, recuerda que hay alguien que puede ver en ti muchas cosas bonitas que quizá tú misma no alcanzas a notar todos los días."], ["💕 Cariño", "Madelyn, tu forma de existir en la vida de quienes te rodean tiene valor. No necesitas demostrar nada extraordinario para merecer cariño y respeto."], ["🌸 Amistad", "Octubre está llegando a su final y quiero agradecerte por ser tú: por tu forma de hablar, de reír, de sentir y por todos esos detalles que hacen especial nuestra amistad."], ["✨ Ánimo", "Último día de octubre: sigue adelante con la certeza de que eres capaz, valiosa y maravillosa. Que noviembre encuentre en ti nuevas fuerzas, nuevos sueños y muchas razones para sonreír."]];
const cover = document.getElementById('cover');
const notes = document.getElementById('notes');
const openBtn = document.getElementById('openBtn');
const backBtn = document.getElementById('backBtn');
const todayBtn = document.getElementById('todayBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dateTitle = document.getElementById('dateTitle');
const dayNumber = document.getElementById('dayNumber');
const styleBadge = document.getElementById('styleBadge');
const message = document.getElementById('message');
const progressBar = document.getElementById('progressBar');
const calendar = document.getElementById('calendar');
let currentDay = 1;

const today = new Date();
const isOctober2026 = today.getFullYear() === 2026 && today.getMonth() === 9;
const defaultDay = isOctober2026 ? today.getDate() : 1;

function renderCalendar(){
  calendar.innerHTML='';
  for(let d=1; d<=31; d++){
    const b=document.createElement('button');
    b.textContent=d;
    if(d===currentDay)b.classList.add('current');
    if(isOctober2026 && d===today.getDate())b.classList.add('today');
    b.addEventListener('click',()=>showDay(d));
    calendar.appendChild(b);
  }
}

function showDay(day){
  currentDay=Math.max(1,Math.min(31,day));
  const item=messages[currentDay-1];
  const date=new Date(2026,9,currentDay);
  const label=date.toLocaleDateString('es-GT',{weekday:'long',day:'numeric',month:'long'});
  dateTitle.textContent=label.charAt(0).toUpperCase()+label.slice(1);
  dayNumber.textContent=`Día ${currentDay} de 31`;
  styleBadge.textContent=item[0];
  typeMessage(item[1]);
  progressBar.style.width=`${(currentDay/31)*100}%`;
  renderCalendar();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openNotes(day=defaultDay){
  cover.classList.remove('active'); notes.classList.add('active'); showDay(day);
}
if(openBtn) openBtn.addEventListener('click',()=>openNotes());
if(backBtn) backBtn.addEventListener('click',()=>{notes.classList.remove('active');cover.classList.add('active');});
if(todayBtn) todayBtn.addEventListener('click',()=>showDay(defaultDay));
if(prevBtn) prevBtn.addEventListener('click',()=>showDay(currentDay-1));
if(nextBtn) nextBtn.addEventListener('click',()=>showDay(currentDay+1));
document.addEventListener('keydown',e=>{
  if(!notes.classList.contains('active')) return;
  if(e.key==='ArrowLeft')showDay(currentDay-1);
  if(e.key==='ArrowRight')showDay(currentDay+1);
});

const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseInNotes = document.getElementById('surpriseInNotes');
const letterBtn = document.getElementById('letterBtn');
const letterContent = document.getElementById('letterContent');

function surprise(){
  const randomDay = Math.floor(Math.random()*31)+1;
  openNotes(randomDay);
}
if (surpriseBtn) surpriseBtn.addEventListener('click', surprise);
if (surpriseInNotes) surpriseInNotes.addEventListener('click', surprise);
if(letterBtn) letterBtn.addEventListener('click', ()=>{
  letterContent.classList.toggle('open');
  letterBtn.textContent = letterContent.classList.contains('open')
    ? '💗 Cerrar la pequeña carta'
    : '💌 Abrir una pequeña carta';
});

const giftBox = document.getElementById('giftBox');
const giftScene = document.getElementById('giftScene');
const giftIntro = document.getElementById('giftIntro');
const closingBtn = document.getElementById('closingBtn');
const closingMessage = document.getElementById('closingMessage');
const bgMusic = document.getElementById('legacyBgMusic');

function openGift(){
  if(giftScene.classList.contains('opened')) return;
  giftScene.classList.add('opened');
  giftBox.classList.add('opening');
  setTimeout(()=>{
    giftScene.style.display='none';
    giftIntro.classList.add('visible');
  },700);
}
if(giftBox) giftBox.addEventListener('click', openGift);
if(giftBox) giftBox.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' ') openGift(); });

if(closingBtn) closingBtn.addEventListener('click', ()=>{
  closingMessage.classList.toggle('open');
  closingBtn.textContent = closingMessage.classList.contains('open')
    ? '💗 Ocultar mensaje final'
    : '🎁 Ver el mensaje final';
});

/* Si colocas un archivo music.mp3 junto a index.html, intentará reproducirlo
   al entrar al regalo; los navegadores pueden exigir una interacción del usuario. */
if(document.getElementById('openBtn')) document.getElementById('openBtn').addEventListener('click', ()=>{
  if(bgMusic && bgMusic.src) bgMusic.play().catch(()=>{});
});

const reasons=["Tu amistad hace que los días comunes se sientan un poco más bonitos.","Tu manera de escuchar hace sentir importante a quien está contigo.","Tienes una esencia auténtica que no necesita compararse con nadie.","Tu sonrisa puede cambiar el ánimo de un día entero.","Sabes convertir pequeños momentos en recuerdos especiales.","Tu corazón conserva ternura incluso después de los días difíciles.","Eres de esas personas cuya presencia se agradece de verdad.","Tu amistad inspira confianza, cariño y tranquilidad.","Tienes una forma especial de dejar huellas bonitas.","Porque simplemente siendo tú ya haces una diferencia."];
let reasonIndex=0, typingTimer;

function typeMessage(text){clearInterval(typingTimer);message.textContent='';message.classList.add('typing');let i=0;typingTimer=setInterval(()=>{message.textContent+=text[i++]||'';if(i>=text.length){clearInterval(typingTimer);message.classList.remove('typing')}},18)}
function celebrate(count=55){const icons=['✦','♡','✧','❀'];for(let i=0;i<count;i++){const p=document.createElement('span');p.className='particle';p.textContent=icons[Math.floor(Math.random()*icons.length)];p.style.left=Math.random()*100+'vw';p.style.fontSize=(10+Math.random()*18)+'px';p.style.color=['#d7a4b6','#f0d4dd','#b89a67','#ffffff'][Math.floor(Math.random()*4)];p.style.setProperty('--x',(Math.random()*160-80)+'px');p.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),5200)}}
const reasonBtn=document.getElementById('reasonBtn');if(reasonBtn)reasonBtn.addEventListener('click',()=>{reasonIndex=(reasonIndex+1)%reasons.length;const el=document.getElementById('reasonText');el.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:450});el.textContent=reasons[reasonIndex]});
if(letterBtn)letterBtn.addEventListener('click',()=>letterBtn.classList.toggle('open'));
const celebrateBtn=document.getElementById('celebrateBtn');if(celebrateBtn)celebrateBtn.addEventListener('click',()=>celebrate(70));
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),closeLightbox=document.getElementById('closeLightbox');if(lightbox&&lightboxImage){document.querySelectorAll('.memory-grid img,.photo-frame img').forEach(img=>img.addEventListener('click',()=>{lightboxImage.src=img.src;lightbox.classList.add('open')}));if(closeLightbox)closeLightbox.addEventListener('click',()=>lightbox.classList.remove('open'));lightbox.addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.classList.remove('open')});}
const musicBtn=document.getElementById('musicBtn');if(musicBtn&&bgMusic)musicBtn.addEventListener('click',()=>{if(bgMusic.paused){bgMusic.play().then(()=>musicBtn.classList.add('playing')).catch(()=>{})}else{bgMusic.pause();musicBtn.classList.remove('playing')}});
const originalOpenGift=openGift;openGift=function(){originalOpenGift();celebrate(38)};


(function(){
  const body = document.body;
  const intro = document.getElementById('luxuryIntro');
  const enter = document.getElementById('enterLuxury');
  const petals = document.getElementById('luxuryPetals');
  const musicBtn = document.getElementById('legacyLuxuryMusicBtn');
  const audio = document.getElementById('legacyLuxuryAudio');
  const celebrate = document.getElementById('luxuryCelebrate');

  function petalBurst(count=24){
    if(!petals) return;
    const symbols = ['🌸','🌷','♡','✦'];
    for(let i=0;i<count;i++){
      const p = document.createElement('span');
      p.className = 'luxury-petal';
      p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      p.style.left = Math.random()*100 + 'vw';
      p.style.fontSize = (13 + Math.random()*20) + 'px';
      p.style.animationDuration = (4 + Math.random()*5) + 's';
      p.style.animationDelay = (Math.random()*1.2) + 's';
      petals.appendChild(p);
      setTimeout(()=>p.remove(),10000);
    }
  }

  function enterExperience(){
    body.classList.remove('luxury-locked'); body.classList.add('luxury-ready');
    if(intro) intro.classList.add('hide');
    petalBurst(36);
  }

  if(enter) enter.addEventListener('click', enterExperience);
  if(celebrate) celebrate.addEventListener('click', ()=>petalBurst(60));

  if(musicBtn && audio){
    musicBtn.addEventListener('click', async ()=>{
      if(audio.paused){
        try{
          await audio.play();
          musicBtn.textContent='🔊 Música';
        }catch(e){
          musicBtn.textContent='🎵 Agrega music.mp3';
        }
      }else{
        audio.pause();
        musicBtn.textContent='🎵 Música';
      }
    });
  }

  setInterval(()=>petalBurst(2),2600);
})();


(function(){
  const button = document.getElementById('luxuryMusicBtn');
  const audio = document.getElementById('bgMusic');
  const status = document.getElementById('audioStatus');
  if(!button || !audio) return;

  const setStatus = text => { if(status) status.textContent = text; };

  audio.addEventListener('canplay', ()=>setStatus('Audio listo'));
  audio.addEventListener('playing', ()=>{
    button.textContent = '🔊 Pausar música';
    setStatus('Reproduciendo');
  });
  audio.addEventListener('pause', ()=>{
    button.textContent = '🎵 Reproducir música';
    if(audio.currentTime > 0) setStatus('Música en pausa');
  });
  audio.addEventListener('error', ()=>{
    setStatus('No se encontró music.mp3');
    button.textContent = '⚠️ Audio no disponible';
  });

  button.addEventListener('click', async ()=>{
    if(audio.paused){
      try{
        await audio.play();
      }catch(error){
        setStatus('Verifica que el archivo se llame music.mp3');
      }
    }else{
      audio.pause();
    }
  });
})();
