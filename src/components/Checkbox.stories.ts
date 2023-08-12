import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from "./Checkbox.tsx";

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		isChecked: false
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A39&mode=dev',
		},
	},
};
