module.exports=n=>+[...''+n].reduceRight((r,c)=>+c?c+r:r+c)