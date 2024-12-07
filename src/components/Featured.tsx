import Image from "next/image";

const Featured = () => {
  return (
    <div className='container w-full px-[120px] py-[30px] mt-10 bg-white border-2 border-neutral-100'>
      <div className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
      <h3 >Featured</h3>
      </div>
      {/* Section Header */}
      <div className="mb-6">
       
        <h2 className="text-3xl font-bold mt-2">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1170] h-[600]">
        {/* Main Product (PlayStation 5) */}
        <div className="relative col-span-2 md:col-span-1 bg-black text-white p-6 rounded-lg w-[570] h-[600]">
          <Image
            src="/ps5-slim.png"
            alt="PlayStation 5"
            width={511}
            height={511}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="text-sm mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href="#"
              className="text-sm text-white underline font-bold mt-4 block"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Women's Collections */}
        <div className="relative bg-black text-white p-6 rounded-lg w-[570] h-[284]">
          <Image
            src="/woman.png"
            alt="Women&apos;s Collections"
            width={432}
            height={286}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold">Women&apos;s Collections</h3>
            <p className="text-sm mt-2">
              Featured woman collections that give you another vibe.
            </p>
            <a
              href="#"
              className="text-sm text-white underline font-bold mt-4 block"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Smaller Items */}
        <div className="relative bg-gray-900 text-white p-4 rounded-lg w-[270] h-[284]">
          <Image
            src="/speaker.png"
            alt="Speakers"
            width={210}
            height={222}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-bold">Speakers</h3>
            <p className="text-sm mt-2">Amazon wireless speakers</p>
            <a
              href="#"
              className="text-sm text-white underline font-bold mt-4 block"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative bg-gray-900 text-white p-4 rounded-lg w-[270] h-[284]">
          <Image
            src="/perfume.png"
            alt="Perfume"
            width={201}
            height={203}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-bold">Perfume</h3>
            <p className="text-sm mt-2">GUCCI INTENSEOUD EDP</p>
            <a
              href="#"
              className="text-sm text-white underline font-bold mt-4 block"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
