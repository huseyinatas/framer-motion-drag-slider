import { motion, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function App() {
  const [width, setWidth] = useState()
  const carouselRef = useRef()
  const xUpdate = useRef(0)
  const animation = useAnimation()
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)

  }, []);
  function onLeftClick() {
    const newXPosition = xUpdate.current + 305;

    animation.start({
         x: newXPosition > 0 ? 0 : newXPosition,
    });
  }
  function onRightClick() {
      const newXPosition = xUpdate.current - 305;

      animation.start({
          x: newXPosition < -2000 ? -2000 : newXPosition,
      });
  }
  function onUpdate(latest) {
    xUpdate.current = latest.x;
  }
  return (
    <div className='container'>
      <motion.div className="carousel-container" ref={carouselRef}>
        <motion.div drag={'x'} onUpdate={onUpdate} initial={false} dragConstraints={{ right: 0, left: -width }} animate={animation} className="carousel">
          <img src="images/1.png" />
          <img src="images/2.png" />
          <img src="images/3.png" />
          <img src="images/4.png" />
          <img src="images/5.png" />
          <img src="images/6.png" />
        </motion.div>
      </motion.div>
      <div className="button-container">
        <button onClick={() => onLeftClick()} className='prev'>Prev</button>
        <button onClick={() => onRightClick()} className='next'>Next</button>
      </div>
    </div>
  );
}

export default App;
