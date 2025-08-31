import { apiFormData } from './client';

export async function createAppointment(formData) {
  return apiFormData('/appointments', formData, { method: 'POST' });
}

