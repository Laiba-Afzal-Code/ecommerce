import styled from "@emotion/styled"
import CategoryItem from "./CategoryItem";
import {categoryItem} from "../data"
import { mobile } from "../responsive";

const Contanier = styled.div`
display:flex;
justify-content:space-between;

padding:20px;
${mobile({padding:"0",flexDirection:"column"})}

`;

const Categories = () => {
  return (
    <>
    <Contanier>
        {categoryItem.map(item=>(
        <CategoryItem item={item} key={item.id}/>
        ))}
    </Contanier>
      
    </>
  )
}

export default Categories
