const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const model = require("../model/product")
const Product = model.Product;

// only in create case the instance to be created
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    console.log(req.body);

    const savedProduct = await product.save();
    console.log('Product created:', savedProduct);
    
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating product' });
  }
};


//Read the data
exports.getAllProducts = async(req, res) => {
  //read all
  const product = await Product.find()
  //read on condition
  // const product = await Product.find({price:{$gt:600}})
  res.json(product)

  
};

exports.getProduct = async(req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id)
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc =await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
  }catch(err){
      console.log("err",err)
      res.status(400).json(err)
  }
};

//patch
exports.updateProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const doc =await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
  }catch(err){
      console.log("err",err)
      res.status(400).json(err)
  }
};
exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const doc =await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
  }catch(err){
      console.log("err",err)
      res.status(400).json(err)
  }
};
