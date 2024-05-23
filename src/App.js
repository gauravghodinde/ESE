import * as React from "react"
import useWindowSize from "@rooks/use-window-size"
import ParticleImage, { Vector, forces } from "react-particle-image"
import MyNavbarOne from "./components/navbarOne"
import 'bootstrap/dist/css/bootstrap.min.css'
import Body from "./pages/body"
import './styles/app.css'

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50
  },
  color: ({ x, y, image }) => "#2C2A2A",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 100,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
  }
}

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 35)
}



export default function App() {
  const { innerWidth, innerHeight } = useWindowSize()
  
React.useEffect(()=>{
  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // Set the threshold for triggering the autoscroll to half the screen height
    // const scrollThreshold = window.innerHeight / 8;
    console.log(scrollPosition)
    // Set the amount by which you want to auto-scroll down
    const scrollAmount = 200; // Adjust this value as needed

    // Check if the scroll position is more than the window height
    if (scrollPosition > 300 && scrollPosition<320) {
      // Auto-scroll down by the specified amount
      window.scrollTo(0,900);

    }
  };

  // Attach the scroll event listener when the component mounts
  document.addEventListener('scroll', handleScroll);

  // Cleanup the event listener when the component unmounts
  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
},[])


  return (
    <div>
    <MyNavbarOne/>
    <ParticleImage
      className="particleCanvas"
      src={"/logo.png"}
      width={ Number(innerWidth) }
      height={ Number(innerHeight) - 80}
      scale={0.35}
      entropy={10}
      maxParticles={8000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#FFFFF"
    />
    <Body/>
    </div>
  )
}
