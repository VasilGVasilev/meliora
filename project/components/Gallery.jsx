import { Carousel } from "flowbite-react";

const imgs = [
    "/meliora-front.jpg",
    "/meliora-front-angle.jpg",
    "/meliora-front.jpg",

];


export const Gallery = () => {
    return (
        <section id="gallery" className="bg-black">
            <div className="flex flex-col gap-5 justify-center items-start">
                <div className="text-white mx-10 mt-10 text-3xl md:text-7xl relative before:absolute before:top-[30%] before:left-[10%] before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-yellow-500 before:z-10">Галерия</div>
                <div className="h-80 md:h-screen w-full md:p-10">
                    <Carousel slide={false}>
                        {
                            imgs.map((img, index)=>{
                                return(
                                    <img src={img} key={index}/>
                                )
                            })
                        }


                    </Carousel>
                </div>
            </div>
        </section>
    )
}


