import React, { useState } from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = () => {
  //초기값 설정 잘 하자.. 카테고리의 전체보기로.. 이 값이 url에 들어갈텐데  ㅜㅜㅜ
  const [category, setCategory] = useState("all");
  const onSelect = (category) => {
    setCategory(category);
  };
  return (
    <div className="NewsPage">
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
