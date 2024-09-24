import '../src/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light', // Fondo predeterminado
      values: [
        {
          name: 'light',
          value: '#F5F5F5', // Color de fondo claro personalizado
        },
        {
          name: 'dark',
          value: '#333333', // Color de fondo oscuro personalizado
        },
      ],
    },
  },
};

export default preview;
