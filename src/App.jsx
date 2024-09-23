import { Tarjeta } from "./components/Cards/Tarjeta/Tarjeta"

function App() {
  return (
    <>
      <h1>Hello UXLab / Storybook</h1>
      <Tarjeta
        cardTitle='Verificación de limpieza en góndola'
        caption='Única ejecución'
        title="Detalle"
        subTitle="Visita comercial completa"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Arcu blandit diam amet, ac commodo blandit facilisis.
        Tincidunt ultricies congue cras habitasse sem eu.
        Ut rutrum non malesuada est. Augue egestas vestibulum dolor,
        lectus mauris, odio ut."
        open={false}
        showCaption={true}
        showArrow={true}
      />
    </>

  )
}

export default App
