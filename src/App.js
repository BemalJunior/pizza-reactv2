import Categories from './Components/Categories';
import Header from './Components/Header';
import PizzaBlock from './Components/PizzaBlock';
import Sort from './Components/Sort';
import './scss/app.scss';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Сырная" price="550" />
              <PizzaBlock title="Мексиканская" price="450" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;