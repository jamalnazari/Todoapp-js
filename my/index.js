const $=document;

const dayElems=$.querySelectorAll(".day");
const pElem=$.getElementById("pElem");
const textElem=$.getElementById("inptext");
const timeElem=$.getElementById("inptime");
const DisElem=$.getElementById("inpDis");



dayElems.forEach((i)=>{
    i.addEventListener('click' , ()=>{
       pElem.innerHTML= i.innerHTML
    })
})


dayElems.forEach(day => {
day.addEventListener('click', () => {


     dayElems.forEach(d => d.classList.remove('active'));
         
        day.classList.add('active');

    });
  });

  const addplan=()=>{
     
  }
