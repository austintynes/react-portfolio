function Project(props) {
console.log(props)
    return (
      <main>
          <h1>Project</h1>
          <img src={props.project.image} alt="" />
          <a href="">Image Here</a>
          <a href="">Github Link</a>
      </main>
      
         
    
    )
  }
  
  export default Project