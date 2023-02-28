import React from 'react'
import './OneProduct.css'

const OneProduct = (props) => {
  console.log('OneProducts start:', props);

  return (
    <div className='items'>
      {
        props.items.map((item, index) => (
          <div className='one_item border_color_dg' key={index}>
            <div className='item_image_div border_color_dg'>
              <img className='item_image' src={item.image} alt="Product photo" />
            </div>
            <div className='item_info_part bg_color border_color_dg'>
              <h6 className='item_category text_color'> {item.category}</h6>
              <div className='title_div'>
                <h4 className='title'>{item.title}</h4>
              </div>
              <div><p className='price text_color'>Price: {item.price}$</p></div>
              <div className='description_div'>
                <p className='description text_color'>{item.description}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OneProduct
