import React from 'react'
import { StyledService } from './styles'

type Service = {
    title: string
    img: unknown
    content: string
}

export const Service = (params: Service) => {
    return (
        <StyledService>
            <div className='left-side'>
                <img src={params.img as string} alt={params.title + "image"} />
            </div>
            <div className='right-side'>
                <h1>{params.title}</h1>
                <p>{params.content}</p>
            </div>
        </StyledService>
    )
}