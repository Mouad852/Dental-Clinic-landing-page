import { FaUserMd } from 'react-icons/fa'
import aboutImg from '../assets/About.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-sky-50">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-80 lg:w-[420px] rounded-full shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <FaUserMd className="text-sky-600 w-7 h-7" />
            <h2 className="text-3xl font-bold text-sky-900">
              About our Clinic
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error odit facere est sit! Necessitatibus vel aspernatur iure? Repellendus adipisci labore harum provident impedit facilis ducimus voluptatum, alias placeat recusandae!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error odit facere est sit! Necessitatibus vel aspernatur iure? Repellendus adipisci labore harum provident impedit facilis ducimus voluptatum, alias placeat recusandae!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
