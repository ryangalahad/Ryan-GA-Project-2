import React, { useCallback, useEffect, useState } from "react";

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
const ENCODED_TABLE_NAME = encodeURIComponent(AIRTABLE_TABLE_NAME);
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${ENCODED_TABLE_NAME}`;

const FavouritesManager = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFavourites = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error("Could not fetch favourites");
      }
      const data = await res.json();
      setFavourites(data.records);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []); 

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  const saveFavourites = async () => {
    if (!props.currentFrom || !props.currentTo) {
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Base Currency": props.currentFrom,
                "Target Currency": props.currentTo,
              },
            },
          ],
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to save favourite ");
      }
      await fetchFavourites();
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFavourites = async (recordId) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BASE_URL}/${recordId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete favourite.");
      }

      setFavourites((prev) => prev.filter((item) => item.id !== recordId));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="favorites-container">
      <h2>⭐️ Currency Favourites ⭐️ </h2>
      <button
        onClick={saveFavourites}
        disabled={isLoading}
        style={{
          padding: "8px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        Add to Favourites ➕
      </button>
      <h3> Saved Pairs: ({favourites.length}) </h3>

      <ul>
        {favourites.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>
              {item.fields["Base Currency"]} / {item.fields["Target Currency"]}
            </strong>
            <button
              onClick={() => deleteFavourites(item.id)}
              disabled={isLoading}
              style={{
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesManager;
