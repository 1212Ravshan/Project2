import React, { Component } from 'react'

export class  Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                key: 'all',
                name: 'Все'
                },
                {
                key: 'svite',
                name: 'Свитер'

                },
                {
                    key: 'shrt',
                    name: 'Футболка'
                },
                {
                    key: 'bruk',
                    name: 'Брюки'
                },
                {
                    key: 'short',
                    name: 'Шорты'
                }
            ]
        }
    }

  render() {
  return (
   <div className='categories'>
    <h1>Категории</h1>
   {this.state.categories.map(el => (
    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
   ))}
   </div>
  )
 }
}
export default Category;