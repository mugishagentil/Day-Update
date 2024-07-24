import List from './List.jsx';

function App(){

   const fruits = [{id: 1,name:"mango", colories: 22},
      {id: 2,name:"banana", colories: 32},
      {id: 3,name:"orange", colories: 42}, 
      {id: 4,name:"pineaple", colories: 52}, 
      {id: 5,name:"sushi", colories: 62}];

      const vegetables = [{id: 1,name:"mango", colories: 22},
         {id: 2,name:"banana", colories: 32},
         {id: 3,name:"orange", colories: 42}, 
         {id: 4,name:"pineaple", colories: 52}, 
         {id: 5,name:"sushi", colories: 62}];

         const names = [{id: 1,name:"Urban", colories: 22},
            {id: 2,name:"GENTIL", colories: 32},
            {id: 3,name:"Lena", colories: 42}, 
            {id: 4,name:"Owen", colories: 52}, 
            {id: 5,name:"Kazeneza", colories: 62}];

            const avocados = [{id: 1,name:"mango", colories: 22},
               {id: 2,name:"banana", colories: 32},
               {id: 3,name:"orange", colories: 42}, 
               {id: 4,name:"pineaple", colories: 52}, 
               {id: 5,name:"sushi", colories: 62}];
   return(
      <>
      <List items={fruits} h3 ="Fruits"/>
      <List items={vegetables} h3 ="Vegetables"/>
      <List items={names} h3 ="names"/>
      <List items={avocados} h3 ="avocado"/>
      </>
   );
}
export default App