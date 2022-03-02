import React, {useEffect, useState} from "react";
import { AppFrame, ProductFrame, ProductImage, ProductImageWrapper, ProductInfoWrapper, ProductInfoWrapperBest ,ProductFrameBest ,ProductImageBest, ProductImageWrapperBest} from "./ProductStyle";
import styled from "styled-components";

export default function Product(props){
    const [product, setProduct] = useState(props.product);
    const [updated, setUpdate] = useState(0);
    useEffect(() => {
        console.log(
            "I have finished rendering "+
            props.product.name +" price" +props.product.price
        );
        return () => {
            console.log("I'm being destroyed");
        };
    });
    const addLike = () => {
        setProduct ({
            ...product,
            likes: Number(product.likes) + 1,
        });
        setUpdate((u) => u+1);
    };
    useEffect(() => {
        console.log(updated);
    }, [updated]);
    return (
        product.likes >= 5 ? (
            <ProductFrameBest>
                 <ProductImageWrapperBest>
                     <ProductImageBest src={product.img}></ProductImageBest>
                 </ProductImageWrapperBest>
                 <ProductInfoWrapperBest>
                     <span>Best Product</span>
                     <span>
                        <a href={"/product/" + product.name}>{product.name}</a> 
                         </span>
                     <span>{product.price}</span>
                     <span>Likes :{product.likes}</span>
                     <button onClick={addLike}>like</button>
                 </ProductInfoWrapperBest>
              </ProductFrameBest> 
        ):(
            <ProductFrame>
                             <ProductImageWrapper>
                                 <ProductImage src={product.img}></ProductImage>
                             </ProductImageWrapper>
                             <ProductInfoWrapper>
                                 <div><a href={"/product/" + product.name}>{product.name}</a></div>
                                <div>{product.price}</div>
                                 <div>Likes :{product.likes}</div>
                                 <button onClick={addLike}>like</button>
                             </ProductInfoWrapper>
                          </ProductFrame>  
        )
    );
}



















// class Product extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             likes: 0,

//           };
//     }

//     updateLikes = () => {


//           this.setState((prevState, props) => {
//             return {
//               likes: prevState.likes + 1
//             };
//           });
//       }
    
//       // C'est l'endroit naturel pour définir l'objet d'état state basé sur les props initial.
//       static getDerivedStateFromProps(props,state){
//           console.log(props.product)
//           return null;
//       }
//       //Le rendu du composant dans notre page html.
//       componentDidMount(){
//           console.log("Produit affiché sans erreur");
//       }

//       //cette methode et lancé lorsque une méthode est déclanché
//       componentDidCatch(){
//           console.error("un erreur se trouve au chargment du produit");
//       }

//     render(){
//         return <AppFrame>
//             <ProductFrame>
//                 <ProductImageWrapper>
//                     <ProductImage src={this.props.product.img}></ProductImage>
//                 </ProductImageWrapper>
//                 <ProductInfoWrapper>
//                     <div>{this.props.product.name}</div>
//                     <div>{this.props.product.price}</div>
//                     <div>Like :{this.state.likes}</div>
//                     <button onClick={this.updateLikes}>like</button>
//                 </ProductInfoWrapper>
//              </ProductFrame> 
//             </AppFrame>
//     }
// }
//export default Product;