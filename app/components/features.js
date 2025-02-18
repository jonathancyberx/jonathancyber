import Image from "next/image";
import React from "react";
import feature1 from "../../public/features-1.png"
import feature2 from "../../public/features-2.png"
import feature3 from "../../public/features-3.png"
import feature4 from "../../public/features-4.webp"
import feature5 from "../../public/features-5.png"
import feature6 from "../../public/features-6.png"
import feature7 from "../../public/features-7.png"
import feature8 from "../../public/features-8.webp"
import feature9 from "../../public/features-9.gif"


const Features = () => {
  return (
    <section className="bg-[#122455]  lg:w-4/5 rounded-xl m-auto py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center text-white mb-8 font-bold">Features</h2>
        <div className="overflow-hidden relative">
          <div className="flex flex-wrap lg:space-x-10  gap-4 lg:justify-between justify-evenly items-center">
            <div className="flex-shrink-0">
              <Image src={feature1} alt="Logo 1" width={ 50 } height={ 50 } />
            </div>
            <div className="flex-shrink-0">
              <Image src={feature2} alt="Logo 2" width={ 50 } height={ 50 } />

            </div>
            <div className="flex-shrink-0">
              <Image src={feature3} alt="Logo 3" width={ 50 } height={ 50 } />

            </div>
            <div className="flex-shrink-0">
              <Image src={feature4} alt="Logo 4" width={ 50 } height={ 50 } />
            </div>
            <div className="flex-shrink-0">
              <Image src={feature5} alt="Logo 5" width={ 50 } height={ 50 } />
            </div>
            {/* Duplicate logos */}
            <div className="flex-shrink-0">
              <Image src={feature6} alt="Logo 1" width={ 50 } height={ 50 } />

            </div>
            <div className="flex-shrink-0">
              <Image src={feature7} alt="Logo 2" width={ 50 } height={ 50 } />
            </div>
            <div className="flex-shrink-0">
              <Image src={feature8} alt="Logo 3" width={ 50 } height={ 50 } />
            </div>
            <div className="flex-shrink-0">
              <Image src={feature9} alt="Logo 4" width={ 50 } height={ 50 } />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
