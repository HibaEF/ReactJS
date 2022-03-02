import { AppFrame, ProductFrame, ProductImage, ProductImageWrapper, ProductInfoWrapper,ProductFrameBest,ProductImageBest,ProductImageWrapperBest,ProductInfoWrapperBest } from "./ProductStyle";
import React, { useState } from 'react';
import products from "../local-Json/productData.json";
import Product from "./Product";
import styled from "styled-components";

export default function Products(){
    return (
        <ProductsWrapper>
            {
                products.map((product, index) =>(
                    <Product product={product}
                    key={index}></Product>
                ))
            }
        </ProductsWrapper>
    );
}
const ProductsWrapper =styled.div `
text-align: center ;
display: flex;
`;





// function Products(props){
//     const [likes,setLikes]=useState(0);
//     const [product,setProduct]=useState(props.product)
//     if(likes==5){
//         return (<AppFrame>
//             <ProductFrameBest>
//                 <ProductImageWrapperBest>
//                     <ProductImageBest src={product.img}></ProductImageBest>
//                 </ProductImageWrapperBest>
//                 <ProductInfoWrapperBest>
//                     <div>Best Prod</div>
//                     <div>{product.title}</div>
//                     <div>{product.price}</div>
//                     <div>{product.description}</div>
//                     <div>Like :{product.likes}</div>
//                     <button onClick={()=>setLikes(likes+1)}>like</button>
//                 </ProductInfoWrapperBest>
//              </ProductFrameBest> 
//             </AppFrame>);
//     }
//     return (<AppFrame>
//     <ProductFrame>
//         <ProductImageWrapper>
//             <ProductImage src={product.img}></ProductImage>
//         </ProductImageWrapper>
//         <ProductInfoWrapper>
//             <div>{product.name}</div>
//             <div>{product.price}</div>
//             <div>Like :{likes}</div>
//             <button onClick={()=>setLikes(likes+1)}>like</button>
//         </ProductInfoWrapper>
//      </ProductFrame> 
//     </AppFrame>);
// }

//export default Products;