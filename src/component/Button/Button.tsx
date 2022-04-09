import React, { ButtonHTMLAttributes, HTMLProps } from "react";
import "./Button.style.scss";

export interface ButtonProps extends HTMLProps<ButtonHTMLAttributes<unknown>> {
	isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const htmlProps = { ...props };

	delete htmlProps.isLoading;

	return (
		<button
			{...(htmlProps as unknown)}
			className={`lotusorb-button ${props.className} ${
				props.isLoading && "loading"
			}`}
		>
			{props?.isLoading ? "loading" : props.children}
		</button>
	);
};

Button.displayName = "LotusOrb_Button";

Button.defaultProps = {
	isLoading: false,
};
