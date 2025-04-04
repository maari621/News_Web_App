import React, { useState, useEffect } from "react";
import "./Body.css";
import { useParams } from "react-router-dom";
import NewsItem from "../NewsItems/NewsItem";
export default function Body() {
  const { id } = useParams(); // Get the ID from the URL
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "876719291248422db7bd388300201a4c";
      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await fetch(
          `http://newsapi.org/v2/everything?q=${id}&pageSize=100&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Update state with fetched data
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [id]); // Re-run effect when `id` changes

  if (loading) {
    return <h1 className="text-center m-5">Loading...</h1>; // Show loading message
  }

  if (error) {
    return <h1 className="text-center m-5">Error: {error}</h1>; // Show error message
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-center m-5">{id}</h1>
      <div className="row">
        {data && data.articles && data.articles.length > 0 ? (
          data.articles
            .filter((article) => article.source.name !== "[Removed]") // Exclude articles with specific source name
            .map((article, index) => <NewsItem key={index} article={article} />)
        ) : (
          <p>No articles found for this category.</p>
        )}
      </div>
    </div>
  );
}
