
const depoimentos1 = [
    "/prints/9-465.avif",
    "/prints/9-466.avif",
    "/prints/9-475.png",
    "/prints/9-467.avif",
    "/prints/9-468.avif",
    "/prints/9-469.avif",
    "/prints/9-470.avif",
    "/prints/9-472.avif",
    "/prints/9-473.avif",
    "/prints/9-474.avif",
    "/prints/9-471.avif",
];

const depoimentos2 = [
    "/prints/9-470.avif",
    "/prints/9-471.avif",
    "/prints/9-472.avif",
    "/prints/9-473.avif",
    "/prints/9-474.avif",
    "/prints/9-465.avif",
    "/prints/9-466.avif",
    "/prints/9-475.png",
    "/prints/9-467.avif",
    "/prints/9-468.avif",
    "/prints/9-469.avif",
];

export default function Depoimentos() {
    return (
        <div className="w-full flex flex-col gap-0 items-center justify-center mt-10 mb-10">

            <div className="flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl sm:text-4xl font-bold">
                    O que dizem sobre meu trabalho
                </h2>

                <p className="text-gray-300 text-sm sm:text-base mt-2 mb-6">
                    Feedbacks reais de quem viveu a experiência 📸
                </p>
            </div>


            {/* =================== LINHA 1 =================== */}
            <div className="overflow-hidden w-full">
                <div className="flex gap-0 animate-scrollLeftMobile sm:animate-scrollLeft w-[200%]">

                    {[...depoimentos1, ...depoimentos1, ...depoimentos1].map((img, i) => (
                        <div
                            key={"linha1-" + i}
                            className="shadow-[0_0_25px_rgba(255,255,255,0.25)] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 sm:min-w-[400px] md:min-w-[300px] min-w-[200px]">
                            <img src={img} className="w-full h-full object-contain" />
                        </div>
                    ))}

                </div> 
            </div>


            {/* =================== LINHA 2 (oposta) =================== */}
            <div className="overflow-hidden w-full md:hidden">
                <div className="flex gap-0 animate-scrollRightMobile sm:animate-scrollRight w-[200%]">

                    {[...depoimentos2, ...depoimentos2, ...depoimentos2].map((img, i) => (
                        <div
                            key={"linha2-" + i}
                            className="shadow-[0_0_25px_rgba(255,255,255,0.25)] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 sm:min-w-[400px] md:min-w-[300px] min-w-[200px]">
                            <img src={img} className="w-full h-full object-contain" />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
