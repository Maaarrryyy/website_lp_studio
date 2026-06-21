const Logos = [
    { url: '/src/assets/favicon.ico' },
    { url: '/src/assets/favicon.ico' },
    { url: '/src/assets/favicon.ico' },
    { url: '/src/assets/favicon.ico' },
];



export const RunningLine = () => {
    const duplicate = [...Logos, ...Logos, ...Logos, ...Logos];

  return (
   <div className="w-full mt-24 mb-12 select-none overflow-hidden bg-white">
    <div className="mx-6 border-t border-b border-black py-8">
      <div className="flex w-[200%] animate-marquee gap-16 items-center">
        {duplicate.map((logo, index) => (
          <div key={index} className="shrink-0 min-w-30 md:min-w-37.5">
            <img 
              src={logo.url} 
              
              className="h-8 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
