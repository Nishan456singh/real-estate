"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

function HeroParallaxDemo() {
    const products = [
        {
          title: "Moonbeam",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Cursor",
          link:"",
          thumbnail:
            "https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Rogue",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      
        {
          title: "Editorially",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Editrix AI",
          link:"",
          thumbnail:
            "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Pixel Perfect",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      
        {
          title: "Algochurn",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Moonbeam",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Cursor",
          link:"",
          thumbnail:
            "https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Rogue",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      
        {
          title: "Editorially",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Editrix AI",
          link:"",
          thumbnail:
            "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Pixel Perfect",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      
        {
          title: "Algochurn",
          link: "",
          thumbnail:
            "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ];
      
  return <HeroParallax products={products} />;
}
export default HeroParallaxDemo;