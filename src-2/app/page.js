"use client";

import Header from "@/components/Header/Header";
import Podcast from "@/app/home/Podcast/Podcast";
import Quote from "@/components/Quote/Quote";
import Service from "@/app/home/Service/Service";
import Consultancy from "./home/Consultancy/Consultancy";
import Blog from "./home/Blog/Blog";
import Program from "./home/Program/Program";

export default function Home() {
  return (
    <div>
      <Header />
      <Podcast></Podcast>
      <Service></Service>
      <Quote></Quote>
      <Consultancy></Consultancy>
      <Program></Program>
      <Blog></Blog>      
    </div>
  );
}
