var mystle={
    width:"300px",
    boxShadow:"0 0 5px black",
    padding:"30px",
    margin:"10px",
    borderRadius:"5px",
};

function Cards(props) {
    return(
        <div style={mystle}>
            <img src={props.img} width="250px" height="200px"></img>
            <h2 >{props.imgName}</h2>
            <p style={{color:props.color}}>{props.mind}</p>
            <button style={{height:"50px",width:"100px",background:"black",color:"white"}} >View More</button>
        </div>
    );   
}


export default Cards;
