import { navData } from '../assets/data.js';

const Circle = () => {
    return (
        <div className='mt-12 mb-10 ml-0 flex justify-between'>
            {
                navData.map((data, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden'>
                            <img src={data.image} alt='nav' className='w-full h-full object-cover'/>
                        </div>
                        <p className='mt-2 text-center'>{data.text}</p>
                    </div> 
                ))
            }
        </div>
    );
};

export default Circle;
