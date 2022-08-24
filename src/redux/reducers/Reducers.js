import ActionTypes from "../constants/ActionTypes";

// Reducers.js -- Here, we are managing state data

// Initial State
let initialState = {
  productList: [
    ...(localStorage.getItem("productList") == null
      ? []
      : JSON.parse(localStorage.getItem("productList"))),
  ],
  searchedProducts: [],
  searchRequest: {
    expression: "",
    type: "name",
  },
  totalWishlist: 0,
  totalCart: 0,
  cart: [],
  wishlist: [],
};

//  ---- REDUCERS -----

// ---- productReducer : for product related operations
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      console.log("Reducer: ADD_PRODUCT:", {
        ...state,
        productList: [...state.productList, action.payload],
      });

      localStorage.setItem(
        "productList",
        JSON.stringify([...state.productList, action.payload])
      );

      // initialState = { ...state, productList: [...state.productList, action.payload] };

      return { ...state, productList: [...state.productList, action.payload] };

    case ActionTypes.EDIT_SELECTED_PRODUCT:
      console.log("Reducer: EDIT_SELECTED_PRODUCT:", action.payload);
      console.log("Reducer: EDIT_SELECTED_PRODUCT:", {
        ...state,
        productList: [...state.productList, action.payload],
      });

      for (let element of initialState.productList) {
        console.log(element);
        if (action.payload.id == element.id) {
          element.id = action.payload.id;
          element.name = action.payload.name;
          element.image = action.payload.image;
          element.description = action.payload.description;
          element.price = action.payload.price;
          element.category = action.payload.category;
          element.ratings = action.payload.ratings;
          console.log("inside if..", element);
          break;
        }
      }
      console.log(initialState.productList);

      localStorage.setItem(
        "productList",
        JSON.stringify(initialState.productList)
      );

      return { ...state, productList: initialState.productList };

    case ActionTypes.DELETE_SELECTED_PRODUCT:
      console.log("Reducer: DELETE_SELECTED_PRODUCT:", action.payload);
      console.log("Reducer: DELETE_SELECTED_PRODUCT ------ state:", state);
      const newList = state.productList.filter(
        (element) => element.id !== action.payload
      );
      console.log("AFTER DELETE_PRODUCT:", newList);
      // initialState = { ...state, productList: newList};
      console.log("------------", initialState);
      localStorage.setItem("productList", JSON.stringify(newList));
      return { ...state, productList: newList };

    case ActionTypes.SEARCH_PRODUCTS:
      console.log("searchReducer: ", state, action.payload);
      if (action.payload.expression == "") {
        return { ...state, searchedProducts: [] };
      }

      if (action.payload.type === "name") {
        initialState.searchedProducts = [];
        initialState.searchedProducts = state.productList.filter((element) =>
          element.name.toLowerCase().match(action.payload.expression)
        );
      } else if (action.payload.type === "category") {
        initialState.searchedProducts = [];
        initialState.searchedProducts = state.productList.filter(
          (element) =>
            element.category.toLowerCase() ===
            action.payload.expression.toLowerCase()
        );
      } else {
        return { ...state, searchedProducts: [] };
      }
      return { ...state, searchedProducts: initialState.searchedProducts };

    case ActionTypes.ADD_TO_CART:
      console.log("ADD_TO_CART:", action.payload);
      let found = -1;
      found = state.cart.findIndex(
        (el) => el.productId === action.payload["product"].id
      );
      if (found == -1)
        state.cart.push({
          quantity: action.payload.quantity,
          productId: action.payload["product"].id,
        });
      else {
        state.cart[found].quantity = action.payload.quantity;
      }
      return {
        ...state,
        totalCart: state.cart.reduce((n, object) => n + object.quantity, 0),
      };

    case ActionTypes.ADD_TO_WISHLIST:
      console.log("ADD_TO_WISHLIST:", action.payload);
      return {
        ...state,
        totalWishlist: action.payload.isWishlisted
          ? state.totalWishlist + 1
          : state.totalWishlist - 1,
      };

    case ActionTypes.SORT_PRODUCTS:
      console.log("SORT_PRODUCTS:", action.payload);

      let sortedList = null;
      if (action.payload === "rating") {
        sortedList = initialState.productList.sort(
          (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
        );
      } else if (action.payload === "ascending") {
        sortedList = initialState.productList.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (action.payload === "descending") {
        sortedList = initialState.productList.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
      console.log(sortedList);

      return { ...state, productList: sortedList};

    default:
      return state;
  }
};
