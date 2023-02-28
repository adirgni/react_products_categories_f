import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './CategoryList.css'
import { getNewCat } from '../../services/ProductsService'
import { getNewList } from '../../services/ProductsService'
import OneProduct from '../oneProduct/OneProduct';

const CategoryList = () => {

  const [searchCategory, setSearchCategory] = useState([]); //kategorijoms
  const [searchNewList, setsearchNewList] = useState([]); // naujam sarasui

  // funkcija gauti kategoriju sarasa

  const getNewCategoryList = () => {
    getNewCat().then((response) => {
      setSearchCategory([...response])
    })
  }
  useEffect(() => { getNewCategoryList() }, [])

  // funkcija gauti nauja produktu sarasa pagal pasirinkta kategorija

  const getFilteredList = (item) => {
    console.log('getFilteredItem', item);
    getNewList(item).then((response) => {
      setsearchNewList([...response])
      console.log('getNewcatList', response)
    })
  }

  return (
    <div className='category_div'>

      <div className='category_list_div bg_color'>
        <h4 className='title_category'>Choose Category &raquo; </h4>
        <div className='category_buttons'>
        {
          searchCategory.map((item, index) => (
            <div className='category_btn_div' key={index}>
              <button className='category_btn bg_color' onClick={() => getFilteredList(item)}> {item.category}</button>
            </div>
          ))
        }
        </div>
      </div>

      <div className='selected_category'>
        <fieldset className='selection_frame'>
          <legend className='legend text_color'>Your category Selection</legend>
          <OneProduct items={searchNewList} />
        </fieldset>
      </div>

    </div>
  )
}

export default CategoryList
