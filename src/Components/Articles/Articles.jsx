import React from 'react'
import vector from '../../assets/Vector 196 (Stroke).png';
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'
import { GoArrowUpRight } from 'react-icons/go';
function Articles() {
  return (
    <>
      <section className='w-10/12 mx-auto my-10  py-10'>
        <div className="container">
          <div className="container mx-auto text-center relative mb-16">
            <h3 className="text-5xl my-5"> اخر المقالات في</h3>
            <h2 className="text-5xl font-extrabold">كار سيرفس</h2>
            <img
              className="absolute right-1/2 translate-x-1/2 bottom-[-20px]"
              src={vector}
              alt="decorative vector"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="col">
              <div>
                <img className='w-full' src={article3} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article2} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article1} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="col">
              <div>
                <img className='w-full' src={article3} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article2} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article1} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="col">
              <div>
                <img className='w-full' src={article3} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article2} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
            <div className="col">
              <div>
                <img className='w-full' src={article1} alt="" />
                <h2 className='font-bold text-md my-3'>ازاي بيتم فحص السياره في مراكز خدمه كار سيرفيس </h2>
                <button className='text-white secondBg flex items-center gap-2 py-3 px-4 rounded-lg w-full justify-center'>
                  <span>اقراء المزيد</span>
                  <GoArrowUpRight className='mainColor' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Articles