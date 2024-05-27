"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input"

const Search = ({ placeholders = [
        "What's on your mind?",
        "What are you looking for?",
        "Find your perfect outfit?",
        "What are you looking for?",
        "Find your perfect outfit?",
    ]}: { placeholders?: string[] }) => {

    const [query, setQuery] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };

      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = "";

            if(query){
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "query",
                    value: query,
                })
            } else {
                newUrl = removeKeysFromQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["query"],
                })
            }
            router.push(newUrl, { scroll: false });
        }, 300)

        return () => clearTimeout(delayDebounceFn);

    }, [query, searchParams, router])

return (
    <div className="flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Search for your favorite products
      </h2>
            <PlaceholdersAndVanishInput
            placeholders={placeholders} 
            onChange={(e) => setQuery(e.target.value)}
            onSubmit={onSubmit}
           />
            
    </div>
)
}

export default Search
