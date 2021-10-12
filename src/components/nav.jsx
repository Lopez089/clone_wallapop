import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { BsHouse, BsHeart, BsPlusCircle, BsEnvelope, BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<Box
			pos={{ base: "fixed", sm: 'fixed', md: 'fixed', lg: "sticky" }}
			w='100%'
			bottom='0'
			bg='appColor.base'
			display='flex'
			justifyContent='space-around'
			borderTop='1px solid'
			borderColor='appColor.secondary'
			p='1rem'
		>
			<NavLink exact to="/" activeStyle={{ color: "#1f6987", fontWeight: "bold", }}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsHouse />
					<Text fontSize="xs" paddingTop='.3rem'>Inicio</Text>
				</Box>
			</NavLink>
			<NavLink to="/favorite" activeStyle={{ color: "#1f6987", fontWeight: "bold", }}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'  >
					<BsHeart />
					<Text fontSize="xs" paddingTop='.3rem'>Favoritos</Text>
				</Box>
			</NavLink>
			<NavLink to="/upload" activeStyle={{ color: "#1f6987", fontWeight: "bold", }}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsPlusCircle />
					<Text fontSize="xs" paddingTop='.3rem'>Súbelo</Text>
				</Box>
			</NavLink>
			<NavLink to="/mailbox" activeStyle={{ color: "#1f6987", fontWeight: "bold", }}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsEnvelope />
					<Text fontSize="xs" paddingTop='.3rem'>Buzon</Text>
				</Box>
			</NavLink>
			<NavLink to="/you" activeStyle={{ color: "#1f6987", fontWeight: "bold", }}>
				<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
					<BsPerson />
					<Text fontSize="xs" paddingTop='.3rem'>Tú</Text>
				</Box>
			</NavLink>
		</Box >
	)
}