import './Loader.css'

export const Loader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
    
  );
};
