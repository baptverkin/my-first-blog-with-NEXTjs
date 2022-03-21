import { Layout } from "../../components/Layout";

const Ferrari : React.FC = () => {
  return (
  <>
  <Layout>
    <h3 style={{textAlign: "center"}}>
      🏎 Ferrari is back
    </h3>
    <div style={{textAlign: "center", marginLeft: "50em", marginRight: "50em", marginTop: "5em", marginBottom: "5em"}}>
        Pour l{"'"}ouverture de la saison de Formule 1, Charles Leclerc a roulé sur la concurrence. Parti en pole sur le circuit de Sakhir (Bahreïn), le pilote Ferrari a devancé son coéquipier Carlos Sainz pour s’adjuger sa 3e victoire en F1, après 2 ans et demi de disette. Lewis Hamilton a complété le podium et pris de l’avance sur son rival Max Verstappen, trahi par sa monoplace alors qu’il occupait la 2e place avant d’être contraint d’abandonner à 2 tours de l’arrivée. Fortunes diverses côté français : Esteban Ocon s’est classé 7e et Pierre Gasly a dû rentrer aux stands après avoir vu sa monoplace prendre feu. En revanche, La Marseillaise a retenti en Formule 2 grâce à Théo Pourchaire, ainsi qu’en Formule 3, grâce à Isack Hadjar et Victor Martins. Ce dernier a d’ailleurs devancé un certain Arthur Leclerc, petit frère de Charles. Encore quelques efforts, et le français deviendra la deuxième langue officielle du royaume de Bahreïn.
    </div>
  </Layout>
  </>)
}

export default Ferrari;
