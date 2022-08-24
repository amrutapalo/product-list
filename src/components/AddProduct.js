import React, { useRef } from "react";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/Actions";

const AddProduct = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  let imageURL = null;

  const onImageUploadHandler = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      imageURL = reader.result;
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current.elements.name.value);
    dispatch(
      addProduct({
        id:
          ref.current.elements.name.value + ref.current.elements.category.value,
        name: ref.current.elements.name.value,
        image: imageURL,
        description: ref.current.elements.description.value,
        price: ref.current.elements.price.value,
        category: ref.current.elements.category.value,
        ratings: ref.current.elements.ratings.value,
      })
    );

    event.target.reset();
  };

  return (
    <div className="add-product-container">
      <form
        action=""
        className="add-product-form"
        ref={ref}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Enter Name" id="name" required />
        <input type="text" placeholder="Enter Description" id="description" />

        <input type="number" placeholder="Enter Price" id="price" required />
        <select name="category" id="category" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Select Category
          </option>
          <option value="books">Books</option>
          <option value="mobile">Mobile</option>
          <option value="television">Television</option>
          <option value="shoes">Shoes</option>
        </select>
        <input
          type="number"
          placeholder="Enter Ratings"
          id="ratings"
          required
          max="5"
          step="0.5"
        />
        <input type="file" id="image-input" onChange={onImageUploadHandler} />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
