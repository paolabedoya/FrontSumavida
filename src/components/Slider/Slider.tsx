import React, { useState } from 'react'
import Slider1 from '../../assets/slider-1.jpeg'
import Slider2 from '../../assets/slider-2.jpeg'
import Slider3 from '../../assets/slider-3.jpeg'
import { StyledSlider } from './styles'

export function Slider() {
    const sliderImages = [
        {
            image: Slider1,
            description: (
                <>
                    <h5>first slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </>
            )
        },
        {
            image: Slider2,
            description: (
                <>
                    <h5>second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </>
            )
        },
        {
            image: Slider3,
            description: (
                <>
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </>
            )
        },
    ]
    const [sliderIndex, setSliderIndex] = useState<number>(0)

    const nextImage = () => {
        if (sliderIndex < sliderImages.length - 1) {
            const imageWidth = document.querySelector('.image-container')?.querySelector('img')?.clientWidth as number
            const imageContainer = document.querySelector('.image-container');

            (imageContainer as unknown as {
                style: { transform: string }
            })
            .style['transform'] = `translateX(-${imageWidth * (sliderIndex + 1)}px)`
            setSliderIndex(sliderIndex + 1)
        }
    }

    const previousImage = () => {
        if (sliderIndex > 0) {
            const imageWidth = document.querySelector('.image-container')?.querySelector('img')?.clientWidth as number
            const imageContainer = document.querySelector('.image-container');

            (imageContainer as unknown as {
                style: { transform: string }
            })
            .style['transform'] = `translateX(${imageWidth * (-sliderIndex + 1)}px)`
            setSliderIndex(sliderIndex - 1)
        }
    }

    return (
        <StyledSlider>
            <div className='image-container'>
                {sliderImages.map((image, index) => (
                    <img key={index} src={image.image} alt='slider image 1' />
                ))}
            </div>
            <div className='slider-button-container'>
                <button onClick={previousImage}>&lt;</button>
                <div className='slider-information'>
                    {sliderImages[sliderIndex].description}
                    <div className='slider-information__selectors'>
                        {sliderImages.map((_image, index) => {
                            return <button key={index} style={{
                                backgroundColor: sliderIndex === index ? '#000000' : 'rgba(0,0,0,.3)'
                            }} onClick={() => setSliderIndex(index)}></button>
                        })}
                    </div>
                </div>
                <button onClick={nextImage}>&gt;</button>
            </div>
        </StyledSlider>
    )
}
