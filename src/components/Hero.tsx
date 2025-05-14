import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function Hero() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
    });
  }, [api]);

  return (
    <main className="bg-gray-50 dark:bg-slate-800 border-r-4">
      <main className="grid grid-cols-1 md:grid-cols-2 container mx-auto mt-2 ">
        <main className="container mx-auto flex flex-col justify-center space-y-8 h-96 mt-24 ">
          <h1 className="font-bold md:text-2xl opacity-70">
            The Best Collection
          </h1>
          <div className="text-[2.2em] md:text-5xl font-bold leading-14">
            Explore And Search For <br />{" "}
            <span className="text-blue-500">Any Product</span> In Our Store
          </div>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            rerum vitae beatae, sapiente dolor deserunt ipsa voluptas, hic
            commodi veritatis et officiis minus perferendis voluptates fugiat
            accusamus veniam omnis culpa.
          </p>
          <Link
            to="/product/6"
            data-test="hero-btn"
            className="inline-block w-fit bg-white rounded-md mt-4 text-[18px] px-6 py-2 text-black font-bold hover:bg-blue-500 hover:text-white"
          >
            Shop Now
          </Link>
        </main>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="px-10 border-l-4"
        >
          <CarouselContent className="py-10">
            <CarouselItem>
              <img src="/1.webp" alt="" className="rounded-sm" />
            </CarouselItem>
            <CarouselItem>
              <img src="/2.webp" alt="" className="rounded-sm" />
            </CarouselItem>
            <CarouselItem>
              <img src="/3.webp" alt="" className="rounded-sm" />
            </CarouselItem>
            <CarouselItem>
              <img src="/4.webp" alt="" className="rounded-sm" />
            </CarouselItem>
            <CarouselItem>
              <img src="/5.webp" alt="" className="rounded-sm" />
            </CarouselItem>
            <CarouselItem>
              <img src="/6.webp" alt="" className="rounded-sm" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </main>
    </main>
  );
}


export default Hero;
