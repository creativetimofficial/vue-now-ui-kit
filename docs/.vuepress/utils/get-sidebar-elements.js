let componentList = [
  'alert',
  'badge',
  'breadcrumb',
  'buttons',
  'cards',
  'checkboxes',
  'collapse',
  'datepicker',
  'dropdown',
  'inputs',
  'modal',
  'navbars',
  'nucleo-icons',
  'parallax',
  'pagination',
  'progress',
  'radio',
  'slider',
  'switch',
  'tabs',
  'typography'
];

export default function (componentEntries) {
  let sideItems = [];
  const menus = {
    components: {
      title: 'Components',
      collapsable: false,
      children: []
    }
  };

  componentList.forEach(component => {
    menus.components.children.push(`/component-docs/${component}`)
  });

  for (let menu in menus) {
    if (menus[menu].children.length > 0) {
      sideItems.push(menus[menu]);
    }
  }

  return sideItems;
}
