import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white'>
      {/* Digital camo background */}
      <div className="absolute inset-0 bg-[url('/digital-camo.png')] bg-cover bg-center opacity-40"></div>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center text-center px-6 max-w-xl opacity-0 animate-fade-in'>
        {/* Logo */}
        <Image
          src='/logo.png'
          width={1000}
          height={1000}
          alt='Pioneer Tactical Systems'
          className='w-90 md:w-120 mb-8'
        />

        {/* Company name */}
        <h1 className='font-bold text-3xl md:text-5xl tracking-widest mb-4'>
          PIONEER TACTICAL SYSTEMS
        </h1>

        {/* Tagline */}
        <p className='text-gray-300 text-sm md:text-lg mb-6'>
          Precision • Innovation • Reliability
        </p>

        {/* Coming soon */}
        <p className='text-xl md:text-2xl font-semibold mb-8 text-gray-200'>
          COMING SOON
        </p>

        {/* Email form */}
        {/* <div className='flex w-full max-w-md gap-2'>
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white'
          />
          <button className='px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition'>
            Notify
          </button>
        </div> */}

        {/* Footer */}
        <p className='text-xs text-gray-500'>
          © {new Date().getFullYear()} Pioneer Tactical Systems
        </p>
      </div>
    </main>
  );
}
