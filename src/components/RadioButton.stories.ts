import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from "./RadioButton.tsx";

const meta: Meta<typeof RadioButton> = {
	component: RadioButton,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Example: Story = {
	args: {
		breakpoint: 'desktop',
		state: 'on'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A506&mode=dev',
		},
	},
};
