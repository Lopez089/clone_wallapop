import React from 'react'
import { IconContext } from "react-icons";
import { TiHeartOutline, } from "react-icons/ti";
import { Box, Image, Heading, Text } from '@chakra-ui/react'

export const Product = ({ image, name, price, like }) => {
	return (
		<>
			<Box as='article' border='1xp red solid' w='100%' borderWidth="1px" borderRadius="1rem">
				<Image src={image} alt={name} w='100%' h='150px' borderRadius=".5rem .5rem 0 0 "></Image>
				<Box p='.5rem' >
					<Box display='flex' alignItems='center' justifyContent='space-between'>
						<Box>
							<Heading as="p" size="1.5rem">
								{price}
							</Heading>
						</Box>
						<Box>
							<IconContext.Provider value={{ style: { color: 'gray', fontSize: '1.5rem' } }}>
								<TiHeartOutline />
							</IconContext.Provider>
						</Box>
					</Box>
					<Box>
						<Text fontSize="1rem">{name}</Text>
					</Box>
				</Box>
			</Box>
		</>
	)
}