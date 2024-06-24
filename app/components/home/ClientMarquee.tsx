import Marquee from "react-fast-marquee";

import React from 'react'
import Image from 'next/image';
import { Budz, Ddogs, Lpdr } from '@/public/images';

const ClientMarquee = () => {
  return (
    <Marquee autoFill={true}>
      <Image src={Lpdr} alt='Little Paws Dachshund Rescue' width={180} className='aspect-square bg-slate-900 object-contain p-1 mr-2' />
      <Image src={Ddogs} alt={`Daniele's Dogs`} width={180} className='aspect-square bg-slate-900 object-contain p-1 mr-2' />
      <Image src={Budz} alt='Budz of Boston' width={180} className='aspect-square bg-slate-900 object-contain p-1 mr-2' />
    </Marquee>
  )
}

export default ClientMarquee