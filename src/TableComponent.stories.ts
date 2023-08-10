import type { Meta, StoryObj } from '@storybook/react';

import TableComponent from './TableComponent.tsx';

const meta: Meta<typeof TableComponent> = {
	component: TableComponent,
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TableComponent>;
const data = [
	{ id: 1, name: "John", age: 25 },
	{ id: 2, name: "Jane", age: 30 },
	{ id: 3, name: "Susan", age: 32 },
	// ... other data
];

const columns = [
	{ name: "ID", key: "id" },
	{ name: "Name", key: "name" },
	{ name: "Age", key: "age" },
];
export const Example: Story = {
	args:{
		data:data,
		columns:columns,
		sortable: false,
		selectable: 'single'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/LRl3kQFCXnmViiKHkfdBwo/Table-Component-1?type=design&node-id=0%3A1&mode=dev',
		},
	},
};
