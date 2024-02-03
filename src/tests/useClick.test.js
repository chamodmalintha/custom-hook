import { useClick } from "../hooks/useClick";

describe('useClick', () => {
  it('should increment the counter correctly', () => {
    const { incremetCounter } = useClick();
    const result = incremetCounter(5);
    expect(result).toBe(6);
  });

  it('should decrement the counter correctly', () => {
    const { decremetCounter } = useClick();
    const result = decremetCounter(5);
    expect(result).toBe(4);
  });
});
