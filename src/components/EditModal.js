import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editProduct } from "../redux/actions/Actions";
import "./EditModal.css";

const EditModal = (props) => {
  let product = Object.assign(
    {},
    ...useSelector((state) =>
      state.productReducer.productList.filter(
        (element) => element.id == props.id
      )
    )
  );
  console.log("EditModal: ", product, props.id, product.name);

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
    console.log(ref.current.elements);
    console.log(event.target);
    console.log("EditModal: ", product);

    dispatch(
      editProduct({
        id:
          ref.current.elements.name.value + ref.current.elements.category.value,
        name: ref.current.elements.name.value,
        image: imageURL ? imageURL : product.image,
        description: ref.current.elements.description.value,
        price: ref.current.elements.price.value,
        category: ref.current.elements.category.value,
        ratings: ref.current.elements.ratings.value,
      })
    );

    props.setShowModal(false);
  };

  return (
    <div className="edit-modal-container">
      <form
        action=""
        className="edit-product-form"
        ref={ref}
        onSubmit={handleSubmit}
      >
        <span
          className="close-button"
          onClick={() => props.setShowModal(false)}
        >
          {" "}
          &times;{" "}
        </span>

        <img src={imageURL ? imageURL : product.image} alt="" />
        <input type="file" id="image" onChange={onImageUploadHandler} />
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          defaultValue={product.name}
          //   onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter Description"
          id="description"
          defaultValue={product.description}
          //   onChange={onChange}
        />
        <input
          type="number"
          placeholder="Enter Price"
          id="price"
          defaultValue={product.price}
          //   onChange={onChange}
        />
        <select name="category" id="category" defaultValue={product.category}>
          <option value="DEFAULT" disabled>
            Select Category
          </option>
          <option value="books">Books</option>
          <option value="mobile">Mobile</option>
          <option value="television">Television</option>
          <option value="shoes">Shoes</option>
        </select>
        <input
          type="text"
          placeholder="Enter Ratings"
          id="ratings"
          defaultValue={product.ratings}
          //   onChange={onChange}
        />
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditModal;
