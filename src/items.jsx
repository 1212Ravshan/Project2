// import React, { Component } from 'react'
// import Item from './Item';
// export class  Items extends Component {
//   render() {
//   return (
//    <main>
//     {this.props.items.map(el => {
//       <Item item={el} />
//     })}
//    </main>
//   )
//  }
// }
// export default Items;

import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Item onshowItem={this.props.onshowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
