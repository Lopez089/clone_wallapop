import React from 'react'
import { Layout } from 'layout/layout'
import { ProductContainer } from 'container/productContainer'
import { LayoutPage } from 'layout/layoutPage';

function App() {
  return (
    <Layout >
      <LayoutPage>
        <ProductContainer />
      </LayoutPage>
    </Layout>
  );
}

export default App;
