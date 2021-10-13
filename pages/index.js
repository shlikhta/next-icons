import React from "react";
import { BeakerIcon } from '@heroicons/react/solid'
import { CakeIcon } from '@nexticons/react/solid'

export default function Home() {
  return (
    <div className='container'>
      <div className='icon-list'>
          <div className='icon-list__item'>
              <CakeIcon/>
          </div>
          <div className='icon-list__item'>
              <BeakerIcon className="h-5 w-5 text-blue-500"/>
          </div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
          <div className='icon-list__item'>1</div>
      </div>
    </div>
  )
}
