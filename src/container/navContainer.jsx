import React from 'react';
import { Box } from '@chakra-ui/react'
import { navApp } from 'constants/nav'
import { LinkNavApp } from 'components/linkNavApp'

export const NavContainer = () => {

	const { links } = navApp;

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
			{
				links.map(link => (
					<LinkNavApp
						path={link.path}
						name={link.name}
						icon={link.icon}
					/>
				))
			}
		</Box >
	)
}