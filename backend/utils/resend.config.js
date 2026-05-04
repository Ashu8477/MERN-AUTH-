import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

// DEBUG (optional)
console.log('RESEND KEY:', process.env.RESEND_API_KEY);

export const resend = new Resend(process.env.RESEND_API_KEY);
