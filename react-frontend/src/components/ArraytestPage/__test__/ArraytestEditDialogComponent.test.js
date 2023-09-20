import React from "react";
import { render, screen } from "@testing-library/react";

import ArraytestEditDialogComponent from "../ArraytestEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arraytest edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArraytestEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arraytest-edit-dialog-component")).toBeInTheDocument();
});
