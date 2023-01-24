import React, { useState } from 'react'

 function Feedback() {
     const [modal,setModal]= useState(false)
  return (
    <div className='Feed'>
<h2 className='h2'>FeedBack Form</h2>

<div className='feedback'>
    <form>
        <div className='m1-rem'>
            <input placeholder='Name' name='name'/>
        </div>
        <div>
            <input placeholder='Email' name='email'/>
        </div>
        <div className='m1-rem'>
            <input placeholder='Feedback' name='feedback'/>
        </div>
    </form>
<button className='butn btn-red '
 onClick={()=>setModal((value) =>!value) }>
    Send
</button>

</div>
    </div>
  )
}
export default Feedback;
