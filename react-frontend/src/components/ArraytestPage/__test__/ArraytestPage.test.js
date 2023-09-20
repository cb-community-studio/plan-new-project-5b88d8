import React from "react";
import { render, screen } from "@testing-library/react";

import ArraytestPage from "../ArraytestPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arraytest page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArraytestPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arraytest-datatable")).toBeInTheDocument();
    expect(screen.getByRole("arraytest-add-button")).toBeInTheDocument();
});
