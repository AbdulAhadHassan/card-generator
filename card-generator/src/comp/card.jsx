

function Card({data}){

return(

    <div>


<div className="p-5 mx-3 my-2" style={{backgroundColor:data.background}}>
    <h1 style={{color:data.color}}>{data.text}</h1>
</div>
    </div>
)}

export default Card