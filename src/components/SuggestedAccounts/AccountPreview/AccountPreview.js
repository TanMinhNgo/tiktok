import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/481455451_947812664198133_4136670842412718026_n.jpg?stp=c13.0.672.672a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGMywhbsEseVezEBTulYwZcpe-qFS-SF9-l76oVL5IX39GI93nEfCOsy5yWI6P0g7HRo-t7-OuTO8ZhLZxJ_Qf8&_nc_ohc=GijZpbxg3FUQ7kNvwGTCOzG&_nc_oc=AdkyhST3mopvu51_1o_mq5mjy0UgPkK7X2jIJ83bHCV-mG6tXk1Bpm0rrA5oXrqqccUUkMGFWVYV7IbLgB8LoDv7&_nc_zt=24&_nc_ht=scontent.fsgn6-1.fna&_nc_gid=QX-nj1F0V5nElvkErqOZFQ&oh=00_AfJVh46VdUdlfi88KiEWV5NVa8kRHyQ-PvbarJbkH3H2tQ&oe=68369E21"
                    alt="/"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>LinhbeNh01</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vương Mai Béo</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;