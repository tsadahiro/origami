new Vue({
    el: "#app",
    data:{
	message:"AIUEO",
	x:[0,1,2,3]
	
    },
    computed:{
	polygons:function(){
	    let ptdata=[];
	    for(let x=0; x<5; x++){
		for(let y=0; y<5; y++){
		    let points="";
		    points += (x*100 + " " + y*100 + " ");
		    points += ((x+1)*100 + " " + y*100 + " ");
		    points += ((x+1)*100 + " " + (y+1)*100 + " ");
		    points += (x*100 + " " + (y+1)*100);
		    ptdata.push(points);
		}
	    }
	    return ptdata;
	}
    }
    
})
