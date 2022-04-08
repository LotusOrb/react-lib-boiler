import React from "react";

type TypographyPProps = React.HTMLProps<HTMLParagraphElement>;

export const TypographyP: React.FC<TypographyPProps> = React.memo((props) => (
	<p {...props} data-testid="TypographyP">
		{props.children}
		<div>{[1, 2].map((ct) => ct)}</div>
	</p>
));
TypographyP.displayName = "TypographyP";
TypographyP.defaultProps = {
	children: "TypographyP",
};
