import React from 'react'

function Rightbar() {
  return (
    <>
    {/* Linked */}
    <div className='h-[50%] overflow-y-auto '>
        <div className='text-gray-800 text-xl px-2 py-2'>Linked</div>
        <hr />
        <div className=' mx-2 flex my-2 cursor-pointer'>
            <div className=' inline-block px-4 py-2 h-10 bg-orange-500 text-white'>2</div>
            <div className='px-2'>Cant install tsconfig json in vscode </div>
        </div>
        <div className=' mx-2 flex my-2 cursor-pointer'>
            <div className=' inline-block px-4 py-2 h-10 bg-blue-gray-100'>2</div>
            <div className='px-2'>Cant install tsconfig json in vscode lorem </div>
        </div>
    </div>
    {/* Related */}
    <div className='h-[50%] overflow-y-auto'>
        <div className='text-xl px-2 py-2 text-gray-800'>Related</div>
        <hr />
        <div className=' mx-2 flex my-2 cursor-pointer'>
            <div className=' inline-block px-4 py-2 h-10 bg-orange-600 text-white'>2</div>
            <div className='px-2'>Cant install tsconfig json in vscode </div>
        </div>
        <div className=' mx-2 flex my-2 cursor-pointer'>
            <div className=' inline-block px-4 py-2 h-10 bg-blue-gray-100'>2</div>
            <div className='px-2'>Cant install tsconfig json in vscode lorem </div>
        </div>
    </div>
    </>
  )
}

export default Rightbar