module.exports=(s,a='abcdefghijklmnopqrstuvwxyz',r)=>(s.split(' ').reduce((g,w)=>{c=[...w.toLowerCase()].reduce((t,x)=>(t+a.indexOf(x)+1),0);if(c>g){r=w;g=c}return g},0),r);