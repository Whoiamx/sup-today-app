export interface APIResults {
  id?: number;
  title: string;
  description: string;
  email?: string;
  phone?: string;
  sendEmail?: boolean;
  sendWhatsApp?: boolean;
  remindAt: Date;
  createdAt?: Date;
  important?: boolean;
  done?: boolean;
}
