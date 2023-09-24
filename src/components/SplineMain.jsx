import Spline from '@splinetool/react-spline';

function SplineMain() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div class="spline-docker absolute top-0 left-0 w-full h-full overflow-hidden">
         <Spline className="min-w-full min-h-full absolute object-cover" scene="https://prod.spline.design/6ESXSrf9yta1Jy4K/scene.splinecode" />
    </div>
    <div className="spline-content space-y-2 z-10">
        <h1 className="font-light text-6xl">Hi, I'm Anish</h1>
        <h3 classname="font-light text-3xl">I develop 3D visuals, user
interfaces and web applications</h3>
    </div>
</section>
    
  );
}


export default SplineMain;


