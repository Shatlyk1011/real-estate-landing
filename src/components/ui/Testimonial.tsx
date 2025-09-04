import StarIcon from '../icons/StarIcon';

const Testimonial = () => {
  return (
    <div className="w-full rounded-xl border border-stroke">
      <div className='p-[50px]'>
        <ul className='flex gap-2.5 mb-10'>
          {Array.from({length:5}).map((_,i) => (
            <li key={i} className='p-2.5 rounded-full border border-stroke bg-gray-1'>
              <StarIcon />
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-[14px] mb-10'>
          <h6 className='text-2xl font-semibold leading-[150%] '>Exceptional Service!</h6>
          <p className='font-medium text-lg leading-[150%]'>Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
        </div>

        <div className='flex items-center gap-3'>
          <img className='w-[60px] h-[60px]' src="/images/user-1.png" alt="user image" />

          <div className='font-medium leading-[150%]'>
            <div className='text-xl mb-0.5'>Wade Warren</div>
            <span className='text-lg text-gray-2'>USA, California</span>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Testimonial