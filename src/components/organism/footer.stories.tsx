import type { Meta, StoryObj } from '@storybook/react-vite';

import { footer } from './footer';

const meta = {
  component: footer,
} satisfies Meta<typeof footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};