import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkill from "./components/MySkill"
import { DarkTheme, LightTheme } from "./components/Themes"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyles"

function App() {
  return <>
  <GlobalStyle/>
  <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/blog" element={<BlogPage/>}/>
  <Route path="/work" element={<WorkPage/>}/>
  <Route path="/skills" element={<MySkill/>}/>
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
    
    </>
    
}

export default App