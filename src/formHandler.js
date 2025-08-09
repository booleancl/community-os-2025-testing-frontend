import { getDiscountMessage } from './calculateDiscount.js';
import { startOfDay, parseISO, format } from 'date-fns';

export function initForm() {
  const form = document.getElementById('eventForm');
  const discountMessage = document.getElementById('discountMessage');

  // Definimos la fecha del evento con parseISO para evitar confusiones
  const eventDate = parseISO('2025-08-20'); // formato YYYY-MM-DD
  const eventDateSpan = document.getElementById('eventDate');

  try {
    const today = startOfDay(new Date());
    discountMessage.textContent = getDiscountMessage(today, eventDate);
    eventDateSpan.textContent = format(eventDate, 'dd/MM/yyyy')

    if (discountMessage.textContent === 'El periodo de inscripción ha finalizado.') {
      form.querySelector('button[type="submit"]').disabled = true;
    }
  } catch (error) {
    discountMessage.textContent = '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name && email) {
      alert(`¡Gracias por inscribirte, ${name}!`);
      form.reset();
    }
  });
}
