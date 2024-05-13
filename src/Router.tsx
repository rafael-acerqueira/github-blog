import { Route, Routes } from "react-router-dom";
import { Post } from "./pages/Post";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";



export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='posts/:id' element={<Post />} />
      </Route>
    </Routes>
  )
}