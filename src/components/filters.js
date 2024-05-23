import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../styles/fliterStyle.css'
import { Button } from "react-bootstrap"

const Filters =  () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  const [flitersArray,updateFiltersArray] = useState(
  [{link:"https://freakins.com/cdn/shop/files/PAL07369.jpg?v=1700675739&width=1000",filterName:"Shirts"},{link:"https://freakins.com/cdn/shop/files/RheaNandini03628.jpg?v=1700145105&width=400",filterName:"Jackets"},{link:"https://freakins.com/cdn/shop/files/DSC00741-Edit.jpg?v=1697527476&width=400",filterName:"Accessories"},{link:"https://freakins.com/cdn/shop/files/DSC07158-Edit.jpg?v=1697028963&width=1000",filterName:"Skorts"},{link:"https://freakins.com/cdn/shop/products/Riddhi01221-Edit.jpg?v=1656938230&width=400",filterName:"Jeans"},{link:"https://cdn.shopify.com/s/files/1/0028/9806/7554/files/DSC05219-Edit.jpg?v=1690438026&width=400",filterName:"T-Shirts"},{link:"https://freakins.com/cdn/shop/files/DSC08864.jpg?v=1692978073&width=1000",filterName:"Tops"},{link:"https://freakins.com/cdn/shop/products/DSC03894-Edit-2-Edit.jpg?v=1659279806&width=1000",filterName:"Dresses"},{link:"https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg?crop=0.563xw:1.00xh;0.216xw,0&resize=1200:*",filterName:"Groceries"},{link:"https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",filterName:"Books"},{link:"https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/shutterstock_481616641.jpg",filterName:"Stationery"},{link:"https://cdn.cliqueinc.com/posts/296273/best-perfumes-for-sensitive-noses-296273-1636758647674-square.700x0c.jpg",filterName:"Perfumes"},{link:"https://static.asianpaints.com/content/dam/asian_paints/blog/wood/benefits-of-wooden-furniture/image-1-asian-paints-m.jpeg",filterName:"Furniture"},{link:"https://w7.pngwing.com/pngs/124/695/png-transparent-digital-electronic-products-product-physical-map-digital-electronic-products-phone-thumbnail.png",filterName:"Electronics"},{link:"https://cdn.venuemonk.com/wp-content/uploads/2023/07/e1.jpg",filterName:"Make-Up"}]
  )
  return (
    <div className="whole">

    <div ref={sliderRef} className="keen-slider">

      {flitersArray.map((filter)=>{
        return (
        <div className="frame keen-slider__slide">
          {/* {console.log(filter)} */}
        <div className="div-wrapper" style={{backgroundImage: `url(${filter.link})`}}>
          <div className="text-wrapper">{filter.filterName}</div>
        </div>
      </div>)
      })}
    

    </div>

    </div>
    
  )
}


export default Filters