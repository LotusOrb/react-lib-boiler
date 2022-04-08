import React, { useEffect, useState } from "react";
import Styled, { css } from "styled-components";

interface TypographyProps
	extends React.HTMLProps<HTMLParagraphElement | HTMLHeadElement> {
	type?: "paragraph" | "h1" | "h2" | "test";
	color?: string;
}

const sharedStyle = css<{ color: string }>`
	color: ${(props) => (props.color ? props.color : "red")};
	text-decoration: underline;
`;

const Paragraph = Styled.p`
	${sharedStyle}
`;

const H1 = Styled.h1`
	${sharedStyle}
`;

const H2 = Styled.h2`
	${sharedStyle}
`;

export const Typography: React.FC<TypographyProps> = React.memo((props) => {
	const [state, setState] = useState<boolean>(false);

	useEffect(() => {
		setState(true);
	}, []);

	return (
		<React.Fragment>
			{props.type === "paragraph" && <Paragraph {...(props as never)} />}
			{props.type === "h1" && <H1 {...(props as never)} />}
			{props.type === "h2" && <H2 {...(props as never)} />}
			{props.type === "test" && state && (
				<Paragraph {...(props as never)} onClick={() => setState(true)} />
			)}
		</React.Fragment>
	);
});

Typography.displayName = "Typography";

Typography.defaultProps = {
	type: "paragraph",
};
