let results=document.querySelector(".results");
let nums=document.querySelectorAll(".num");

let caculate=nums.forEach((value)=>{
	value.addEventListener("click",(e)=>
	{
		let val=value.innerText;
		console.log(val);
		
		
		if(val=='='){
			results.innerText=eval(results.innerText);
			console.log(results.innerText);			
			}
		else if (val=='C'){
			string="";
			results.innerText=string;
			
		}
		else if(val=='D'){
			results.innerText=results.innerText.toString().slice(0,-1);
		}
		else{
			results.innerText+=val;	
		}
	});
});