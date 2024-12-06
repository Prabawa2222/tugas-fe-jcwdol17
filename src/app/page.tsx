"use client";

import { useSearch } from "@/context/search.context";
import CardComponent from "./components/card.component";
import CarouselComponent from "./components/carousel.component";
import NavbarComponent from "./components/navbar.component";
import { IProduct } from "@/types/types";
import { useEffect, useState } from "react";
import { api } from "@/utils/axios";

// tugas jcwdol17
// lanjutkan dari project berikut
// user dapat menambahkan barang dan menghitung total harga dikeranjang
// user dapat melakukan filtering terhadap product
// user dapat melakukan CRUD(create read update delete) kepada product
// implementasikan maping array kepada component yg dapat dipisahkan
// gunakan usecontext untuk searching
// gunakan redux untuk add to cart
// gunakan hooks yang mendukung pembuatan project
// student diperbolehkan melakukan perubahan style,design,menambah page dll

export default function Home() {
  const { results } = useSearch();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const displayProducts = results.length > 0 ? results : products;

  return (
    <div className="flex flex-col gap-7">
      <CarouselComponent />
      <div className="grid grid-cols-5 max-w-screen-xl gap-2">
        {displayProducts.map((product, key) => (
          <CardComponent {...product} key={key} />
        ))}
      </div>
    </div>
  );
}
