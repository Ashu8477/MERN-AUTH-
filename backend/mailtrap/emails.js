import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from './emailTemplates.js';

import { resend } from '../utils/resend.config.js';

// ✅ VERIFICATION EMAIL
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    console.log('📩 Sending verification email to:', email);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // default test sender
      to: email,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationToken,
      ),
    });

    console.log('✅ Email sent:', response);
  } catch (error) {
    console.error('❌ RESEND ERROR (VERIFICATION):', error);
    throw new Error('Email sending failed');
  }
};

// ✅ WELCOME EMAIL
export const sendWelcomeEmail = async (email, name) => {
  try {
    console.log('📩 Sending welcome email to:', email);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome 🎉',
      html: `<h2>Welcome ${name} 👋</h2>
             <p>Your account has been created successfully.</p>`,
    });

    console.log('✅ Welcome email sent:', response);
  } catch (error) {
    console.error('❌ RESEND ERROR (WELCOME):', error);
    throw new Error('Welcome email failed');
  }
};

// ✅ PASSWORD RESET EMAIL
export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    console.log('📩 Sending reset email to:', email);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Reset your password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
    });

    console.log('✅ Reset email sent:', response);
  } catch (error) {
    console.error('❌ RESEND ERROR (RESET):', error);
    throw new Error('Password reset email failed');
  }
};

// ✅ RESET SUCCESS EMAIL
export const sendResetSuccessEmail = async (email) => {
  try {
    console.log('📩 Sending success email to:', email);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Password Reset Successful',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log('✅ Success email sent:', response);
  } catch (error) {
    console.error('❌ RESEND ERROR (SUCCESS):', error);
    throw new Error('Password reset success email failed');
  }
};
