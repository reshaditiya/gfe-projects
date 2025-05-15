import type { Preview } from '@storybook/react';
import { notoSans, notoSansMono } from '../src/app/layout.tsx';

import '/src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <div className={`${notoSans.variable} ${notoSansMono.variable}`}>
        <div className="font-[family-name:var(--font-noto-sans)]">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
