import React, { Component } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import DummyImage from '../components/Dashboard/assets/images/BumiManusia.jpg';
import DummyImage2 from '../components/Dashboard/assets/images/dilan.jpg';
import DummyImage3 from '../components/Dashboard/assets/images/kambing_jantan.jpg'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          image: DummyImage,
          title: 'Bumi Manusia',
          author: 'Pramodya Anantatoer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, felis sed tincidunt sodales, dolor urna pretium mi, vel commodo ligula mauris nec erat. Etiam et feugiat magna, nec vestibulum nisl. Donec condimentum sapien quis neque elementum vulputate. Curabitur placerat lorem vel erat fringilla, non imperdiet lectus fermentum. Maecenas quis odio eget enim hendrerit ullamcorper vel et nisl. Praesent sit amet urna ullamcorper, tincidunt purus dictum, convallis leo. Maecenas tempor neque ac sem rhoncus, et euismod nisl tempus. In pellentesque ultricies urna, eget convallis sem dignissim quis. In nec tempus nulla, vitae scelerisque leo. Suspendisse in interdum orci. Etiam non ex sit amet arcu pellentesque dignissim rhoncus in ligula.'
        },
        {
          id: 2,
          image: DummyImage2,
          title: 'Dilan',
          author: 'Pidi Baiq',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, felis sed tincidunt sodales, dolor urna pretium mi, vel commodo ligula mauris nec erat. Etiam et feugiat magna, nec vestibulum nisl. Donec condimentum sapien quis neque elementum vulputate. Curabitur placerat lorem vel erat fringilla, non imperdiet lectus fermentum. Maecenas quis odio eget enim hendrerit ullamcorper vel et nisl. Praesent sit amet urna ullamcorper, tincidunt purus dictum, convallis leo. Maecenas tempor neque ac sem rhoncus, et euismod nisl tempus. In pellentesque ultricies urna, eget convallis sem dignissim quis. In nec tempus nulla, vitae scelerisque leo. Suspendisse in interdum orci. Etiam non ex sit amet arcu pellentesque dignissim rhoncus in ligula.'
        },
        {
          id: 3,
          image: DummyImage3,
          title: 'Kambing Jantan',
          author: 'Raditya Dika',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, felis sed tincidunt sodales, dolor urna pretium mi, vel commodo ligula mauris nec erat. Etiam et feugiat magna, nec vestibulum nisl. Donec condimentum sapien quis neque elementum vulputate. Curabitur placerat lorem vel erat fringilla, non imperdiet lectus fermentum. Maecenas quis odio eget enim hendrerit ullamcorper vel et nisl. Praesent sit amet urna ullamcorper, tincidunt purus dictum, convallis leo. Maecenas tempor neque ac sem rhoncus, et euismod nisl tempus. In pellentesque ultricies urna, eget convallis sem dignissim quis. In nec tempus nulla, vitae scelerisque leo. Suspendisse in interdum orci. Etiam non ex sit amet arcu pellentesque dignissim rhoncus in ligula.'
        },
        {
          id: 4,
          image: DummyImage,
          title: 'Bumi Manusia',
          author: 'Pramodya Anantatoer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, felis sed tincidunt sodales, dolor urna pretium mi, vel commodo ligula mauris nec erat. Etiam et feugiat magna, nec vestibulum nisl. Donec condimentum sapien quis neque elementum vulputate. Curabitur placerat lorem vel erat fringilla, non imperdiet lectus fermentum. Maecenas quis odio eget enim hendrerit ullamcorper vel et nisl. Praesent sit amet urna ullamcorper, tincidunt purus dictum, convallis leo. Maecenas tempor neque ac sem rhoncus, et euismod nisl tempus. In pellentesque ultricies urna, eget convallis sem dignissim quis. In nec tempus nulla, vitae scelerisque leo. Suspendisse in interdum orci. Etiam non ex sit amet arcu pellentesque dignissim rhoncus in ligula.'
        },
        {
          id: 5,
          image: DummyImage2,
          title: 'Dilan',
          author: 'Pidi Baiq',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, felis sed tincidunt sodales, dolor urna pretium mi, vel commodo ligula mauris nec erat. Etiam et feugiat magna, nec vestibulum nisl. Donec condimentum sapien quis neque elementum vulputate. Curabitur placerat lorem vel erat fringilla, non imperdiet lectus fermentum. Maecenas quis odio eget enim hendrerit ullamcorper vel et nisl. Praesent sit amet urna ullamcorper, tincidunt purus dictum, convallis leo. Maecenas tempor neque ac sem rhoncus, et euismod nisl tempus. In pellentesque ultricies urna, eget convallis sem dignissim quis. In nec tempus nulla, vitae scelerisque leo. Suspendisse in interdum orci. Etiam non ex sit amet arcu pellentesque dignissim rhoncus in ligula.'
        }
      ]
    }
  }

  render(){
    return(
      <>
        <Dashboard data={this.state.books} {...this.props} />
      </>
    )
  }
}

export default Home;