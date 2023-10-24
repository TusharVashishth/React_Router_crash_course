import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}
