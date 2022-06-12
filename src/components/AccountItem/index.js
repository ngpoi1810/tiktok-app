import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/280601609_1885402544988915_7138582829308878942_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iyNWLuIXlkMAX8Ne8mx&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT8IgTQ32u_l8pdr0Cfy5as0-VgXe5KlzRHfcjmiA8ruww&oe=62A86282" alt="daubep"/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Hoa Chau Anh</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>chauanhhoa</span>
        </div>
    </div>
}

export default AccountItem;