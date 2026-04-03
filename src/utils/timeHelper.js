

export const changeFormat =(time)=>{
    const newDate = new Date(time);
    const formatted = newDate.toLocaleString('en-GB',{
        month:'short',
        day:'numeric'
    })
    return formatted
};