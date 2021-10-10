import React from 'react'
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { likeProduct } from 'features/product/product'
import { useDispatch } from 'react-redux'

export const IsLike = ({ like, id }) => {
    const dispatch = useDispatch()

    return (
        like ?
            <TiHeartOutline onClick={() => dispatch(likeProduct({ id, isLike: false }))} /> :
            <TiHeart onClick={() => dispatch(likeProduct({ id, isLike: true }))} />
    )
}
