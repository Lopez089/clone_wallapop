import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BsHouse, BsHeart, BsPlusCircle, BsEnvelope, BsPerson } from "react-icons/bs";

export const Nav = () => {
	return (
		<Box
			pos="sticky"
			w='100%'
			bottom='0'
			bg='white'
			display='flex'
			justifyContent='space-around'
			borderTop='1px solid'
			borderColor='gray.200'
			p='1rem'
		>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
				<BsHouse />
				<Text fontSize="xs" paddingTop='.3rem'>Inicio</Text>
			</Box>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
				<BsHeart />
				<Text fontSize="xs" paddingTop='.3rem'>Favoritos</Text>
			</Box>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
				<BsPlusCircle />
				<Text fontSize="xs" paddingTop='.3rem'>Súbelo</Text>
			</Box>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
				<BsEnvelope />
				<Text fontSize="xs" paddingTop='.3rem'>Buzon</Text>
			</Box>
			<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
				<BsPerson />
				<Text fontSize="xs" paddingTop='.3rem'>Tú</Text>
			</Box>
		</Box >
	)
}