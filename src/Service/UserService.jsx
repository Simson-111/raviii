export const [mak,setMak]=useState([
        {id : 1,name:'jee',mark1:20,mark2 :20,mark3 :20,mark4 :20,mark5 :20,tot:100,avg:20}
    ]);

    
    export const addMak=(e)=>{
    e.preventDefault();
    
    const tot =parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5);
    const avg = tot/5;
    const addTot=tot;
    const addAvg=avg;
    setTot(addTot);
    setAvg(addAvg);
    //tot=addTot;
    //avg=addAvg;nb    
    setMak([...mak,{
        id,
        name,
        mark1,
        mark2,
        mark3,
        mark4,
        mark5,
        tot,
        avg
        
    }]);
    setid('');
    setname('');
    setmark1('');
    setmark2('');
    setmark3('');
    setmark4('');
    setmark5('');
    setAvg('');
    setTot('');
    
};



export const updatepro=()=>{
    const changemk = [...mak];
        const tot =parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5);
    const avg = tot/5;
     
    
    console.log(changemk);
    changemk[editIndex] = {id,name,mark1,mark2,mark3,mark4,mark5,tot,avg}; 
    setMak(changemk);
    setEditIndex(null);
    setid('');
    setname('');
    setmark1('');
    setmark2('');
    setmark3('');
    setmark4('');
    setmark5('');
    setAvg('');
    setTot('');
     
};
export const removepro=()=>{
    const filteredUsers = mak.filter((_, i) => i !== deleteIndex);
    setMak(filteredUsers);
    setDeleteIndex(null); 
    setid('');
    setname('');
    setmark1('');
    setmark2('');
    setmark3('');
    setmark4('');
    setmark5('');
    setAvg('');
    setTot('');
};
