export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 0.6) => {
    let x = 0;
    let y = 0;
  
    switch (direction) {
      case 'left':
        x = 100;
        break;
      case 'right':
        x = -100;
        break;
      case 'up':
        y = 100;
        break;
      case 'down':
        y = -100;
        break;
    }
  
    return {
      hidden: {
        x,
        y,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  
  export const textVariant = (delay: number = 0) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });
  