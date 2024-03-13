/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

const handler = async (m, {conn, text}) => {
  m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropo)}"*\n*╚═══════════════════════════*`);
};
handler.tags = ['frases'];
handler.command = ['piropo'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.piropo = ['أود أن أكون ورقًا حتى أتمكن من تغليف تلك الشوكولاتة.', 'أنت مثل شبكة wifi بدون كلمة مرور، الجميع يبحث عنك', 'من كان حافلة تسير في منحنيات قلبك.', 'أريد أن أطير بلا أجنحة وأغادر هذا الكون، وأدخل عالمك وأحبك في صمت..', 'أود أن أكون زبدة تذوب في أريبا الخاص بك.', 'لو كان الجمال خطيئة لكنت بالفعل في الجحيم.', 'أود أن أكون قطة لأقضي 7 أرواح بجانبك.', 'السرقة خطأ ولكن قبلة من فمك ستسرقها مني.', 'كم تكون السماء جميلة عندما تكون صافية ولكن الحب يكون أجمل عندما تكون بجانبي.', 'جميلة، تمشي في الظل، الشمس تذيب الشوكولاتة.', 'Si Fuera Un Correo Electrónico Serías Mi Contraseña.', 'Quisiera que fueses monte para darte machete', 'Perdí mi número de teléfono ¿Me das el tuyo?', '¿Cómo te llamas para pedirte de regalo a Santa Claus?', ' En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.', '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?', 'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza', 'Si hablamos de matemáticas eres la suma de todos mis deseos.', 'Pareces Google porque tienes todo lo que yo busco.', 'Mi café favorito, es el de tus ojos.', 'Quiero ser photoshop para retocarte todo el cuerpo.', 'Quisiera que fueras cereal, para cucharearte en las mañanas.', 'Quien fuera hambre, para darte tres veces al día.'];
