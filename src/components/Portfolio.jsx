import Project from "./Project"
import GameU from '../components/images/gameU.png'
import MovieCave from '../components/images/MovieCave.png'
import Jate from '../components/images/Jate.png'
import FightPredictor from '../components/images/FightPredictor.png'

function Portfolio() {
  const projects = [{
    title: 'GameU',
    image: GameU, //change to diff image
    gitHubUrl: 'https://github.com/austintynes/gameU',
    deployedUrl: 'https://stark-journey-96848-bb3a9e73a346.herokuapp.com/'
  }, 
  {
    title: 'The Movie Cave',
    image: MovieCave,
    gitHubUrl: 'https://github.com/austintynes/movie-project',
    deployedUrl: 'https://austintynes.github.io/movie-project/'
  },
  {
    title: 'J.A.T.E',
    image: Jate,
    gitHubUrl: 'https://github.com/austintynes/text-editor-1',
    deployedUrl: 'https://afternoon-basin-65480-36474b7de98f.herokuapp.com/'
  },
  {
    title: 'Fight Predictor',
    image: FightPredictor,
    gitHubUrl: 'https://github.com/austintynes/UFC-fight-predictor',
    deployedUrl: 'https://austintynes.github.io/UFC-fight-predictor/'
  },
  {
    title: '',
    image: GameU,
    gitHubUrl: '',
    deployedUrl: ''
  },
  {
    title: '',
    image: GameU,
    gitHubUrl: '',
    deployedUrl: ''
  }]
    return (
      <main>
       {projects.map( (project, index)=> {
       return <Project project={project} key={index}/>
       })}  
      </main>
      
         
    
    )
  }
  
  export default Portfolio