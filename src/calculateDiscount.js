import { differenceInCalendarDays, isAfter, isValid } from 'date-fns';

/**
 * Calculates the discount percentage based on the current date and the event date.
 * @param {Date} today - Current date.
 * @param {Date} eventDate - Date of the event.
 * @returns {number} Discount percentage: 30, 15, 0, or -1 if outside the valid registration period.
 */
export function calculateDiscount(today, eventDate) {
  if (!isValid(today) || !isValid(eventDate)) {
    throw new Error('Parameters must be valid Date objects');
  }

  const daysDiff = differenceInCalendarDays(eventDate, today);

  if (daysDiff > 15) {
    return 30; // early registration discount
  } else if (daysDiff >= 3 && daysDiff <= 15) {
    return 15; // mid registration discount
  } else if (daysDiff >= 0 && daysDiff < 3) {
    return 0; // late registration, no discount
  } else {
    return -1; // outside valid registration period
  }
}

/**
 * Retorna el mensaje de descuento según la fecha actual y fecha del evento
 * @param {Date} today 
 * @param {Date} eventDate 
 * @returns {string} Mensaje para mostrar en el formulario
 */
export function getDiscountMessage(today, eventDate) {
  const discount = calculateDiscount(today, eventDate);

  if (discount > 0) {
    return `¡Aprovecha un ${discount}% de descuento por inscripción anticipada!`;
  }
  if (discount === 0) {
    return 'Últimos días para inscribirte, sin descuento.';
  }
  return 'El periodo de inscripción ha finalizado.';
}