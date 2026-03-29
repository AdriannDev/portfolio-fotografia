export default {
    name: 'portfolioItem',
    title: 'Proyecto de Portafolio',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título del Proyecto',
        type: 'string',
        description: 'El título que se mostrará en la tarjeta principal (ej. Retrato Estudio)',
        validation: (Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'category',
        title: 'Categoría',
        type: 'string',
        options: {
          list: [
            { title: 'Sesiones Personalizadas', value: 'Sesiones' },
            { title: 'Bodas y Recepciones', value: 'Bodas' },
            { title: 'Maternidad', value: 'Maternidad' },
            { title: 'Eventos Especiales', value: 'Eventos' },
          ],
          layout: 'radio',
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'cover',
        title: 'Imagen de Portada (Cover)',
        type: 'image',
        description: 'La foto principal que se verá en la grilla antes de hacer clic.',
        options: {
          hotspot: true, // Permite recortar la imagen de forma inteligente
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'gallery',
        title: 'Galería Interna (Modal)',
        description: 'Sube aquí las fotos que entrarán al proyecto cuando la persona haga clic en él.',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Texto Alternativo (SEO)',
                type: 'string',
                description: 'Opcional, pero recomendado para accesibilidad',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'category',
        media: 'cover',
      },
    },
  };
  
