


const Slide = (props:any)=>{
  return (
    <div className='slide-wrapper'>
      <div onMouseDown={()=>{
        const outOffsetLeft = document.querySelector('.out-box') as HTMLElement;
        const slide = document.querySelector('.slide') as HTMLElement;
        const mark = document.querySelector('.mark') as HTMLElement;
        document.onmousemove=(e)=>{
          let slideWidth = e.clientX - outOffsetLeft.offsetLeft ;
          if(slideWidth>=300){
            slide.style.width='300px';
            mark.style.left='290px';
          }else if(slideWidth<=0){
            slide.style.width='0px';
            mark.style.left='1px';
          }else{
            slide.style.width=slideWidth +'px';
            mark.style.left=slideWidth+'px';
          }
          props.callback(Math.floor(slideWidth/300*100))
        }
      }} 
      onMouseUp={()=>{
        document.onmousemove=()=>null;
      }}
      className='out-box'>
        <div className='slide'></div>
        <div  className='mark'></div>
      </div>      
    </div>
  )
}


export default Slide;
