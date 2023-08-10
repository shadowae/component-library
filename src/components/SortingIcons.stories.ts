import type { Meta, StoryObj } from '@storybook/react';
import SortingIcons from "./SortingIcons.tsx";

const meta: Meta<typeof SortingIcons> = {
	component: SortingIcons,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof SortingIcons>;

export const Neutral: Story = {
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A32&mode=dev',
		},
	},
};

export const Up: Story = {
	args:{
		sortDirection: 'asc'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A32&mode=dev',
		},
	},
};

export const Down: Story = {
	args: {
		sortDirection: 'desc'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A32&mode=dev',
		},
	},
};
