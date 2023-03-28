import React, {useState} from 'react';
import s from './Apartment.module.scss';
import {ApartmentCardContacts} from '@/components/common/apartment/apartment-card-contacts/ApartmentCardContacts';
import {Carousel} from 'react-bootstrap';


const Apartment = (props) => {
  const {data, sortList, mainpage} = props;

  const [active, setActive] = useState(false);
  const isSaved = false;

  const likeHandler = async () => {
    console.log('likeHandler');
  };


  return (
    <li className={`${s.item} ${sortList ? s.item_row : ''}`}>
      <div style={{maxWidth: '500px'}}>
        <Carousel interval={null} fade>
          {data?.imageUrls.length > 0 &&
            data.imageUrls.map((imageUrl, i) =>
              <Carousel.Item key={i}>
                <img className={`${s.item__image} ${sortList ? s.item__image_list : ''}`} src={imageUrl} alt="фото квартиры" />
                <p className={s.gold}>Gold</p>
              </Carousel.Item>)}
        </Carousel>
      </div>


      <div>
        {!sortList && <>
          <div className={s.info}>
            <p className={s.info_price}>{data.price}.00 BYN <span
              className={s.info_price_grey}>за сутки</span></p>
            <p className={s.count}>4 (2+2)</p>
            <p
              className={`${s.bedrooms} ${mainpage && s.bedrooms_ml}`}>{data.rooms} комн.</p>
            {mainpage &&
              <p className={`${s.bedrooms} ${mainpage && s.bedrooms_ml}`}>179 м<sup>2</sup>
              </p>}
          </div>


          <div className={s.address}>
            <span className={s.address_location}>{data.location}</span>
          </div>
          <div className={s.area}>
            <span className={`${s.address_location} ${s.area_location}`}>{data.underground}</span>
            <span className={`${s.address_location} ${s.area_location}`}>{data.area}</span>
          </div>
        </>}
        {sortList &&
          <>
            <div className={s.address_list}>
              <p className={s.desc}>4-комн. апартаменты на Грушевке<br></br><span
                className={`${s.address_location} ${s.address_location_list}`}>{data.location}</span>
              </p>

              <p className={`${s.info_price} ${s.info_price_list}`}>{data.price}.00 BYN <span
                className={s.info_price_grey}>за сутки</span></p>
            </div>
            <div className={s.info_list}>
              <p className={`${s.info_count} ${s.info_count_list}`}>4 (2+2)</p>
              <p className={`${s.info_bedrooms} ${s.info_bedrooms_list}`}>{data.rooms} комн.</p>
              <div className={`${s.area} ${s.area_list}`}>
                <p
                  className={`${s.address_location} ${s.area_location} ${s.area_location_list}`}>{data.underground}</p>
                <p className={`${s.address_location} ${s.area_location}`}>
                  <span className={s.area_location_purple}>район:</span> {data.area}</p>
              </div>
            </div>
          </>}

        <p className={s.item_desc}>{data.description}</p>
        <div className={`${s.buttons} ${sortList ? s.buttons_list : ''}`}>
          {!sortList && !mainpage &&
            <button onClick={likeHandler}
              className={`${s.like} ${isSaved && s.like_active}`}/>}

          <button className={s.contacts} onClick={() => setActive(!active)}>
            <span className={s.contacts_desc}>Контакты</span>
            <ApartmentCardContacts active={active}/>
          </button>


          {sortList &&
            <button onClick={likeHandler}
              className={`${s.like} ${s.like_list} ${isSaved && s.like_active}`}>
              <span className={s.like_red}>В закладки</span>
            </button>}
          <button className={s.more}>Подробнее</button>
        </div>
      </div>
    </li>);
};


export {Apartment};
