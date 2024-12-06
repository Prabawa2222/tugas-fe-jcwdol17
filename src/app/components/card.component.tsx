"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/types";

const CardComponent = ({
  id,
  img,
  product_name,
  description,
  price,
}: IProduct) => {
  return (
    <div key={id} className="card bg-base-100 w-64 shadow-xl">
      <figure>
        <img src={img} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>{description}</p>
        <p className="font-bold text-lg">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
