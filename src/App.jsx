import { Component, useState } from 'react'
import MyComponent from './MyComponent'
import CourseCard from './CourseCard';

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  return (
    <>
    <div class="bg-[#e4f1f5]">
      <div class="flex flex-row justify-center px-16 py-10">
          <div class="flex flex-col justify-center">
            <p class="text-[#1b1d29] text-2xl font-medium">
                Welcome to Internship Exercise<br />
                <b class="font-bold">Front End</b>
            </p>
              <p class="text-[#586f85] pb-5">
                  Website ini dibuat oleh Musyaffa sebagai sarana pembelajaran Front End. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo eu risus molestie fringilla eu a orci. Morbi quis congue nibh, id vehicula nisi.
              </p>
              <div class="bg-[#1b1d29] text-white w-fit px-5 py-3 text-base font-bold text-center rounded-lg">Repository</div>
          </div>
          <img src="Assets/1.png" class="w-1/2 h-1/2"/>
      </div>
      <div class="bg-[#586f85] mx-5 p-2 rounded-lg">
          <div class="flex flex-row justify-between p-10 text-white">
              <div class="flex flex-row w-full h-1/2">
                  <img src="Assets/2.png" class="w-full h-full"/>
                  <div class="flex flex-col justify-center ml-5">
                      <h3 class="text-xl font-semibold">JavaScript + Git</h3>
                      <p>Mempelajari dasar-dasar JavaScript dengan materi tambahan git.</p>
                  </div>
              </div>
              <div class="flex flex-row w-full h-1/2 mt-5">
                  <img src="Assets/3.png" class="w-full h-full"/>
                  <div class="flex flex-col justify-center ml-5">
                      <h3 class="text-xl font-semibold">FrontEnd Basic</h3>
                      <p>Mempelajari HTML dan CSS dengan fokus dalam pembuatan layout website.</p>
                  </div>
              </div>
              <div class="flex flex-row w-full h-1/2 mt-5">
                  <img src="Assets/4.png" class="w-full h-full"/>
                  <div class="flex flex-col justify-center ml-5">
                      <h3 class="text-xl font-semibold">React + Tailwind</h3>
                      <p>Mempelajari tools yang digunakan dalam pembuatna website modern.</p>
                  </div>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="bg-[#1b1d29] text-white w-fit px-5 py-3 text-base font-bold text-center rounded-lg">View Resources</div>
          </div>
      </div>
      <h1 class="text-3xl font-semibold text-center mt-10">Our Tracks</h1>
      <p class="text-center text-[#586f85] mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.</p>
      <div class="flex flex-row gap-3 mt-5 justify-center">
          <CourseCard 
            image="https://images.unsplash.com/photo-1428606381429-22224991fb0c" 
            title="UI/UX Design for Beginners" 
            description="UI/UX Design"
            price="$98" 
            duration="22hr 30 min"
            courses="34 courses" 
            roles="250 roles"
            ButtonComponent={<MyComponent name="Button 1" count={count1} setCount={setCount1} />}
          />
          <CourseCard 
            image="https://images.unsplash.com/photo-1428606381429-22224991fb0c" 
            title="UI/UX Design for Beginners" 
            description="UI/UX Design"
            price="$98" 
            duration="22hr 30 min"
            courses="34 courses" 
            roles="250 roles"
            ButtonComponent={<MyComponent name="Button 2" count={count2} setCount={setCount2} />}
          />
          <CourseCard 
            image="https://images.unsplash.com/photo-1428606381429-22224991fb0c" 
            title="UI/UX Design for Beginners" 
            description="UI/UX Design"
            price="$98" 
            duration="22hr 30 min"
            courses="34 courses" 
            roles="250 roles"
            ButtonComponent={<MyComponent name="Button 3" count={count3} setCount={setCount3} />}
          />
      </div>
    </div>
    </>
  )
}

export default App
