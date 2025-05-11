async function sendDailyReminders() {
  console.log("🔄 Buscando recordatorios para enviar...");

  const now = new Date();
  const currentMinute = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes()
  );

  const nextMinute = new Date(currentMinute);
  nextMinute.setMinutes(currentMinute.getMinutes() + 1);

  const reminders = await prisma.reminder.findMany({
    where: {
      date: {
        gte: currentMinute,
        lt: nextMinute,
      },
    },
  });

  for (const reminder of reminders) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "gaastontimchuk@gmail.com", // o reminder.email si guardás el mail
      subject: `Recordatorio: ${reminder.title}`,
      text: `Hola! No olvides: ${reminder.description} a las ${reminder.date}`,
    });

    console.log(`📧 Email enviado para recordatorio "${reminder.title}"`);
  }
}
