// tests/calculateDiscount.test.js
import { describe, it, expect } from 'vitest';
import { getDiscountMessage } from '../../src/calculateDiscount.js';
import { parseISO } from 'date-fns';

describe('getDiscountMessage', () => {
  const eventDate = parseISO('2025-08-20');

  it('returns early discount message (> 15 days before)', () => {
    const today = parseISO('2025-07-01');
    expect(getDiscountMessage(today, eventDate)).toBe(
      '¡Aprovecha un 30% de descuento por inscripción anticipada!'
    );
  });

  it('returns mid discount message (3 to 15 days before)', () => {
    const today = parseISO('2025-08-05');
    expect(getDiscountMessage(today, eventDate)).toBe(
      '¡Aprovecha un 15% de descuento por inscripción anticipada!'
    );
  });

  it('returns late registration message (< 3 days before)', () => {
    const today = parseISO('2025-08-18');
    expect(getDiscountMessage(today, eventDate)).toBe(
      'Últimos días para inscribirte, sin descuento.'
    );
  });

  it('returns registration ended message (after event)', () => {
    const today = parseISO('2025-08-21');
    expect(getDiscountMessage(today, eventDate)).toBe(
      'El periodo de inscripción ha finalizado.'
    );
  });

  it('throws on invalid today date', () => {
    const today = new Date('invalid-date');
    expect(() => getDiscountMessage(today, eventDate)).toThrow();
  });

  it('throws on invalid event date', () => {
    const today = parseISO('2025-07-01');
    const invalidEventDate = new Date('invalid-date');
    expect(() => getDiscountMessage(today, invalidEventDate)).toThrow();
  });
});
