import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BsHouse, BsHeart, BsPlusCircle, BsEnvelope, BsPerson } from "react-icons/bs";
import {
	Link
} from "react-router-dom";

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
			<Link to="/">
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsHouse />
					<Text fontSize="xs" paddingTop='.3rem'>Inicio</Text>
				</Box>
			</Link>
			<Link to="/favorite">
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
					<BsHeart />
					<Text fontSize="xs" paddingTop='.3rem'>Favoritos</Text>
				</Box>
			</Link>
			<Link to="/upload">
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsPlusCircle />
					<Text fontSize="xs" paddingTop='.3rem'>Súbelo</Text>
				</Box>
			</Link>
			<Link to="/mailbox">
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsEnvelope />
					<Text fontSize="xs" paddingTop='.3rem'>Buzon</Text>
				</Box>
			</Link>
			<Link to="/you">
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsPerson />
					<Text fontSize="xs" paddingTop='.3rem'>Tú</Text>
				</Box>
			</Link>
		</Box >
	)
}