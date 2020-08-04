
const select=document.querySelector('#select-filter')

getFirstFetch()

async function getFirstFetch(){
    await populateSelect()
    const response = await fetch(URL+'/'+select.value);
    const data= await response.json()
      

    if(data){
        errorShow.innerText=''
        chartifyData(data)
    }else{
        errorShow.innerText='No data to display'
    }
}


select.addEventListener('change',async (e)=>{
    
    const selezionato = e.target.value

    const response = await fetch(URL+'/'+selezionato);

    const data= await response.json()
      

    if(data){
        errorShow.innerText=''
        chartifyData(data)
    }else{
        errorShow.innerText='No data to display'
    }
    
})


async function populateSelect(){
    const data = await selectData()
   
    data.forEach(element => {
        const option = document.createElement('option');
        option.text = element.user;
        select.add(option,null)
    });
}


async function selectData(){
    const response = await fetch(URL);
    const data= await response.json()
    return data  
}