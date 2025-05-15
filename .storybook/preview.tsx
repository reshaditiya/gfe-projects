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
