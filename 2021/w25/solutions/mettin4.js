w='zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split` `;w[30]='thirty';w[40]='forty';w[50]='fifty';w[60]='sixty';w[70]='seventy';w[80]='eighty';w[90]='ninety';w[100]='hundred';i=21;while(i<1000){j=~~(i/100);k=~~((i-j*100)/10);l=i-j*100-k*10;m=0;if(i<100){w[i]=w[k*10];l>0&&(w[i]+='-'+w[l])}if(j){w[i]=w[j]+' hundred';m=i-j*100;if(m){w[i]+=' '+w[m];}}i++}module.exports=(i,j=Math.abs(i),l=[i<0?'minus':''],k=i=>l.push(i),t=~~(j/1000))=>{if(j<999){k(w[j])}else{k(w[t]);k`thousand`;j-=t*1000;if(j>100){h=~~(j/100);k(w[h]);k`hundred`;j-=h*100}if(j){k(w[j])}}return l.join` `.trim()};