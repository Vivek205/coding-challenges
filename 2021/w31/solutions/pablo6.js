module.exports=(l,m,o={})=>[...l].filter(x=>m>(o[x]=++o[x]||0))