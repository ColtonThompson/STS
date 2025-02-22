"use client";

import { useState, useEffect } from "react";
import MTGCard from "./MTGCard";
import { Metadata } from "next";
import SetFilter from "./filters/SetFilter";
import MTGPaginator from "./MTGPaginator";

export default function MTGLanding() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardSetFilter, setCardSetFilter] = useState("");
  const [cardsPage, setCardsPage] = useState(1);

  async function fetchData() {
    try {
      const response = await fetch(
          "https://api.magicthegathering.io/v1/cards?page=" + cardsPage,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Page-Size": "100",
              "Count": "100",
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
  
  const handleChangeCardSetFilter = (value) => {
    setCardSetFilter(value);
  };

  const handlePageChange = async (value) => {
    setCardsPage(value);
    await fetchData();
  };  

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  let sortedData = data?.cards;

  function applyFilters() {
    sortedData = [];
    let setFilter = cardSetFilter;

    data?.cards?.map((card) => {
      let name = card.name;
      let set = card.set;
      if (cardSetFilter) {
        if (set.toLowerCase() === setFilter.toLowerCase()) {
          sortedData.push(card);
        }
      }
    });
    return sortedData;
  }

  function getCardsForFilter() {
    if (cardSetFilter) {
      return applyFilters();
    }
    return sortedData;
  }

  console.log("set filter: " + cardSetFilter);
  console.log("number of cards: " + getCardsForFilter().length);

  const checkIfNoData = () => {
    if (sortedData.length <= 0) {
      return (
        <div>
          <h2>No results!</h2>
          <p>Check your filters and try again.</p>
        </div>
      );
    }
  };

  return (
    <div>
      
      <div className="justify-center items-center w-96 m-4">
        <SetFilter onValueChange={handleChangeCardSetFilter} />
        
      </div>
      <div className="mb-4">
        <MTGPaginator onValueChange={handlePageChange}/>
      </div>
      <div className="container mx-auto px-4 border-solid box-border h-128 w-128 p-4 border-4">
        <div className="grid grid-cols-4 grid-rows-8 gap-4">
          {checkIfNoData()}
          {getCardsForFilter().map((card) => {
            // Only show cards with image data
            if (card.imageUrl) {
              return (
                <MTGCard
                  key={card.multiverseid}
                  name={card.name}
                  rarity={card.rarity}
                  type={card.type}
                  colors={card.colors}
                  cardImageUrl={card.imageUrl}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
