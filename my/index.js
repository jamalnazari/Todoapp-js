const $=document;

const dayElems=$.querySelectorAll(".day");
const pElem=$.getElementById("pElem");
const textElem=$.getElementById("inptext");
const timeElem=$.getElementById("inptime");
const DisElem=$.getElementById("inpDis");
const inpsElem=$.getElementById("inps");
const btnelem=$.getElementById("btnElem")

let array=[]

dayElems.forEach((i)=>{
    i.addEventListener('click' , ()=>{

      inpsElem.innerHTML=""
      

       pElem.innerHTML=i.innerHTML;
       pElem.id=i.id;

       let mored=localStorage.getItem(pElem.id)
       array=[]
       if(mored){
         array=JSON.parse(mored)
         gener(array)
       }

    })
})


dayElems.forEach(day => {
day.addEventListener('click', () => {


     dayElems.forEach(d => d.classList.remove('active'));
         
        day.classList.add('active');

    });
  });

  

const addplan=()=>{

         if(textElem.value==="" || pElem.innerHTML===""){
            alert("Write your plan and choose your day")
         }else{
      
            let inpvalue={
               title:textElem.value,
               time:timeElem.value,
               Discription:DisElem.value
            }
            array.push(inpvalue)
            gener(array)
            save(array)
            textElem.value=""
            timeElem.value=""
            DisElem.value=""
         }
      

}

const save=(varray)=>{
    localStorage.setItem(pElem.id , JSON.stringify(varray))
   }

const gener=(vrodi)=>{
      inpsElem.innerHTML=""
      vrodi.forEach((i , index)=>{

         let parentElem=$.createElement("div")
         let newElem1=$.createElement("p");
         let newElem2=$.createElement("p");
         let newElem3=$.createElement("p");
         let newElem4=$.createElement("p")
         
         newElem1.innerHTML=i.title;
         newElem2.innerHTML=i.time;
         newElem3.innerHTML=i.Discription;
         newElem4.innerHTML="Delet";
         
         parentElem.append(newElem4)
         parentElem.append(newElem1)  
         parentElem.append(newElem2)  
         parentElem.append(newElem3)  
         
         newElem4.classList.add("p-btn")
         parentElem.classList.add("parentElem")
         inpsElem.append(parentElem)

         newElem4.addEventListener("click" , function(){

            array.splice(index, 1)
            save(array)
            gener(array)

            
         })

      })



   }


   btnelem.addEventListener("click" , addplan)