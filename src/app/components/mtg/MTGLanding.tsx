"use client";
// Example using fetch in a Next.js component
import { useState, useEffect } from "react";
import MTGCard from "./MTGCard";

export default function MTGLanding() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.magicthegathering.io/v1/cards",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="container mx-auto px-4 border-solid box-border h-128 w-128 p-4 border-4">
        <div className="grid grid-cols-4 grid-rows-8 gap-8">
          {data?.cards?.map((card) => {
            if (card.imageUrl) {
              return (
                <MTGCard
                  key={card.multiverseid}
                  name={card.name}
                  cardImageUrl={card.imageUrl}
                />
              );
            }
          })}{" "}
        </div>
      </div>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </div>
  );
}
