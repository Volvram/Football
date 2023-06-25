"use client"
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./header.module.scss";
import { headerSections } from "@/config/headerSections";
import Input from "../Input/Input";
import menuIcon from "@/assets/img/menu.png";
import bellIcon from '@/assets/img/bell.png';
import mailIcon from '@/assets/img/mail.png';
import heartIcon from '@/assets/img/heart.png';

const Header: React.FC = ()  => {
    return (
        <div className={styles.header}>
            <div className={styles.header_menu}>
                <Image className={styles.header_menu_icon} src={menuIcon} alt="Меню" />
            </div>
            <nav className={styles.header_nav}>
                <div className={styles.header_nav_sections}>
                    {headerSections.map(section => {
                        return (
                            <Link key={section.id} href="/example">
                                <p className={styles.header_nav_sections_section}>{section.name}</p>
                            </Link>
                        )
                    })}
                </div>
                <div className={styles.header_nav_search}>
                    <Input onChange={() => {}} className={styles.header_nav_search_input} placeholder="Найти матчи"/>
                </div>
                <div className={styles.header_nav_icons}>
                    <Image className={styles.header_nav_icons_icon} src={bellIcon} alt={"Уведомления"} />
                    <Image className={styles.header_nav_icons_icon} src={mailIcon} alt={"Почта"} />
                    <Image className={styles.header_nav_icons_icon} src={heartIcon} alt={"Понравившееся"} />
                </div>
            </nav>
        </div>
    )
}

export default Header;