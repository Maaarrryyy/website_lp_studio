import { motion } from 'framer-motion';

export const Hero = () => {
    const FadeInVariants = {
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0}
    }

  return (
    <section className="px-6 tracking-tight w-full">
        <img src="/src/assets/45.avif"
        className="w-full object-cover rounded-3xl min-h-screen mb-6"
        alt="hero" />

        <div className="w-full flex flex-col gap-16 mb-24">
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, margin: "-100px" }}
          variants={FadeInVariants}
          className='w-full max-w-3xl duration-300'
          >
            <h1 className="text-6xl leading-tight tracking-tight mb-6">
            Exploratory graphic design and creative services that are
            forward-thinking and purpose-driven.
          </h1>
            </motion.div>

            <div className='w-full grid grid-cols-12'>
                <div className='col-span-6 block'></div>
                    <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, margin: "-100px" }}
                    variants={FadeInVariants}
                    className='col-span-6 flex flex-col gap-8 justify-end'>
                        <p className='text-3xl tracking-tight '>
              We provide carefully considered graphic design and brand strategy
              solutions to clients locally and internationally, through an open and
              collaborative practice.          
            </p>

              <p className='text-3xl tracking-tight '>
              Whether you’re starting fresh or at a point of growth and refinement, we can offer an end-to-end 
              or tailored range of creative services to help you realise your ambitions.
            </p>
                    </motion.div>
              
            </div>
        </div>
    </section>
  )
}
