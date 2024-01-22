
import { useRive} from 'rive-react'
//import loader from '../../public/Full-Screen-Loading.riv'
import './style.css'

export const Preloader = () => {
    const { rive, RiveComponent } = useRive({
      src: "https://cdn.rive.app/animations/vehicles.riv",
      autoplay: true,
    });

    return (
    <div>
        <span>Trabajar</span>
        <RiveComponent className='canvas'/>
    </div>
    );
  };
