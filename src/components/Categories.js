import React from "react";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = ({ onSelect, category }) => {
  return (
    <div className="Categories">
      {categories.map((c) => (
        <div
          key={c.name}
          onClick={() => onSelect(c.name)}
          className={category === c.name ? "item active" : "item"}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Categories;
