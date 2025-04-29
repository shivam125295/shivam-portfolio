import React from 'react';
import { GraduationCap, FileDown } from 'lucide-react';
import Lottie from 'lottie-react';
import hero from '../../.bolt/Asset/Lottie.json'
import certificate from '../../.bolt/Asset/dreamer certificate 1.png'


const EducationPage = () => {
  return (
    <>
      <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary dark:text-primary-light">Education</span>
          </h2>
          <div className="w-50 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>

        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="bg-blue-900 text-white md:w-2/5 min-h-[50vh] md:min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="absolute w-64 h-64 rounded-full bg-blue-800 opacity-50 -top-10 -left-10"></div>
            <div className="absolute w-96 h-96 rounded-full bg-blue-700 opacity-30 bottom-0 -right-20"></div>

            <div className="p-8 md:p-12 lg:p-16 relative z-10">
              <div className="animate-fadeIn">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 mr-3" />
                  <h2 className="text-xl font-medium">Education Journey</h2>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  My Academic <span className="text-teal-400">Excellence</span>
                </h1>

                <p className="text-gray-300 text-lg mb-10 max-w-md">
                  A showcase of my educational background, academic achievements, and the knowledge I've gained throughout my learning journey.
                </p>

                <button
                  className="flex items-center bg-teal-500 hover:bg-teal-600 transition-all duration-300 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FileDown className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-3/5 bg-white dark:bg-gray-800 p-8">
            <div className="space-y-8">
              
            <Lottie style={{height:"600px",width:"550px", position:"absolute", alignItems:"end" }} animationData={hero} loop={true} />
             
            </div>
          </div>
          
        </div>
        

        
{/* Certificate Section */}
<div className="mt-12 px-4 md:px-16">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
    Certificate
  </h3>
  <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md flex flex-col sm:flex-row items-center justify-between">
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
      View or download my certificate showcasing my skills and achievements.
    </p>
    <img src={certificate} alt="" srcset="" />
    <a
      href="/path-to-your-certificate.pdf" // Replace with actual path
      download
      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
    >
      <FileDown className="w-5 h-5 mr-2" />
      Download Certificate
    </a>
  </div>
</div>

       
        <br />
      </section>
      
    </>
  );
};

export default EducationPage;
