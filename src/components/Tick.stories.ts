import type { Meta, StoryObj } from '@storybook/react';
import Tick from "./Tick.tsx";

const meta: Meta<typeof Tick> = {
	component: Tick,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Tick>;

export const Example: Story = {
	args: {
		className: 'demo'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A32&mode=dev',
		},
	},
};
