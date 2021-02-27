import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  console.log(category);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const query = category === "all" ? "" : `&category=${category}`;
      setLoading(true);
      try {
        await axios
          .get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=10e11a02ae354fd19874b3bbebffb1e7`
          )
          .then((response) => setArticles(response.data.articles));
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <div>대기 중...</div>;
  }

  if (!articles) {
    return null;
  }
  return (
    <div className="NewsList">
      {articles.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </div>
  );
};

export default NewsList;
