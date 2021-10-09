import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Product } from 'components/product'
import { useSelector } from 'react-redux'

export const ProductContainer = () => {
	const articles = useSelector((state) => state.product.product)
	console.log({ articles });

	return (
		<SimpleGrid columns={2} spacing={'.5rem'}>
			{articles.map((article) => <Product image={article.image} name={article.name} key={article.id} price={article.price} />)}
		</SimpleGrid>
	)
}