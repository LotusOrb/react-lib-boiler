import React from "react";
import Styled, { css } from "styled-components";

export interface TypographyProps
	extends React.HTMLProps<HTMLParagraphElement | HTMLHeadElement> {
	type?: "paragraph" | "h1" | "h2";
	color?: string;
}

const sharedStyle = css<{ color: string }>`
	color: ${(props) => (props.color ? props.color : "red")};
	text-decoration: underline;
`;

const Paragraph = Styled.p`
	${sharedStyle}
	color: ${(props) => (props.color ? props.color : "red")};
`;

const H1 = Styled.h1`
	${sharedStyle}
`;

const H2 = Styled.h2`
	${sharedStyle}
`;

export const Typography: React.FC<TypographyProps> = React.memo((props) => {
	return (
		<React.Fragment>
			{props.type === "paragraph" && <Paragraph {...(props as never)} />}
			{props.type === "h1" && <H1 {...(props as never)} />}
			{props.type === "h2" && <H2 {...(props as never)} />}
		</React.Fragment>
	);
});

Typography.displayName = "LotusOrb_Typography";

Typography.defaultProps = {
	type: "paragraph",
};
