import React from "react";
import { useState, useEffect } from "react";
import img from "../images/img1.png";

function eyes() {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });
  return (
    <>
      <div className="h-screen w-full flex justify-center relative items-center bg-[#1F2937]">
        
        <div className="h-full w-full absolute" >
          <img className="google h-12 w-12 absolute left-[10vw] top-[100px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/PdE0_txzUdHcbHT5AhV0yUQJQp1HsegZYHyXHuGZ3vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn" alt="" />
          <img className=" airbnb h-16  absolute left-[14vw] top-[500px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/P_M3pBpsfn9XIrRyZUJ-Q-dW6_8QuhP2IQ4vRAUqzns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYWly/Ym5iLTItbG9nby1w/bmctdHJhbnNwYXJl/bnQucG5n" alt="" />
          <img className=" amazon h-20 absolute left-[50vw] bottom-8 hover:scale-150 duration-200" src="https://imgs.search.brave.com/mvN-2ABX6WBjffeVWClf_08spI95BaQfB7uzF4CE9m4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BbWF6b25f/KGNvbXBhbnkpL0Ft/YXpvbl8oY29tcGFu/eSktTG9nby53aW5l/LnN2Zw" alt="" />
          <img className="cisco h-20 absolute right-[25vw] top-[380px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/n9LPMugA7QU11F2Q9gK_oWKW0iaN5E8stHpMdQ3_x_A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9DaXNjb19T/eXN0ZW1zL0Npc2Nv/X1N5c3RlbXMtTG9n/by53aW5lLnN2Zw" alt="" />
          <img className="facebook h-12 absolute right-[30vw] top-[150px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/vtvA5Zu2Xa_BwBGOicvcV2JoTXmMl5_kQ7WHGNM4vJQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4LzIwMjFfRmFj/ZWJvb2tfaWNvbi5z/dmc" alt="" />
          <img className="gs h-20 absolute left-[35vw] top-[400px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/kDSLBpIDCdFNLyT6DE1dSjyU0LrhsYIN9cMQHJtb--s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Z29sZG1hbi1zYWNo/cy5zdmc" alt="" />
          <img className="ibm h-20 absolute left-[10vw] top-[250px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/3W6t1kxEzPuy8gLC9KtcnXYYwdc0vOlpR9GJip1txbo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/aWJtLnN2Zw" alt="" />
          <img className="linkedin h-20 absolute right-[8vw] top-[450px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/c869eRC1fm8_0BozptV_n_bbkiaGAwb1VvedP4-RIvs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW5rZWRJ/bi9MaW5rZWRJbi1M/b2dvLndpbmUuc3Zn" alt="" />
          <img className="apple h-14 absolute right-[10vw] top-[200px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/V5WElkEV9du_wdKKbYyAYeV8IuEJcAxYzkaWMGuHD1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMxL0FwcGxlX2xv/Z29fd2hpdGUuc3Zn" alt="" />
          <img className=" ms h-24 absolute left-[30vw] top-[200px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/0nZUVKrgvL9qtQqWBi4GcGUdyno_dFfKAREBMcyf3yM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NaWNyb3Nv/ZnQvTWljcm9zb2Z0/LUxvZ28ud2luZS5z/dmc" alt="" />
          <img className="oracle h-28 absolute left-[2vw] top-[400px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/Xxzah2wUFiEX1Rng9dAJluxHm_u8vss0eYaIM3WIHR8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3Mvby8x/Ni9vcmFjbGUuc3Zn" alt="" />
          <img className="uber h-12 absolute left-[24vw] top-[60px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/ZYGco8sXxVmSEHruXxEqlAT6viaPIOVOw8U8bnTSU-Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9VYmVyL1Vi/ZXItV2hpdGUtRGFy/ay1CYWNrZ3JvdW5k/LUxvZ28ud2luZS5z/dmc" alt="" />
          <img className="walmart h-24 absolute right-[15vw] top-[30px] hover:scale-150 duration-200" src="https://imgs.search.brave.com/6kW_ONoMKKp7rqBJJ1hFBrMaoOWEU1TVRCa7KHvBj1E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/d2FsbWFydC5zdmc" alt="" />


        </div>
        
        <div className="relative">
          <div className="h-9 w-9  flex items-center justify-center border border-black bg-white rounded-full absolute top-[122px] left-[43px]">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="ml-8 mt-1 line absolute flex items-center h-2 rotate- w-full"
              >
                <div className="h-5 w-5 rounded-full bg-black"></div>
              </div>
          </div>
          <div className="h-9 w-9  flex items-center justify-center border border-black bg-white rounded-full absolute top-[122px] left-[101px]">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="ml-8 mt-1 line absolute flex items-center h-2 rotate- w-full"
              >
                <div className="h-5 w-5 rounded-full bg-black"></div>
              </div>
          </div>
          <img src={img} alt="" className="h-96" />
          
        </div>

      </div>
    </>
  );
}

export default eyes;
