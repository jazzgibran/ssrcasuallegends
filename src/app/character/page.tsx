import React from 'react'
import CharacterCreationForm from './form'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Character',
  };

function page() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <CharacterCreationForm/>
    </div>
  )
}

export default page
