      
let title=document.querySelector(".title")
// 
function end(n1,n2,n3){
    title.innerHTML=`${square[n1]} winner`;
document.getElementById('item'+n1).style.background='#000';
document.getElementById('item'+n2).style.background='#000';
document.getElementById('item'+n3).style.background='#000';
setInterval(function(){title.innerHTML+='.'},1000);
setTimeout(function(){location.reload()},4000)
}

// 
let turn="X";
// 
let square=[];
// 
function winner() {
     for(let i=1;i<10;i++)
     {
      square[i] = document.getElementById('item'+i).innerHTML
     }

     if(square[1] == square[2] && square[2] == square[3] && square[1] !="" )
      {
end(1,2,3)
      }

    else if(square[4] == square[5] && square[5] == square[6] && square[6] !="" )
      {
        end(4,5,6)
      }
      else if(square[7] == square[8] && square[8] == square[9] && square[9] !="" )
      {
        end(7,8,9)
      }
      else if(square[1] == square[4] && square[4] == square[7] && square[7] !="" )
      {
        end(1,4,7)
      }

      else if(square[2] == square[5] && square[5] == square[8] && square[8] !="" )
      {
        end(2,5,8)
      }
      else if(square[3] == square[6] && square[6] == square[9] && square[9] !="" )
      {
        end(3,6,9)
      }
    
      else if(square[1] == square[5] && square[5] == square[9] && square[9] !="" )
      {
        end(1,5,9)
      }
    
      else if(square[3] == square[5] && square[5] == square[7] && square[7] !="" )
      {
        end(3,5,7)
      }
      
      
      

}
// 
function game(id){
    let element=document.getElementById(id);
if(turn ==="X" && element.innerHTML==''  ) 
{
    element.innerHTML="X";
    turn="O";
    title.innerHTML="O";
}
else if(turn ==="O" && element.innerHTML=='' ){
    element.innerHTML="O";
    turn="X";
    title.innerHTML="X";
}
winner();
}
