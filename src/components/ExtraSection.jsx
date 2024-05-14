import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExtraSection = () => {
   const data= [
        {
          "id": 1,
          "name": "Alice Smith",
          "image": "https://i.ibb.co/kgxn0Pt/18743.jpg",
          "review": "I recently had my hair styled at this salon, and I couldn't be happier with the results. The stylist was skilled and attentive to my needs, and the atmosphere was relaxing. My hair looks fantastic, and I've received so many compliments! I highly recommend this salon for anyone looking for top-notch hair care."
        },
        {
          "id": 2,
          "name": "Sophia Johnson",
          "image": "https://i.ibb.co/cX5GfBh/2149178089.jpg",
          "review": "I visited this spa for a facial treatment, and it was an amazing experience. The esthetician was knowledgeable and professional, and my skin feels rejuvenated. The ambiance of the spa was soothing, and I left feeling refreshed and pampered. I will definitely be returning for more treatments in the future."
        },
        {
          "id": 3,
          "name": "Olivia Williams",
          "image": "https://i.ibb.co/b2VXMGs/3947-1.jpg",
          "review": "I recently had a manicure and pedicure at this nail salon, and it was a fantastic experience. The nail technician was skilled and meticulous, and my nails look beautiful. The salon was clean and inviting, and I felt relaxed throughout the appointment. I highly recommend this salon for anyone in need of nail care."
        },
        {
          "id": 4,
          "name": "Ella Brown",
          "image": "https://i.ibb.co/zxpgLD6/46444.jpg",
          "review": "I had my makeup done for a special event at this beauty studio, and I was thrilled with the results. The makeup artist understood my vision and executed it perfectly. I felt confident and glamorous all night long, thanks to their expertise. I highly recommend this studio for professional makeup services."
        },
        {
          "id": 5,
          "name": "Ava Miller",
          "image": "https://i.ibb.co/5cJYY3x/2148617493.jpg",
          "review": "I recently got a haircut at this salon, and I am beyond satisfied with the results. The stylist listened to my preferences and delivered exactly what I wanted. The salon had a trendy vibe, and I felt comfortable throughout the appointment. I will definitely be returning for my next hair service!"
        },
        {
          "id": 6,
          "name": "Mia Taylor",
          "image": "https://i.ibb.co/cX5GfBh/2149178089.jpg",
          "review": "I had a massage at this spa, and it was the perfect way to relax and unwind. The massage therapist was skilled and attentive, and I left feeling rejuvenated. The spa atmosphere was tranquil, and I enjoyed every minute of my visit. I highly recommend this spa for anyone in need of stress relief."
        }
      ];
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
     
  
 

  return (
    <div className="w-3/4 mx-auto">
        <div className="mt-20">
        <Slider {...settings}>
            {
                data.map(d=>(
                    <div key={d.id} className="md:h-[450px] rounded-xl">
                        <div className="md:h-56 rounded-t-xl flex bg-indigo-500 justify-center items-center">
                            <img src={d.image} className="w-[150px] h-[150px] md:w-44 md:h-44 rounded-full"></img>

                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font font-semibold">{d.name}</p>
                            <p>{d.review}</p>

                        </div>

                    </div>
                    
                ))
            }
            </Slider>

        </div>
        
    </div>
  );
};

export default ExtraSection;
