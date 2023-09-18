import Spline from '@splinetool/react-spline';

function SplineMain() {
  return (
    <>
    <div className='spline-scene'>
      <div>
      <h1 className='text-center text-4xl font-bold text-white'>Hello, I'm <span className='text-primary'>Anish</span></h1>
     </div>
     <Spline scene="https://prod.spline.design/ou840zI3jHfLl5rQ/scene.splinecode" />
     
    </div>
    </>
    
  );
}
export default SplineMain;