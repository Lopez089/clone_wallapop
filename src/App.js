import React from 'react'
import { Layout } from 'layout/layout'
import { ProductContainer } from 'container/productContainer'

export const articles = [
  {
    name: 'article-1',
    id: '0',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-2',
    id: '1',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-3',
    id: '2',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  }, {
    name: 'article-4',
    id: '3',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-1',
    id: '0',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-2',
    id: '1',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-3',
    id: '2',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  }, {
    name: 'article-4',
    id: '3',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-1',
    id: '0',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-2',
    id: '1',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  },
  {
    name: 'article-3',
    id: '2',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  }, {
    name: 'article-4',
    id: '3',
    image: 'https://picsum.photos/seed/picsum/200/300',
    price: '200€',
    like: true
  }

]

function App() {
  return (
    <Layout ><ProductContainer /></Layout>
  );
}

export default App;
