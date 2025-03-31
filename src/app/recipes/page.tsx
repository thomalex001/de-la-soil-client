
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
export default function recipesPage () {
  
  return (
  <>
  <Navbar/>
<RecipeCard>
  <h1>Recipe Name</h1>
  <h2>Author</h2>
  <img src={''} alt='recipe'/>
  <h3>Short Description Text maximum 100 characters long</h3>
  <div>
    <h3>Prep Time</h3>
    <p>30-40mn</p>
    <h3>Cooking Time</h3>
    <p>25-30mn</p>
    <h3>Serve</h3>
    <p>Serves 4</p>
    <h3>Dietary</h4>
    <p>Egg</p>
    <p>Gluten</p>
    </div>
  <p>Method</p>
</RecipeCard>
  </>

  )

}

const RecipeCard = styled.div`
  width: 100vw
`