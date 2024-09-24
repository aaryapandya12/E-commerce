import {navData} from '../assets/data.js'

const Circle = () => {
    return (
        <div className='mt-4 mb-10 flex justify-between'>
            {
                navData.map((data, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md'>
                            <img src={data.url} alt='nav' className='w-20 h-20 object-contain'/>
                        </div>
                        <p className='mt-2 text-center'>{data.text}</p>
                    </div> 
                ))
            }
        </div>
    )
}

export default Circle;
