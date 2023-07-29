import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>
      },
      {
        path: "watch",
        element: <WatchPage ></WatchPage>
      },
      {
        path: "demo",
        element: <Demo ></Demo>
      },
      {
        path: "demonew",
        element: <Demo2 ></Demo2>
      },
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head></Head>
       <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
