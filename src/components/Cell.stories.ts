import type { Meta, StoryObj } from '@storybook/react';
import Cell from "./Cell.tsx";

const meta: Meta<typeof Cell> = {
	component: Cell,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Cell>;

export const Example: Story = {
	args : {
		textValue:'Test',
		breakpoint: "desktop",
		textWeight: 'default',
		divider: "on",
		radio: 'off',
		checkbox: 'on',
		className: 'desktop'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A50&mode=dev',
		},
	},
};
