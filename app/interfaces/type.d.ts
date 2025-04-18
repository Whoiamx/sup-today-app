export interface APIResults {
  id: number;
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  createdAt?: Date;
  important: boolean;
  done?: boolean;
}
export interface ReminderNote {
  id: number;
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  createdAt?: Date;
  important: boolean;
  done?: boolean;
}
export interface NewReminderNote {
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  important: boolean;
  done?: boolean;
}

export interface ReminderNote extends NewReminderNote {
  id: number; // El id es obligatorio cuando se recupera de la base de datos
}
