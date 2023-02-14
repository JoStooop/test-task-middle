import React, {memo} from 'react';
import s from './NavListItem.module.scss'

import {NavLink} from 'react-router-dom';

const defaultClass = s.item__link;
const activeClasses = `${s.item__link} ${s.item__link_active}`;

const setActiveClasses = (({isActive}) => isActive ? activeClasses : defaultClass);

const NavListItem = memo(({route}) => {
	return (
		<li className={s.item}>
			<NavLink className={setActiveClasses} to={route.path}>
				{route.name}
			</NavLink>
		</li>
	);
});

export {NavListItem};
