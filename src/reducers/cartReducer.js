export const cartInitialState = [];

export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TO_CART": {
            const { id } = payload;
            const productInCartIndex = state.findIndex(item => item.id === id);
        
            if (productInCartIndex < 0) {
                return [...state, {...payload, quantity: 1}];
            }

            const newState = structuredClone(state);

            newState[productInCartIndex].quantity += 1;
            return newState;
        }
            
        case "REMOVE_FROM_CART": {
            const { id } = payload;

            const productCurrent = state.find((item) => item.id === id);
        
            if (productCurrent.quantity > 1) {
                return state.map((item) =>
                    item.id === productCurrent.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }

            return state.filter((item) => item.id !== id);
        }
        case "CLEAR_CART":
            return cartInitialState;
        default:
            return cartInitialState;
    }
}
