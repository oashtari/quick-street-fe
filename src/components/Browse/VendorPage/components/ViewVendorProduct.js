import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../../../../utils/axiosWithAuth";
import { CartContext } from "../../../../contexts/CartContext";

//stlying
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
import "../../../../styles/css/customer/customer_view_profile.css";
import { add } from "../../../../styles/css/vendor/vendor_product_page.css";

const ViewVendorProduct = (props) => {
  const { cart, addToCount } = useContext(CartContext);

  const handleAdd = () => {
    addToCount({
      business_name: props.vendor.business_name,
      avatar: props.product.public_id,
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
    });
  };

  let newImage = "product-images/" + props.product.public_id;

  return (
    <>
      <div
        // onClick={() => showHideModal(true)}
        className="vendor-product-cards"
        key={props.product.id}
      >
        {props.product.public_id ? (
          <CloudinaryContext cloudName="quickstlabs">
            <Image
              className={props.product.profile_product_image}
              publicId={newImage}
            >
              <Transformation height="210" width="280" crop="fill" />
            </Image>
          </CloudinaryContext>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1576158113840-43db9ff3ef09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="a placeholder image"
          />
        )}

        <p>{props.product.name}</p>
        <p>${props.product.price}</p>
        <button className={add} onClick={() => handleAdd()}>
          ADD to Cart
        </button>
      </div>
    </>
  );
};

export default ViewVendorProduct;
