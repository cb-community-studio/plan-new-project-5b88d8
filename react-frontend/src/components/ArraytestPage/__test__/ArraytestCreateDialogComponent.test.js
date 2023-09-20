import React from "react";
import { render, screen } from "@testing-library/react";

import ArraytestCreateDialogComponent from "../ArraytestCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arraytest create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArraytestCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arraytest-create-dialog-component")).toBeInTheDocument();
});
