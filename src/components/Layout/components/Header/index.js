import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assests/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCoins, faGear, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
                { code: 'ja', title: '日本語' },
                { code: 'ko', title: '한국어' },
                { code: 'zh', title: '中文' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

function Header() {

    const currentUser = true; // Replace with actual user authentication logic

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@LinhbeNh01',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={routesConfig.home} className={cx('logo-link')}>
                <img src={images.logo} alt="Tiktok" />
            </Link>

            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <div>
                        <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </div>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-1/474063982_2410877742578800_3465847327283916147_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHBi6J041bhMr5yxCakaHS0o5H0FfYxcCCjkfQV9jFwIDvStbVnKGWfVtZtBiZw56XWL_smShxt1IDqrmaOvaNE&_nc_ohc=U0J8EjxmCgoQ7kNvwGzcnwM&_nc_oc=AdlSUvkTILPbXB1t7bGtqpaeqyQb9iXR1PsxZU3C7AKaeCor-qGMxVCfYaDGq9VVk771_aLaguEqGPGVWF2w91P6&_nc_zt=24&_nc_ht=scontent.fsgn12-1.fna&_nc_gid=vkysHdyTmATQvWDxrUpLWA&oh=00_AfKtcWGsihoAkjUUAnSBSHDPBTt0zb_W8aeibUAJBSMGRA&oe=682FE7C3"
                            alt="LinhbeNh01"
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>


        </div>
    </header >;
}

export default Header;