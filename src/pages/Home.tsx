import AllBooks from '@/components/AllBooks'
import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import LatestBooks from '@/components/LatestBooks'
import type { Product } from '@/models/Product'
import { updateFeaturedList, updateNewList } from '@/redux/features/productSlice'
import { useAppDispatch } from '@/redux/hooks'
import React, { useEffect, type FC } from 'react'

const Home: FC = () => {
  const dispatch = useAppDispatch();
  console.log(dispatch);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://dummyjson.com/products?limit=24")
        .then((res) => res.json())
        .then(({ products }) => {
          const productList: Product[] = [];
          products.forEach((product: Product) => {
            productList.push({
              id: product.id,
              title: product.title,
              images: product.images,
              price: product.price,
              rating: product.rating,
              thumbnail: product.thumbnail,
              description: product.description,
              category: product.category,
              discountPercentage: product.discountPercentage,
            });
          });
          dispatch(updateFeaturedList(productList.slice(0, 8)));
          dispatch(updateNewList(productList.slice(8, 16)));
        });
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
    <Hero />
    <HeroSection />
    <AllBooks />
    <Banner />
    <LatestBooks />
    </>
  )
}

export default Home