interface ProductBoxProps {
  imgSrc: string;
  alt: string;
}

export default function ProductBox(props: ProductBoxProps) {
  const {imgSrc, alt} = props

  return(
  <div className="cursor-pointer shadow-sm border rounded-md bg-white p-3 flex justify-center align-center content-center items-center max-w-24 hover:max-w-28 hover:shadow-xl transition-all duration-200">
    <img src={imgSrc} alt={alt}></img>
  </div>
  )
}
