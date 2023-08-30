import { render, waitFor } from "@testing-library/react-native";
import Products from "./Products";

describe("Products", () => {
  it("displays product", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
          ]),
      })
    );

    const { getByText } = render(<Products />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });

    const productElement = getByText(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );

    expect(productElement).toBeTruthy();
  });
});
