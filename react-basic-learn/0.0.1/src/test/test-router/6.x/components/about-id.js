import { useParams } from "react-router-dom";
function AboutID (){
  const params = useParams()
  return(
      <>
        <h2>AboutID-{ params.id } </h2>
      </>
  )
}

export default AboutID;