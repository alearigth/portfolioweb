import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-20">
      I studied computer science at the National University of San Agustin in arequipa peru, I did a bootcamp of more than 700 hours in the career of full stack developer, I am constantly learning and improving my skills in the field to not fall behind.
      </p>
    </div>
  </div>
  )
}

export default About