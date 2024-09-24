import Toolbar from '../Toolbar'
import Topbar from '../Topbar'
import styles from './overlay.module.scss'

const Overlay = ({theme}) => {
    return  (  
        <div className={styles.overlay}>
            <Topbar theme={theme} />
            <Toolbar theme={theme} />
        </div>
    );
}
 
export default Overlay;