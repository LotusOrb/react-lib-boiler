import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./Typhography";

export default {
	title: "Component/Typography",
	component: Typography,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		children: {
			defaultValue: "Typography",
			description: "Typhography that render typo element",
			type: "string",
		},
		type: {
			options: ["paragraph", "h1", "h2"],
			control: {
				type: "select",
			},
		},
		color: {
			defaultValue: "#000",
		},
		style: {
			defaultValue: {
				color: "orange",
			},
		},
	},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
	<Typography {...args} />
);

export const Default = Template.bind({});

Default.args = {
	children: "Parahgraph",
	type: "paragraph",
};

export const Heading1 = Template.bind({});

Heading1.args = {
	children: "Heading 1",
	type: "h1",
};

export const Heading2 = Template.bind({});

Heading2.args = {
	children: "Heading 2",
	type: "h2",
};
