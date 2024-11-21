'use client'

import {
  SiJira,
  SiFigma,
} from '@icons-pack/react-simple-icons';
import { FaUserTie, FaChartLine, FaBullhorn } from 'react-icons/fa'; // Icon for Leadership
import { ZapIcon } from 'lucide-react';

const StacksCardProduct = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col items-center gap-6 overflow-hidden rounded-xl p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Product Skills</h2>
      </div>
      <div className='grid grid-cols-5 gap-6 mt-2 py-6'>
        <div className='flex flex-col items-center'>
          <FaUserTie className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' />
          <p className='text-xs sm:text-sm mt-2 text-center'>Cross funcional Leadership</p>
        </div>
        <div className='flex flex-col items-center'>
          <SiFigma className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' />
          <p className='text-xs sm:text-sm mt-2 text-center'>UI/UX Design</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaChartLine className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' />
          <p className='text-xs sm:text-sm mt-2 text-center'>Market analysis</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaBullhorn className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14' />
          <p className='text-xs sm:text-sm mt-2 text-center'>G2M Strategy</p>
        </div>
        <div className='flex flex-col items-center'>
          <SiJira className='w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16' />
          <p className='text-xs sm:text-sm mt-2 text-center'>Agile frameworks</p>
        </div>
      </div>
    </div>
  );
};

export default StacksCardProduct;
