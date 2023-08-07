import Header from './Header/header';
import Footer from './Footer/footer';
import React from 'react';
import Items from './items';
import Category from './Category';
import Come from './come';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: [],
      currentItem: [],
      items: [
         {
          id: 1,
          title: 'Свитер',
          img: 'sweater.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'svite',
          price:  '49.99'
         },
         {
          id: 2,
          title: 'Футболка',
          img: 'tshirt2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'shrt',
          price:  '29.50'
         },
         {
          id: 3,
          title: 'Брюки',
          img: 'bruk.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'bruk',
          price:  '56.00'
         },
         {
          id: 4,
          title: 'Шорты',
          img: 'shorty.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'short',
          price:  '24.00'
         },
         {
          id: 5,
          title: 'Свитер',
          img: 'sviter.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'svite',
          price:  '49.99'
         },
         {
          id: 6,
          title: 'Футболки',
          img: 'tshirt.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'shrt',
          price:  '49.99'
         },
         {
          id: 7,
          title: 'Шорты',
          img: 'shorty1.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'short',
          price:  '49.99'
         },
         {
          id: 8,
          title: 'Брюки',
          img: 'bruk2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'bruk',
          price:  '49.99'
         },
         {
          id: 9,
          title: 'Свитер',
          img: 'sviter2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'svite',
          price:  '49.99'
         },
         {
          id: 10,
          title: 'Футболка',
          img: 'tshirt2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'shrt',
          price:  '49.99'
         },
         {
          id: 11,
          title: 'Брюки',
          img: 'bruk3.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'bruk',
          price:  '49.99'
         },
         {
          id: 12,
          title: 'Шорты',
          img: 'shorty2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'short',
          price:  '49.99'
         },
         {
          id: 13,
          title: 'Свитер',
          img: 'sviter3.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'svite',
          price:  '49.99'
         },
         {
          id: 14,
          title: 'Брюки',
          img: 'bruk3.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'bruk',
          price:  '49.99'
         },
         {
          id: 15,
          title: 'Свитер',
          img: 'sviter3.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'svite',
          price:  '49.99'
         },
         {
          id: 16,
          title: 'Футболка',
          img: 'tshirt2.jpg',
          desc: 'Lorem ipsum dolor sit amet adipiscing elit',
          category: 'shrt',
          price:  '49.99'
         },
    ],
    showItem: false,
    fullItem: {}
    }
    this.state.currentItem = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onshowItem = this.onshowItem.bind(this)
  }

render() {
  return (
  
   
    
    <div className="App">
      <Header order={this.state.order} onDelete={this.deleteOrder}/> 
      
    
     <Category chooseCategory={this.chooseCategory} /> 
     <Items onshowItem={this.onshowItem} items={this.state.currentItem} onAdd={this.addToOrder} /> 
          {this.state.showItem && <showItem item={this.state.fullItem} />}
         
     <Come />
       <Footer /> 
    </div>
   
  );
  }

  onshowItem(item) {
    this.setState({fullItem: item})
    this.setState({showItem: ! this.state.showItem})
  }
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItem:  this.state.items});
      return
    } else {
    this.setState({
      currentItem: this.state.items.filter(el => el.category === category)
    });
  }
}
  deleteOrder(id) {
    this.setState((prevState) => ({
      order: prevState.order.filter((el) => el.id !== id),
    }));
  }
  
  addToOrder(item) {
    let isarray = false;
    this.state.order.forEach(el => {
      if(el.id === item.id)
      isarray = true;
    })
    if(!isarray)
     this.setState({order: [...this.state.order, item] })
  }
}
export default App;
