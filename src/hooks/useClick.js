export const useClick = () => {

    const incremetCounter = (currentValue) => {
        return currentValue + 1;
    };

    const decremetCounter = (currentValue) => {
        return currentValue - 1;
    };

  return {incremetCounter, decremetCounter};
}
