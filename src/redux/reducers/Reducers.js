import ActionTypes from "../constants/ActionTypes";
import atomicHabitsImage from "/Users/amrutapalo/Desktop/chkdin/src/images/atomicHabits.webp";
import lastLecture from "/Users/amrutapalo/Desktop/chkdin/src/images/lastlecture.webp";
const initialState = {
  productList: [
    ...(localStorage.getItem("productList") == null
      ? []
      : JSON.parse(localStorage.getItem("productList"))),
  ],
};

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
          element.name= action.payload.name;
          element.image= action.payload.image;
          element.description= action.payload.description;
          element.price= action.payload.price;
          element.category= action.payload.category;
          element.ratings= action.payload.ratings;
          console.log("inside if..", element);
          break;
        }
      }
      console.log(initialState.productList);

        localStorage.setItem(
          "productList",
          JSON.stringify(initialState.productList)
        );

      return {...state, productList: initialState.productList};

    case ActionTypes.DELETE_SELECTED_PRODUCT:
      console.log("Reducer: DELETE_SELECTED_PRODUCT:", action.payload);
      const newList = state.productList.filter(
        (element) => element.id !== action.payload
      );
      console.log("AFTER DELETE_PRODUCT:", newList);
      localStorage.setItem("productList", JSON.stringify(newList));
      return { ...state, productList: newList };

    default:
      return state;
  }
};
