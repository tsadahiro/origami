Vue.component('tile',
	      {
		  template:'<polygon @click="test()" :points="pp" fill="yellow" stroke="black"></polygon>',
		  props:['pp'],
		  methods:{
		      test:function(){
			  alert("cdf");
		      }
		  }
	      }

	     );
new Vue({
    el: "#app",
    data:{
	N:2
	
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
	},

	choutenn:function(){
	    
	    let v={x:Math.cos(Math.PI/3)+1, y:Math.sin(Math.PI/3)};
	    let w={x:Math.cos(Math.PI/3)+1, y:-Math.sin(Math.PI/3)};
	    let V={};
	    for(let n=-this.N; n<=this.N; n++){
		for(let m=-this.N; m<=this.N; m++){
		    V[m+","+n+","+0]=this.pixel({x:m*v.x+n*w.x ,y:m*v.y+n*w.y});
		    V[m+","+n+","+1]=this.pixel({x:m*v.x+n*w.x+1 ,y:m*v.y+n*w.y});
		    
		    
		}
	    }
	    return V;
	},

	men:function(){
	    let F=[];
	    
	    for(let n=-this.N+1; n<=this.N; n++){
		for(let m=-this.N; m<this.N; m++){
		    F.push([m+","+n+","+0,
			    m+","+n+","+1,
			    (m+1)+","+n+","+0,
			    (m+1)+","+(n-1)+","+1,
			    (m+1)+","+(n-1)+","+0,
			    m+","+(n-1)+","+1]);
		    
		}
	    }
	    return F;
	}
	
		
    },

    methods:{
	pixel:function(p){
	    return {x:p.x*100+400, y:-p.y*100+400};
	},

	points:function(f){
	    let s="";
	    for(let p of f){
		s += " "+this.choutenn[p].x+" "+this.choutenn[p].y;
	    }
	    return s;
	}
    }
    
    
})
