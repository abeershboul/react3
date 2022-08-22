import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return(
    <div>
      <HornedBeast title='Rhino
' 
      URL='https://cdn4.fatabyyano.net/wp-content/uploads/2021/06/12114255/%D9%88%D8%AD%D9%8A%D8%AF-%D8%A7%D9%84%D9%82%D8%B1%D9%86-scaled.jpg'
      
      imgTitle='Rhino
      '
      Description='The Rhino beast'/>
      <HornedBeast title='Dog' 
      URL='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg'
      
      imgTitle='dog'
      Description='The dog beast'/>

    </div>
    )
  }
}

export default Main;