import React from "react";
import {db} from "../src/firebase/firebase";
import {addDoc ,collection,doc, getDoc, getDocs} from "firebase/firestore";

const NotificationAdmin = () => {


   const handleAdd =(e)=>{
    e.preventDefault()

    const val = doc(db, "gervais",'post')
    const collectinval =collection(val,"feedback")
    addDoc(collectinval,{title:e.target.title.value
    })
    


   }


   


    return ( 


<div class="container">
<div class="col-md-7">
<div class="well">
    <form accept-charset="UTF-8" action=""  onSubmit={(e)=>handleAdd(e)} >
        <textarea class="form-control"input name="title" id="text"  placeholder="Tapez votre message" rows="5"></textarea>
        <h6 class="pull-right" id="count_message"></h6>
        <button class="btn btn-primary" type="submit">Publier un nouveau message
</button>
    </form>
</div>
</div>
</div>

     )
}
 
export default NotificationAdmin;