import cookies from './cookies'

const util = {
    cookies
}

// 将每项的children与父级合并为一个数组
export function getAllMenu (menulist) {
    let allMenu = [];
    menulist.forEach(menu => {
        if (menu.children && menu.children.length) {
            const menus = getMenuChildren(menu);
            menus.forEach(item => allMenu.push(item));
        } else {
            allMenu.push(menu);
        }
    });
    return allMenu;
}

export function getMenuChildren (menu) {
    if (menu.children && menu.children.length) {
        return menu.children.reduce((all, item) => {
            const foundChildren = getMenuChildren(item);
            return all.concat(foundChildren);
        }, []);
    } else {
        return [menu];
    }
}

export function getMatchMenu (currentPath, menuList) {
    const currentBreadcrumbList = [];
    const allMenu = getAllMenu(menuList)
    allMenu.forEach(menu => {
        if (currentPath.indexOf(menu.path) > -1) {
            currentBreadcrumbList.push({
                path: menu.path,
                title: menu.title
            });
        }
    });
    return currentBreadcrumbList
}

export default util
