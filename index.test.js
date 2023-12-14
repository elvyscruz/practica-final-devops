// index.test.js
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Lee el contenido del archivo HTML
const html = fs.readFileSync('index.html', 'utf-8');

describe('Index Page', () => {
  let dom;
  let h1Element;

  // Antes de cada prueba, crea un DOM simulado
  beforeEach(() => {
    dom = new JSDOM(html);
    h1Element = dom.window.document.querySelector('h1');
  });

  test('renders h1 with "Hola Devops"', () => {
    expect(h1Element).not.toBeNull(); // Verifica que el elemento exista
    expect(h1Element.textContent).toBe('Hola Devops'); // Verifica el texto del elemento
  });
});
