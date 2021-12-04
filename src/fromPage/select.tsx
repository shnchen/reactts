
const Select = (props:any)=>{
  return (
    
    <select className='my-select'  onChange={(e)=>{
      
      props.callback(e.target.value)
    }}>
      <option>橘子</option>
      <option>苹果</option>
      <option>梨子</option>

    </select>
  )
}

export default Select;