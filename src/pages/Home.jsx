import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/Block/Skeleton";
import PizzaBlock from "../Components/Block/PizzaBlock";
import { Pagination } from "../Components/Pagination/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId)
  console.log(categoryId)


  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const dispatch = useDispatch()

  const onChangeCategory = (id) => {

  }

  const search = searchValue ? `&search=${searchValue}` : "";

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzazMap = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  // .filter((obj) => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // })

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://652941c855b137ddc83e7703.mockapi.io/pizza?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}&order=${search}`
    )
      .then((resolve) => {
        return resolve.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
    // eslint-disable-next-line
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzazMap}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
