import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Product } from 'components/product'
import { articles } from 'App'

export const ProductContainer = () => {
	return (
		<SimpleGrid columns={2} spacing={'.5rem'}>
			{articles.map((article) => <Product image={article.image} name={article.name} key={article.id} price={article.price} />)}
		</SimpleGrid>
	)
}