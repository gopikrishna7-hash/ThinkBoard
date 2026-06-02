export function getAllProduct(req,res){
    res.status(200).send("you just fetched Products")
};
export function createProduct(req,res){
    res.status(200).json({message:"Products created  "})
};
export function updatedProduct(req,res){
    res.status(200).json({message:"Products Updated"})
};
export const deleteProduct=(req,res)=>{
    res.json({message:"Products Deleted.!"})
}