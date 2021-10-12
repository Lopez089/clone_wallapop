import React from 'react'
import { Box, } from '@chakra-ui/react'
import { Nav } from 'components/nav'

export const LayoutPage = ({ children }) => {
	return (
		<Box h='100%' position='relative'  >
			<Box p='.5rem' minH='100%'>
				{children}
			</Box >
			<Nav />
		</Box>
	)
}