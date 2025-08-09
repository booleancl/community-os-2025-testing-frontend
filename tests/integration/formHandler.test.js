import fs from 'fs'
import path from 'path'
import { parseISO } from 'date-fns';
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { initForm } from '../../src/formHandler.js'

describe('Formulario de inscripción', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
    document.documentElement.innerHTML = html

    vi.useFakeTimers();
    vi.setSystemTime(parseISO('2025-07-01'));

    initForm()
  })

  it('Debe mostrar alerta y limpiar campos al enviar', () => {
    vi.spyOn(window, 'alert')
    document.getElementById('name').value = 'Charly'
    document.getElementById('email').value = 'charly@music.com'

    const event = new Event('submit')
    document.getElementById('eventForm').dispatchEvent(event)

    expect(window.alert).toHaveBeenCalledWith('¡Gracias por inscribirte, Charly!')
    expect(document.getElementById('discountMessage').textContent).toBe('¡Aprovecha un 30% de descuento por inscripción anticipada!')
    expect(document.getElementById('name').value).toBe('')
    expect(document.getElementById('email').value).toBe('')
  })
})
