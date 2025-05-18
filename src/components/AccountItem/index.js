import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-1/474063982_2410877742578800_3465847327283916147_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHBi6J041bhMr5yxCakaHS0o5H0FfYxcCCjkfQV9jFwIDvStbVnKGWfVtZtBiZw56XWL_smShxt1IDqrmaOvaNE&_nc_ohc=U0J8EjxmCgoQ7kNvwGzcnwM&_nc_oc=AdlSUvkTILPbXB1t7bGtqpaeqyQb9iXR1PsxZU3C7AKaeCor-qGMxVCfYaDGq9VVk771_aLaguEqGPGVWF2w91P6&_nc_zt=24&_nc_ht=scontent.fsgn12-1.fna&_nc_gid=vkysHdyTmATQvWDxrUpLWA&oh=00_AfKtcWGsihoAkjUUAnSBSHDPBTt0zb_W8aeibUAJBSMGRA&oe=682FE7C3"
                    alt="LinhbeNh01"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;