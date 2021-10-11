import React from 'react'
import { IconContext } from "react-icons";
import { Box, Image, Heading, Text } from '@chakra-ui/react'
import { IsLike } from 'components/isLike'

export const Product = ({ image, name, price, like, id }) => {
	return (
		<>
			<Box as='article' border='1xp solid' borderColor='appColor.secondary' w='100%' borderWidth="1px" borderRadius="1rem">
				<Image src={image} alt={name} w='100%' h='150px' borderRadius=".5rem .5rem 0 0 "></Image>
				<Box p='.5rem' >
					<Box display='flex' alignItems='center' justifyContent='space-between'>
						<Box>
							<Heading as="p" size="1.5rem">
								{price}
							</Heading>
						</Box>
						<Box>
							<IconContext.Provider value={{ style: { color: '#ca3333', fontSize: '1.2rem' } }}>
								<IsLike like={like} id={id} />
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