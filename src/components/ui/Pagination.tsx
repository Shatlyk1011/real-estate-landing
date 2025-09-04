import { FC } from 'react';
import ArrowRight from '../icons/ArrowRightIcon';

interface Props {
  currentPage?: number
};

const Pagination:FC<Props> = ({currentPage}) => {
  return (
    <div className="flex items-start justify-between pt-5 border-t border-stroke">
      <div className='text-xl font-medium leading-[150%] text-gray-2'>
        <span className='text-white'>{currentPage || "01"} </span>
        of 60
      </div>

      {/* btns */}
      <div className='flex gap-[10px]'>
        <button className='leading-0 p-[14px] rounded-full border border-stroke rotate-180 text-[#808080]'>
          <ArrowRight/>
        </button>
        <button className='leading-0 bg-gray-1 p-[14px] rounded-full border border-stroke text-white'>
          <ArrowRight/>
        </button>
      </div>
    </div>
  )
};
export default Pagination