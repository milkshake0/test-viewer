import React from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = ({ match }) => {
  //   //초기값 설정 잘 하자.. 카테고리의 전체보기로.. 이 값이 url에 들어갈텐데  ㅜㅜㅜ
  //   const [category, setCategory] = useState("all");
  //   const onSelect = (category) => {
  //     setCategory(category);
  //   };

  //가져온 category값이 null이면 all로 대체
  const category = match.params.category || "all";
  return (
    <div className="NewsPage">
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
