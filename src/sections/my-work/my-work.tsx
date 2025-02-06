import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//Carousel
import Img1 from "../../images/my-work/carousel/img-1-min.jpg";
import Img2 from "../../images/my-work/carousel/img-2-min.jpg";
import Img3 from "../../images/my-work/carousel/img-3-min.jpg";
import Img4 from "../../images/my-work/carousel/img-4-min.jpg";
import Img5 from "../../images/my-work/carousel/img-5-min.jpg";

//Grid

import Img1Grid from "../../images/my-work/grid/img-1-min.jpg";
import Img2Grid from "../../images/my-work/grid/img-2-min.jpg";
import Img4Grid from "../../images/my-work/grid/img-4-min.jpeg";
import Img5Grid from "../../images/my-work/grid/img-5-min.jpg";
import Img6Grid from "../../images/my-work/grid/img-6-min.jpeg";
import Img7Grid from "../../images/my-work/grid/img-7-min.jpg";
import Img10Grid from "../../images/my-work/grid/img-10-min.jpg";
import Img11Grid from "../../images/my-work/grid/img-11-min.jpg";
import Img12Grid from "../../images/my-work/grid/img-12-min.jpg";
import Button from "../../components/button/button";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MyWork = () => {
  const openBuyPics = () => {
    window.open("https://www.lumepic.com/estefifeirer", "_blank");
  };

  return (
    <section className="block w-[80%] m-auto text-center mt-10 lg:flex lg:flex-col gap-y-4 items-center">
      <h1 className="font-poppinsBold text-2xl">Mi trabajo</h1>
      <p className="font-poppinsLight mt-2 text-gray-500 md:w-[60%] m-auto">
        Conoce de primera mano la calidad de mi trabajo y el profesionalismo con
        el que me desempeño.
      </p>

      {/* MOBILE */}

        <Carousel className="mt-8 lg:hidden!" responsive={responsive} swipeable>
            <div>
                <img src={Img1} alt="Image 1" />
            </div>

            <div>
                <img src={Img2} alt="Image 2" />
            </div>

            <div>
                <img src={Img3} alt="Image 3" />
            </div>

            <div>
                <img src={Img4} alt="Image 4" />
            </div>

            <div>
                <img src={Img5} alt="Image 5" />
            </div>
        </Carousel>


      {/* DESKTOP - 1024px */}

        <div className="mt-5 hidden lg:flex flex-row flex-wrap lg:w-[80%] lg:m-auto lg:mt-10 xl:w-[60%]">
            <img className="basis-1/3 w-1/3" src={Img1Grid} alt="Image 1" />
            <img className="basis-1/3 w-1/3" src={Img2Grid} alt="Image 2" />
            <img className="basis-1/3 w-1/3" src={Img5Grid} alt="Image 5" />
            <img src={Img12Grid} alt="Image 12" />
            <img src={Img11Grid} alt="Image 11" />
            <img className="basis-1/3 w-1/3" src={Img4Grid} alt="Image 4" />
            <img className="basis-1/3 w-1/3" src={Img6Grid} alt="Image 6" />
            <img className="basis-1/3 w-1/3" src={Img10Grid} alt="Image 10" />
            <img src={Img7Grid} alt="Image 7" />
        </div>

      <Button
        onClick={openBuyPics}
        label="Comprar ahora"
        className="bg-[#0C2A3E] w-fit px-4 m-auto mt-6"
        whileInView={{ scale: 1.2 }}
        initial={{ scale: 1 }}
      />
    </section>
  );
};

export default MyWork;
