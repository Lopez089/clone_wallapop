import React from 'react'
import { LayoutPage } from 'layout/layoutPage';
import { Box, Heading, Text, Tab, Tabs, TabList, TabPanels, TabPanel, Image, Button } from '@chakra-ui/react';
import likeProduct from 'images/likeProduct.svg'
import likeProfile from 'images/likeProfile.svg'
import likeSearch from 'images/likeSearch.svg'

const favoriteEmptyContent = {
    product: {
        header: 'Productos que te gustan.',
        copy: 'Para guardar un producto, pulsa el iconode producto favorito (❤️).'
    },
    search: {
        header: 'Cosas que quieres encontrar',
        copy: 'Para guardar una búsqueda, pulsa el botón "guardar búsqueda" al realizar una. Te avisaremos cuando haya productos que encajen con tus criterios.'
    },
    profile: {
        header: 'Personas que te interesan.',
        copy: 'Para guardar un perfil de usuario, pulsa el icono de perfil favorito.'
    }
}


const NavSection = () => {
    return (
        <Box paddingY='1rem'>
            <Tabs variant='soft-rounded' >
                <TabList display='flex' justifyContent='space-around'>
                    <Tab>Productos</Tab>
                    <Tab>Búsquedas</Tab>
                    <Tab>Perfiles</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><EmptyContent img={likeProduct} header={favoriteEmptyContent.product.header} copy={favoriteEmptyContent.product.copy} /></TabPanel>
                    <TabPanel><EmptyContent img={likeSearch} header={favoriteEmptyContent.search.header} copy={favoriteEmptyContent.search.copy} /></TabPanel>
                    <TabPanel><EmptyContent img={likeProfile} header={favoriteEmptyContent.profile.header} copy={favoriteEmptyContent.profile.copy} /></TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}



const EmptyContent = ({ img, header, copy, }) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Image src={img} htmlWidth='75%' marginY='2rem' />
            <Heading align='center' size='md' marginTop='2rem'>{header} </Heading>
            <Text fontSize='sm' marginY='1rem' align='center'>{copy}</Text>
            <Button colorScheme='blue' >Buscar en Wallapop</Button>
        </Box>
    )
}

export const Favorite = () => {
    return (
        <LayoutPage>
            <NavSection />
        </LayoutPage>
    )
}