import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
	title: "Component/Button",
	component: Button,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		children: {
			defaultValue: "Button",
			description: "Button that render typo element",
			type: "string",
		},
		isLoading: {
			control: {
				type: "boolean",
			},
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: "Button",
};
