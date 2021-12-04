



const Switch = (props:any)=>{
  return (
    <div className='switch-wrapper'>
      <div onClick={()=>{
        let dom = document.querySelector('.scroll-bar') as HTMLElement;
        let faDom = document.querySelector('.switch-wrapper') as HTMLElement;
        if(!dom.style.left||dom.style.left==='0px'){
          dom.style.left = '15px';
          dom.style.top = '2px';
          faDom.style.backgroundColor = '#2f5fd3';
          props.callback(true);
        }else{
          dom.style.left='0px';
          faDom.style.backgroundColor = '#eee';
          props.callback(false);
        }
        
      }} className='scroll-bar'></div>
    </div>
  )
}


export default Switch;