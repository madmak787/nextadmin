
import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span>Total Users</span>
                <span>10.273</span>
                <span>
                    <span className={styles.positive}>12%</span> more than previous week
                </span>
            </div>
        </div>
    )
}
export default Card