import Button from '@mui/material/Button';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText += "🐈"
}

const MultiButton=(num)=> {
    var output = [];
    for(let i = 1; i < num+1; i++) {
        output.push(<Button variant="contained" color="primary" onClick={changeText}>第{i}個按鍵</Button>)
    }
    return output;
}

export default MultiButton;