

const Slider = () => {
    return (
        <div>
             <div className="carousel w-full flex-1 rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full opacity-80" />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-lg font-semibold">
        <p>hello </p>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
       
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full opacity-80" />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-lg font-semibold">
        <p>hello </p>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
       
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full opacity-80" />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-lg font-semibold">
        <p>hello </p>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
       
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>  
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full opacity-80" />
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-lg font-semibold">
        <p>hello </p>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
       
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>  
  
  
  </div>
            


        </div> 
            
            
  

    );
};

export default Slider;