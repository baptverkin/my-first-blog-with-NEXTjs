import { Layout } from "../../components/Layout"

const Articles : React.FC = () => {
  return (
  <>
  <Layout>
    <ul style={{marginLeft: "100em"}}>
      <li >
        <h3 >
          <a href="/blog/Ferrari-is-back">
          🏎 Ferrari is back
          </a>
        </h3>
      </li>
      <li>
        <h3>
        <a href="/blog/second-article">
        🏉 Galthié : data, work, team spirit, the winning strategy
        </a>
        </h3>
      </li>
    </ul>
  </Layout>
  </>)
}

export default Articles;
