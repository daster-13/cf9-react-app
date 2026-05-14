// import FunctionalComponent from "./components/LessonTwo/FunctionaComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";


// type PropsA = {
//     title: string,
//     description: string,
// }
// type PropsB= {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo{
//     title: string,
//     description: string,
// }
// //UNION
// type Status = "Error" | "Warning" | "Info";
//
// //Tuples
// type  Coordinates = [number, number];
//
// //Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// //INTERSECTION
// type Props = PropsA & PropsB;

// interface PropsTwo{
//    price:number,
//    sort: number,
// }
// PropsTwo = {title, description, price, sort}
// interface PropsThree extends PropsTwo {
//    image:string,
// }
//  PropsTree = {title, description, price, sort, image}
function App() {


  return (

      <>
          {/*Lesson Two*/}
          {/*<FunctionalComponent />*/}
          {/*<ClassComponent />*/}
          {/*<ArrowFunctionalComponent />*/}

          {/*Lesson Three */}
          {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
          {/*<ArrowFunctionalComponentWithProps*/}
          {/*    title="Second Title"*/}
          {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
          {/*/>*/}

          <Layout addClasses="text-blue-600 bg-gray-100 ">
          <ArrowFunctionalComponentWithProps
              title="Second Title"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."
          />
              <p>Lorem ipsum dolor sit amet.</p>
          </Layout>


      </>
  )

}

export default App;
 