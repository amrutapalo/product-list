import ActionTypes from "../constants/ActionTypes";
import atomicHabitsImage from "/Users/amrutapalo/Desktop/chkdin/src/images/atomicHabits.webp";
import lastLecture from "/Users/amrutapalo/Desktop/chkdin/src/images/lastlecture.webp";
const initialState = {
  productList: [
    // {
    //   name: "Atomic Habits",
    //   image: atomicHabitsImage,
    //   description: "English, Paperback, Jame Clear",
    //   price: "468",
    //   category: "Books",
    //   ratings: "4.7",
    // },
    // {
    //   name: "Last Lecture",
    //   image: lastLecture,
    //   description: "English, Paperback, James Clear",
    //   price: "468",
    //   category: "Books",
    //   ratings: "4.7",
    // },
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
      return { ...state, productList: [...state.productList, action.payload] };

    case ActionTypes.DELETE_SELECTED_PRODUCT:
        console.log("Reducer: DELETE_SELECTED_PRODUCT:", action.payload);
        const newList = state.productList.filter((element) => element.id !== action.payload)
        console.log("AFTER DELETE_PRODUCT:",newList);
        return {...state, productList: newList};
    default:
      return state;
  }
};
