export const notFound=(req,res,next)=>{
    res.status(404);
    next(new Error(`route not found: ${req.originalUrl}`))
}

export const errorHandler=(err,req,res,_next)=>{
    const status=err.status||500;
    res.status(status).json({error:err.message||"Internal server error"})
}
