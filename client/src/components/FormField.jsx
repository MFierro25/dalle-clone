import React from 'react'

const FormField = ({ labelName, type, name, placeHolder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <label htmlFor={name} className='block test-sm font-medium text-gray-600'>{labelName}</label>
            {isSurpriseMe && (
                <button
                type="button"
                onClick={handleSurpriseMe}
                className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-md text-black hover:bg-sky-500 transition duration-300 ease-in-out" >Surprise me</button>
            )}
        </div>
        <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1366c5] focus:border-[#1366c5] outline-none block w-full p-3'
        />
    </div>
  )
}

export default FormField