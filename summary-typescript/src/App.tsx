import "./App.css";

import PostList from "./components/PostList";

import PostContextProvider from "./store/post-context";

import MainHeader from "./components/MainHeader";
import ModalContextProvider from "./store/modal-context";

function App() {
  return (
    <>
      <ModalContextProvider>
        <MainHeader />
        <main>
          <PostContextProvider>
            <PostList />
          </PostContextProvider>
        </main>
      </ModalContextProvider>
    </>
  );
}

export default App;
