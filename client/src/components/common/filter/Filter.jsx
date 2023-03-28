import React, {useState} from 'react';
import s from './Filter.module.scss';
import {DropdownList} from '@/components/ui/dropdown-list/DropdownList';
import {Link} from 'react-router-dom';
import {APARTMENTS_ROUTE} from '@/utils/consts';

const names = [1, 2, 3, 4, 5];

const Filter = (props) => {
  const {mainPage, data, setSortData} = props;

  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState({
    // rent: false,
    minPrice: '',
    maxPrice: '',
  });


  const filteredApartments = data?.filter((el) => {
    // if (filter.rent && !el.rent) {
    //   return false;
    // }

    if (
      filter.minPrice &&
      parseInt(el.price) < parseInt(filter.minPrice)
    ) {
      return false;
    }

    if (
      filter.maxPrice &&
      parseInt(el.price) > parseInt(filter.maxPrice)
    ) {
      return false;
    }

    if (!!rooms.length &&
      rooms.find((count) => count !== el.rooms)
    ) {
      return false;
    }

    // if (
    //   filter.maxRooms &&
    //   parseInt(el.rooms) > parseInt(filter.maxRooms)
    // ) {
    //   return false;
    // }

    return true;
  });


  const handleFilterChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFilter((prev) => ({...prev, [name]: value}));
  };

  const clearHandler = () => {
    setRooms([]);
    setFilter({
      minPrice: '',
      maxPrice: '',
    });
    setSortData && setSortData(data);
  };

  const buttonHandler = () => {
    setSortData && setSortData(filteredApartments);
    console.log('buttonHandler map');
  };

  return (
    <div className={s.container}>
      <div className={`${s.wrap} ${!mainPage && s.wrap_width}`}>
        <div className={`${s.shadow} ${!mainPage && s.shadow_width}`}>
          <ul className={s.list}>
            {/* {mainPage &&*/}
            {/*  <li className={s.item}>*/}
            {/*    <h3 className={s.title}>Город</h3>*/}
            {/*    <select name="city" className={s.select}*/}
            {/*      value={city}*/}
            {/*      onChange={handleFilterChange}>*/}
            {/*      <option disabled value='' className={s.option}>Выберите</option>*/}
            {/*      {cities.map((city) => <option key={city.id}>{city.city}</option>)}*/}
            {/*    </select>*/}
            {/*  </li>}*/}


            <li className={`${s.item} ${!mainPage && s.item_flex}`}>
              <h3 className={`${s.title} ${!mainPage && s.title_purple}`}>Комнаты</h3>
              <DropdownList array={names} state={rooms} setState={setRooms}/>
            </li>

            <li className={`${s.item} ${!mainPage && s.item_flex}`}>
              <h3 className={`${s.title} ${!mainPage && s.title_purple}`}>Цена за сутки (BYN)</h3>
              <label>
                <input className={`${s.input} ${s.input_mr}`}
                  value={filter.minPrice}
                  name="minPrice"
                  type='number'
                  placeholder="От"
                  onChange={handleFilterChange}/>
              </label>
              -
              <label>
                <input className={`${s.input} ${s.input_ml}`}
                  value={filter.maxPrice}
                  name="maxPrice"
                  type='number'
                  placeholder="До"
                  onChange={handleFilterChange}/>
              </label>
            </li>
            <li className={`${s.item} ${s.item_option}`}>Больше опций</li>


            {mainPage && <li className={`${s.item} ${s.item_map}`}>На карте</li>}
          </ul>


          {!mainPage && <button className={s.button_clear} onClick={clearHandler}>Очистить</button>}

          <Link to={APARTMENTS_ROUTE} className={`${s.button} ${!mainPage && s.button_purple}`}
            onClick={buttonHandler}>
            {mainPage ? 'Показать' : 'Показать объекты'}
          </Link>
        </div>
      </div>

    </div>
  );
};

export {Filter};
