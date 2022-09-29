import {FaTwitter, FaLinkedin} from 'react-icons/fa'
import {BsGithub, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
          <div>
              <h6 className='font-bold uppercase pt-2'>Solutions</h6>

              <ul>
                  <li className='py-1'>Marketing</li>
                  <li className='py-1'>Analytics</li>
                  <li className='py-1'>Commerce</li>
                  <li className='py-1'>Data</li>
                  <li className='py-1'>Cloud</li>
              </ul>
          </div>

          <div>
              <h6 className='font-bold uppercase pt-2'>Support</h6>

              <ul>
                  <li className='py-1'>Pricing</li>
                  <li className='py-1'>Documentation</li>
                  <li className='py-1'>Guides</li>
                  <li className='py-1'>API Status</li>
              </ul>
          </div>

          <div>
              <h6 className='font-bold uppercase pt-2'>Company</h6>

              <ul>
                  <li className='py-1'>About</li>
                  <li className='py-1'>Blog</li>
                  <li className='py-1'>Jobs</li>
                  <li className='py-1'>Press</li>
                  <li className='py-1'>Partners</li>
              </ul>
          </div>

          <div>
              <h6 className='font-bold uppercase pt-2'>Legal</h6>

              <ul>
                  <li className='py-1'>Claim</li>
                  <li className='py-1'>Privacy</li>
                  <li className='py-1'>Terms</li>
                  <li className='py-1'>Policies</li>
                  <li className='py-1'>Condition</li>
              </ul>
          </div>
          <div className='col-span-2 pt-8 md:pt-2'>
              <p className='font-bold uppercase'>subscribe to our newletter</p>
              <p className='py-4'>The latest news, article, and resources, sent to your inbox weekly.</p>
              <form className='flex flex-col sm:flex-row'>
                  <input type="email" className='w-full p-2 mr-4 rounded-md mb-4'/>
                  <button className='p-2 mb-4'>subscribe</button>
              </form>
          </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-around sm:flex-row text-center text-gray-500'>
          <p className='pt-4'>2022 Workflow, LLC. Alright right reserved</p>
          <div className='flex justify-between sm:w-[300px] pt-4 text-xl'>
              <a href=""><FaTwitter/></a>
              <a href=""><BsGithub/></a>
              <a href=""><FaLinkedin/></a>
              <a href=""><BsInstagram/></a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
