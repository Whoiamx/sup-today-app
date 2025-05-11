// Función para enviar recordatorios
async function sendDailyReminders() {
  console.log("🔄 Buscando recordatorios para enviar...");

  const now = new Date();

  // Buscar recordatorios que tengan el `remindAt` igual o menor que la fecha actual,
  // y que no se hayan enviado (es decir, done = false) y que tengan sendEmail = true.
  const reminders = await prisma.reminder.findMany({
    where: {
      remindAt: {
        lte: now, // El recordatorio debe ser para la hora actual o anterior
      },
      done: false, // Solo los que aún no se enviaron
      sendEmail: true, // Solo los que tienen que enviarse por email
    },
  });

  console.log(`🔍 Recordatorios encontrados: ${reminders.length}`);

  // Enviar un correo por cada recordatorio encontrado
  for (const reminder of reminders) {
    try {
      // Enviar el email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: reminder.email,
        subject: `Recordatorio: ${reminder.title}`,
        text: `Hola! No olvides: ${reminder.description} a las ${reminder.remindAt}`,
      });

      console.log(`📧 Email enviado para el recordatorio "${reminder.title}"`);

      // Marcar el recordatorio como "done" después de enviarlo
      await prisma.reminder.update({
        where: { id: reminder.id },
        data: {
          done: true, // Marcar como enviado
        },
      });

      console.log(`✅ Recordatorio "${reminder.title}" marcado como "done"`);
    } catch (error) {
      console.error(`❌ Error enviando email para "${reminder.title}":`, error);
    }
  }
}
