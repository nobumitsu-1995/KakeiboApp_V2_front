export const translateBigCategory = (bigCategory: string) => {
    switch (bigCategory) {
        case "fixed_cost":
            return "固定費";
        case "variable_cost":
            return "変動費";
        case "income":
            return "収入";
    }
}