//your code here
let dragElement=null
document.addEventListener("dragstart",(e)=>{
	dragElement=e.target
})
document.addEventListener("dragover",(e)=>{
	e.preventDefault();
})
document.addEventListener("drop",(e)=>{
	e.preventDefault();
	let target=e.target;

	if(target!=dragElement && target.parentElement.id=="parent"){
			let temp=document.createElement("div");
			target.replaceWith(temp);
			dragElement.replaceWith(target);
			temp.replaceWith(dragElement);
	}
})