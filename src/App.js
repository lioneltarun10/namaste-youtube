import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";


function App() {
  return (
    <Provider store={store}>
   <div>
      
      <Head />
      <Body />
      
      
{/* 
* Head
& body
*  sidebar
*    MenuItems
*  MainContainer
*    ButtonList
*    VideoContainer
*      videoCard
*/}

   </div>
   </Provider>
  );
}

export default App;
