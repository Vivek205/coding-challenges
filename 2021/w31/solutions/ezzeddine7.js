module.exports=(e,t)=>{let o=[],r=new Map;return e.forEach(e=>{let s=r.get(e);return s>0&&s<t?(r.set(e,s+1),void o.push(e)):r.has(e)?void 0:(o.push(e),void r.set(e,1))}),o}