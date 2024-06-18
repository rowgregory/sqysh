import React, { FC, ReactNode } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className='max-w-screen-2xl w-full mx-auto px-28'>
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default PageWrapper