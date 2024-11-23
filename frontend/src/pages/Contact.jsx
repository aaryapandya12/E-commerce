import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT '} text2={'US'} className='text-4xl font-bold mb-6'/>
          
          <div className='my-10 flex flex-col justify-center md:flex-row gap-12 mb-28 px-6 md:px-0'>
            <img 
              className='w-full md:max-w-[480px] p-4 shadow-md rounded-lg' 
              src={assets.contact_img} 
              alt='' 
            />
            <div className='flex flex-col justify-center items-start gap-8'>
              <p className='font-semibold text-2xl text-gray-800'>Our Store</p>
              <p className='text-gray-600 leading-relaxed'>
                54709 Willms Station <br/>
                Suite 350, Washington, USA
              </p>
              <p className='text-gray-600'>
                Tel: (415) 555-0132 <br/> 
                Email: admin@snapshop.com
              </p>
              <p className='font-semibold text-2xl text-gray-800'>Careers at SnapShop</p>
              <p className='text-gray-600'>
                Learn more about our teams and job openings.
              </p>
              <button 
                className='border-2 border-black px-8 py-3 text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white'>
                Explore Jobs
              </button>
            </div>
          </div>

          <NewsletterBox className='shadow-md rounded-lg p-8 bg-white'/>
        </div>
    </div>
  )
}

export default Contact;
