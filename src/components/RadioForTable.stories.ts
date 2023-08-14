import type { Meta, StoryObj } from '@storybook/react';
import RadioForTable from "./RadioForTable.tsx";

const meta: Meta<typeof RadioForTable> = {
	component: RadioForTable,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof RadioForTable>;

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
