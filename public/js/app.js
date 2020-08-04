const ctx = document.getElementById('Chart').getContext('2d');
const input=document.getElementById('filter')

const errorShow=document.getElementById('DataErr')
const URL='/chart'



input.addEventListener('keyup',(e)=>{
    
    const filter=e.target.value;
    
    if(filter.length>0){
       getFilterData(filter)
       
    }
})

async function getFilterData(filter){
    const response = await fetch(URL+'/filter/'+filter);

    const data= await response.json()
    console.log(data)

    if(data.length>0){
        errorShow.innerText=''
        chartifyData(data)
    }else{
        errorShow.innerText='No data to display'
    }
}



function chartifyData(fetchResultData){
    let datafetch;
    if(Array.isArray(fetchResultData)){
        datafetch=fetchResultData[0]
    }else{
        datafetch=fetchResultData
    }
    const sets=datafetch.infoGiorni
    let labels=[]
    let df=[]
    
    sets.forEach(element => {      
        df.push(element.ore)
        labels.push(new Date(element.data).toLocaleDateString())       
    });
   
    const chart = new Chart(ctx, {
       
        type: 'line',
    
       
        data: {
            labels: labels,
            datasets: [{
                label: 'Ore '+datafetch.user,
                backgroundColor: 'rgba(129, 207, 224, 0.1)',
                borderColor: 'rgba(52, 152, 219, 1)',
                data: df
            }]
        },
    
        
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}




