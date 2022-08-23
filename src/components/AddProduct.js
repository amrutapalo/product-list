import React, { useRef } from "react";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/Actions";

const AddProduct = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  let imageURL = null;

  const onImageUploadHandler =  async (event) => {
    const reader = new FileReader();
    await reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      console.log(reader.result);
      imageURL = reader.result;
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ref.current.elements.name.value);
    dispatch(
      addProduct({
        id: ref.current.elements.name.value + ref.current.elements.category.value,
        name: ref.current.elements.name.value,
        image: imageURL,
        description: ref.current.elements.description.value,
        price: ref.current.elements.price.value,
        category: ref.current.elements.category.value,
        ratings: ref.current.elements.ratings.value,
      })
    );
  };

  return (
    <div>
      <form
        action=""
        className="add-product-form"
        ref={ref}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Enter Name" id="name" />
        <input type="file" id="image" onChange={onImageUploadHandler} />
        <input type="text" placeholder="Enter Description" id="description" />
        <input type="number" placeholder="Enter Price" id="price" />
        <select name="category" id="category">
          <option value="0" selected disabled>
            Select Category
          </option>
          <option value="philips">Philips</option>
          <option value="sony">Sony</option>
          <option value="panasonic">Panasonic</option>
          <option value="lg">LG</option>
        </select>
        <input type="text" placeholder="Enter Ratings" id="ratings" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
