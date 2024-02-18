function felizClick(){
    const mensajeIndex = Math.floor(Math.random() * mensajesFelices.length);
    const mensaje = mensajesFelices[mensajeIndex];
    alert(mensaje);
}

function tristeClick(){
    const mensajeIndex = Math.floor(Math.random() * mensajesTristes.length);
    const mensaje = mensajesTristes[mensajeIndex];
    alert(mensaje);
}

function enojadaClick(){
    const mensajeIndex = Math.floor(Math.random() * mensajesEnojada.length);
    const mensaje = mensajesEnojada[mensajeIndex];
    alert(mensaje);
}

function cansadaClick(){
    const mensajeIndex = Math.floor(Math.random() * mensajesCansadas.length);
    const mensaje = mensajesCansadas[mensajeIndex];
    alert(mensaje);
}

function aburridaClick(){
    const mensajeIndex = Math.floor(Math.random() * mensajesAburridas.length);
    const mensaje = mensajesAburridas[mensajeIndex];
    alert(mensaje);
}

const mensajesFelices = [
    "¡Hoy es un gran día!",
    "Eres increíblemente talentosa.",
    "Tu felicidad es felicidad para mí.",
    "Estoy feliz de verte aquí.",
    "¡Que tengas un día maravilloso!",
    "Eres una persona increíble.",
    "Te amo mucho.",
];

const mensajesTristes = [
    "No te preocupes mi niña, todo estará bien.",
    "Estoy aquí para ti bebé.",
    "No estás sola preciosa.",
    "Estoy muy orgulloso de ti.",
    "Eres fuerte y valiente.",
    "Te amo mucho.",
];

const mensajesEnojada = [
    "Recuerda, un dia a la vez.",
    "No podemos controlar todo bebé.",
    "Somos tu y yo contra el mundo.",
    "Estoy aquí para escucharte.",
    "Eres fuerte y valiente.",
    "Te amo mucho.",
];

const mensajesCansadas = [
    "Descansa, te lo mereces.",
    "Te esforzaste mucho hoy.",
    "Cuando vivamos juntos podras descansar todo lo que quieras.",
    "Cuando te sientas cansada, recuerda que te amo.",
    "Todo lo que haces vale la pena.",
    "Te amo mucho.",
];

const mensajesAburridas = [
    "Vamos a hacer algo juntos.",
    "Recuerda mis chistes de señor.",
    "Llamame, no importa si estoy en clases.",
    "Pronto nos vamos a ver.",
    "Te voy a hacer reir cuando este contigo.",
    "Te amo mucho.",
];

