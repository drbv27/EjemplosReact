import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  //const categories = ["Dragon Ball", "Samurai X", "One Punch"];
  const [categories, setCategories] = useState(["Dragon Ball"]);
  // const handleAdd = () => {
  //   setCategories([...categories, "Inuyasha"]);
  //   //setCategories(cats=>[...cats,"Inuyasha"]);
  // };
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
