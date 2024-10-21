import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col justify-around container mx-auto mb-20'>
      {/* Notice Board and Birthday Students Section */}
      <div className='flex flex-col md:flex-row my-10 gap-10'>
        <div className='w-full md:w-1/2 text-center bg-gray-100 h-72'>
          <h1 className='font-bold text-orange-500 p-10'>Notice Board</h1>
          <p className='text-gray-400'>Not found !</p>
        </div>
        <div className='w-full md:w-1/2 text-center bg-gray-100 h-72'>
          <h1 className='font-bold text-orange-500 p-10'>Birthday Students</h1>
          <p className='text-gray-400'>Not found !</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className='w-full container mx-auto text-2xl bg-gray-100'>
        <div className='text-center text-orange-500 p-10 mt-10'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl'>WELCOME TO OUR SCHOOL</h1>
        </div>
        <div className='flex flex-col lg:flex-row rounded-md'>
          <div className='w-full lg:w-1/2'>
            <img
              className='p-5'
              src='https://www.sidco.co.in/storage/image/business_photo/IMG1693892069_230279271.jpeg'
              alt='hero-img'
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <q className='p-5 lg:ml-10 text-gray-500'>There is a learning behind every success.</q>
            <p className='p-10 lg:ml-10 mt-10 text-sm mb-10 text-gray-500 lg:w-[80%]'>
              We respect the dignity and worth of all the children under our care. We believe that all children can be
              nurtured to achieve their full potential within a school environment that is both caring and challenging. We
              expect all children to be respectful and responsible and to rise to the challenges of life.
            </p>
          </div>
        </div>
      </div>

      {/* Education to Change Lives Section */}
      <div className='container mx-auto text-center mt-10'>
        <h1 className='text-orange-500 text-2xl font-bold'>EDUCATION TO CHANGE LIVES</h1>
        <p className='text-start p-5 ml-5 sm:ml-10 text-gray-500'>
          Suppose it is because nearly all children go to school nowadays, and have things arranged for them, that they
          seem so forlornly unable to produce their own ideas. It is, in fact, nothing short of a miracle that the modern
          methods of instruction have not yet entirely strangled the holy curiosity of inquiry; for this delicate little
          plant, aside from stimulation, stands mainly in need of freedom; without this it goes to wrack and ruin without
          fail. It is a very grave mistake to think that the enjoyment of seeing and searching can be promoted by means of
          coercion and a sense of duty.
        </p>
        <ul className='text-start ml-5 sm:ml-10 p-5 text-gray-500'>
          <li> -{'>'} Developing Leaders</li>
          <li> -{'>'} Building Character</li>
          <li> -{'>'} Focused Mind</li>
          <li> -{'>'} Healthy Body</li>
          <li> -{'>'} Sustainable Development</li>
          <li> -{'>'} Inclusive Education</li>
        </ul>
        <button className='p-4 bg-orange-500 w-full sm:w-1/2 md:w-1/6 text-center items-center text-white rounded-md hover:bg-orange-600'>
          Read more
        </button>
      </div>

      {/* Principal Section */}
      <div className='text-center mt-16 p-10'>
        <h1 className='text-orange-500 text-2xl font-bold'>GYAN JYOTI GURUKULAM SCHOOL FAMILY</h1>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3'>
            <img
              className='rounded-md mt-10'
              src='https://scontent.fixr3-1.fna.fbcdn.net/v/t39.30808-6/460517162_1072646420927801_5384774935425055603_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pIdALXIDmDcQ7kNvgHaqAuY&_nc_zt=23&_nc_ht=scontent.fixr3-1.fna&_nc_gid=A3vmzxq7I2BL4nriykbEhXo&oh=00_AYA70iQ8hP2_ec4s8IjIysOn0OgOSmDA5XwZLbMT87SF8Q&oe=671C5678'
              alt='img'
            />
          </div>
          <div className='w-full lg:w-1/2 mt-10 lg:mt-40'>
            <p className='text-orange-400 font-bold text-3xl'>Principal</p>
            <p className='text-start ml-5 sm:ml-10 p-5 text-gray-500'>
              I take immense pleasure in presenting the second edition of our "School Prospectus". Being the Principal, I
              owe great responsibility and also the privilege to pay my gratitude to all my elders, teachers, friends, and
              family members, who always encouraged me to take this endeavour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
