import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <h1 className='text-3xl'>
      User :{id}
    </h1>
  )
}

export default Page
