



export const createUser =  async (req, res)=>{

    const body = req.body;
    const image = req.files.image;

    try{
        if(image && image.length > 0){
            
        }
        const tal = await res.json({message:'Create user'})
    return tal;
    }catch(err){
        res.json({message: err});
    };
}

export const getUser = async (req, res)=>{
    try{
        const tal = await res.json({message:'Create user'})
    return tal;
    }catch(err){
        res.json({message: err});
    };
}