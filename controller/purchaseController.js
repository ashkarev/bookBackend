const purchaseModel=require('../model/purchaseModel')



exports.purchaseDetails=async(req,res)=>{
try {


    let buyerMail=req.user

    let{bookId,bookName,bookDesc,bookImage,sellerMail,price,discountPrice}=req.body

    let newPurchase=new purchaseModel({bookId,bookName,bookDesc,bookImage,sellerMail,price,discountPrice})

    await newPurchase.save()
    // res.status(200).json(newPurchase)
    
} catch (error) {
    console.log(error)
 res.status(500).json({message:'something went wrong in server'})
}
}