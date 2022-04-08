import React from "react"
import { render, screen } from "@testing-library/react"
import { TypographyP } from "./TyphographyP"

describe("<TyphographyP />", () => {
    it("should render default props", () => {
        render(<TypographyP />)
        expect(screen.getByTestId("TypographyP")).toHaveTextContent(
            "TypographyP"
        )
    })
    it("should render children")
})
