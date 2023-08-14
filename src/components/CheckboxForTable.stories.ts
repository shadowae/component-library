import type { Meta, StoryObj } from '@storybook/react';
import CheckboxForTable from "./CheckboxForTable.tsx";

const meta: Meta<typeof CheckboxForTable> = {
	component: CheckboxForTable,
	tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof CheckboxForTable>;

export const Desktop: Story = {
	args: {
		breakpoint: 'desktop',
		state: 'on',
		className: ''
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A39&mode=dev',
		},
	},
};

export const Mobile: Story = {
	args: {
		breakpoint: 'mobile',
		state: 'on',
		className: ''
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=1%3A39&mode=dev',
		},
	},
};
