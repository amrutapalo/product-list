import ActionTypes from "../constants/ActionTypes";
import atomicHabitsImage from "/Users/amrutapalo/Desktop/chkdin/src/images/atomicHabits.webp";
import lastLecture from "/Users/amrutapalo/Desktop/chkdin/src/images/lastlecture.webp";

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
  wishlist: 0,
  cart: 0,
};

//  ---- REDUCERS -----

// ---- productReducer : for product related operations
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_PRODUCTS:
      return state;

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
      console.log("searchReducer: ", action.payload);
      console.log("state received: ", state);

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
      console.log("AFTER search: ", {
        ...state,
        searchedProducts: initialState.searchedProducts,
      });
      return { ...state, searchedProducts: initialState.searchedProducts };

    default:
      return state;
  }
};

// ---- searchReducer : for search related operations
// export const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.SEARCH_PRODUCTS:
//       console.log("searchReducer: ", action.payload);
//       console.log("state received: ", state);

//       if (action.payload.expression == "") {
//         return { ...state, searchedProducts: [] };
//       }

//       if (action.payload.type === "name") {
//         initialState.searchedProducts = [];
//         initialState.searchedProducts = state.productList.filter((element) =>
//           element.name.toLowerCase().match(action.payload.expression)
//         );
//       } else if (action.payload.type === "category") {
//         initialState.searchedProducts = [];
//         initialState.searchedProducts = state.productList.filter(
//           (element) =>
//             element.category.toLowerCase() ===
//             action.payload.expression.toLowerCase()
//         );
//       }
//       console.log("AFTER search: ", {
//         ...state,
//         searchedProducts: initialState.searchedProducts,
//       });
//       return { ...state, searchedProducts: initialState.searchedProducts };

//     default:
//       return state;
//   }
// };
