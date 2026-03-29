import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hrh6pht8',
  dataset: 'production',
  useCdn: true, // Usa caché para respuestas más rápidas y menos coste
  apiVersion: '2024-03-29', // La fecha de hoy como versión de API recomendada
});

// Helper para extraer URLs de imágenes desde Sanity
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
