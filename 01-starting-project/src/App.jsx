import Corcomponent from "./components/Corcomponent"
import img from "./assets/components.png"
import TabButton from "./components/TabButton";
// import img1 from "./assets/config.png"
// import img2 from "./assets/jsx-ui"
// import img3 from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./data"
function App() {
  return (
    <div>
      <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        {CORE_CONCEPTS.map(
          (e) => (
            <Corcomponent key={e.index} {...e}/>
          )
        )}
        </ul>
        </section>
        <section id="examples">
<h2>Example</h2>
<menu>

        <TabButton>COMPONENTS</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>PROPS</TabButton>
        <TabButton>STATE</TabButton>
</menu>
        </section>
      </main>
      
    </div>
  );
}

export default App;
