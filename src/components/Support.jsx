import {BsTelephoneFill} from 'react-icons/bs'
import {HiArrowSmRight} from 'react-icons/hi'
import {BiChip, BiSupport} from 'react-icons/bi'
import supportImg from '../assets/support.jpg'



function Support() {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="support" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center '>finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, excepturi tenetur. Quaerat, tempore quae autem illum in voluptatibus cumque ad? Rerum, dicta? Omnis magnam eveniet, ipsam reiciendis ducimus fuga mollitia!</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className=' w-12 p-4 text-white bg-indigo-600  rounded-lg mt-[-3.5rem] flex justify-center'>
                            <BsTelephoneFill className='m-0 p-0'/>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectet ur adipisicing elit. Velit, atque sapiente hic necessitatibus nulla suscipit consectetur repellendus veniam facilis autem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className=' w-12 p-4 text-white bg-indigo-600  rounded-lg mt-[-3.5rem] flex justify-center'>
                            <BiSupport className='m-0 p-0'/>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Techincal support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectet ur adipisicing elit. Velit, atque sapiente hic necessitatibus nulla suscipit consectetur repellendus veniam facilis autem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className=' w-12 p-4 text-white bg-indigo-600  rounded-lg mt-[-3.5rem] flex justify-center'>
                            <BiChip className='m-0 p-0'/>
                        </div>
                        
                        <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectet ur adipisicing elit. Velit, atque sapiente hic necessitatibus nulla suscipit consectetur repellendus veniam facilis autem.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Support;
