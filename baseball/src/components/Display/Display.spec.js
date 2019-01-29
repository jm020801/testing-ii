import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Dashboard inputs", () => {
    describe("strike button clicks", () => {
        it("renders 1 strike after 1 click", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const button = getByTestId("strikeButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(1);
        });

        it("renders 2 strike after 2 clicks", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const button = getByTestId("strikeButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(2);
        });

        it("renders 0 strike after 3 clicks", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const button = getByTestId("strikeButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(0);
        });

        it("renders 1 strike after 4 clicks", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const button = getByTestId("strikeButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(1);
        });
    });

    describe("balls button clicks", () => {
        it("renders 1 ball after 1 click", () => {
            const { getByTestId } = render(<Display />);
            const balls = getByTestId("ballsOutput");
            const button = getByTestId("ballButton");

            fireEvent.click(button);

            expect(balls).toHaveTextContent(1);
        });

        it("renders 2 ball after 2 click", () => {
            const { getByTestId } = render(<Display />);
            const balls = getByTestId("ballsOutput");
            const button = getByTestId("ballButton");

            fireEvent.click(button);

            expect(balls).toHaveTextContent(2);
        });

        it("renders 3 ball after 3 click", () => {
            const { getByTestId } = render(<Display />);
            const balls = getByTestId("ballsOutput");
            const button = getByTestId("ballButton");

            fireEvent.click(button);

            expect(balls).toHaveTextContent(3);
        });

        it("renders 0 ball after 4 click", () => {
            const { getByTestId } = render(<Display />);
            const balls = getByTestId("ballsOutput");
            const button = getByTestId("ballButton");

            fireEvent.click(button);

            expect(balls).toHaveTextContent(0);
        });

        it("renders 1 ball after 5 click", () => {
            const { getByTestId } = render(<Display />);
            const balls = getByTestId("ballsOutput");
            const button = getByTestId("ballButton");

            fireEvent.click(button);

            expect(balls).toHaveTextContent(1);
        });
    });

    describe("hit button clicks", () => {
        it("renders 1 hit after 1 click and resets strikes/balls to 0", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const balls = getByTestId("ballsOutput");
            const hits = getByTestId("hitsOutput");
            const button = getByTestId("hitButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(0);
            expect(balls).toHaveTextContent(0);
            expect(hits).toHaveTextContent(1);
        });

        it("renders 2 hit after 2 click and resets strikes/balls to 0", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const balls = getByTestId("ballsOutput");
            const hits = getByTestId("hitsOutput");
            const button = getByTestId("hitButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(0);
            expect(balls).toHaveTextContent(0);
            expect(hits).toHaveTextContent(2);
        });

        it("renders 3 hit after 3 click and resets strikes/balls to 0", () => {
            const { getByTestId } = render(<Display />);
            const strikes = getByTestId("strikesOutput");
            const balls = getByTestId("ballsOutput");
            const hits = getByTestId("hitsOutput");
            const button = getByTestId("hitButton");

            fireEvent.click(button);

            expect(strikes).toHaveTextContent(0);
            expect(balls).toHaveTextContent(0);
            expect(hits).toHaveTextContent(3);
        });
    });
});