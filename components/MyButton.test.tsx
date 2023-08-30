import MyButton from "./MyButton";
import { fireEvent, render } from "@testing-library/react-native";

describe("MyButton", () => {
  it("calls onPress function when the button is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(<MyButton onPress={mockOnPress} />);
    const pressMeButton = getByTestId("ClickMe");
    fireEvent.press(pressMeButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
