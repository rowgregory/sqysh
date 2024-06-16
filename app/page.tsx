import { Sqysh } from '@/public/images';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Sqysh} alt='sqysh' width={150} priority />
    </main>
  );
}

export default Home
