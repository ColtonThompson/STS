
import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";

export default function SetFilter({ onValueChange }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cardSets, setCardSets] = useState([]);
    const [cardSetNames, setCardSetNames] = useState([ 'None' ]);
    const [selectedSet, setSelectedSet] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://api.magicthegathering.io/v1/sets",
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

          json?.sets?.map((set) => {
            if (set.name) {
                cardSets.push(set);
                cardSetNames.push(set.name);
            }
          });
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount
  
    if (loading) {
        return (
            <div>
                <Dropdown loading placeholder="Loading..." className="m-4" />                
            </div>
        );
    }

    function getSetForName(value) {
        let filter = "";
        data?.sets?.map((set) => {
            if (set.name) {
                if (value.toLowerCase() == set.name.toLowerCase()) {
                    filter = set.code;
                    return filter;
                }
            }
        });

        return filter;
    }

    // Function to handle the selected set filter 
    const handleChange = (event) => {
        setSelectedSet(event.value)
        onValueChange(getSetForName(event.value));
    };

    return (
        <div>
            <Dropdown value={selectedSet} onChange={handleChange} options={cardSetNames} virtualScrollerOptions={{ itemSize: 24 }} 
                placeholder="Select Set" className="w-full md:w-14rem" style={{ height: '40px', width: '300px'}} />           
        </div>
    )
}