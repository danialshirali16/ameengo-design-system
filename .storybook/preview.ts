import type { Preview } from '@storybook/nextjs-vite'
import type { Decorator } from '@storybook/react'
import '../src/app/globals.css'

// Decorator to handle dark mode
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light'

  // Apply dark class to document element
  if (typeof document !== 'undefined') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }

  return Story()
}

const preview: Preview = {
  decorators: [withTheme],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'oklch(1 0 0)', // matches --background in light mode
        },
        {
          name: 'dark',
          value: 'oklch(0.141 0.005 285.823)', // matches --background in dark mode
        },
      ],
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;