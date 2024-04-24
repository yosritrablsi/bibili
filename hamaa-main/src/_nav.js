import React from 'react';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import { cilNotes } from '@coreui/icons';

const _nav = [
  {
    component: CNavTitle,
    name: 'Tâche',
  },
  {
    component: CNavGroup,
    name: 'Espace Bibliothécaire',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Livres',
        to: '/forms/bibliotecaire',
      },
      {
        component: CNavItem,
        name: 'liste de demande',
        to: '/forms/lesemprunte', // Assurez-vous que cette route correspond à votre composant DemandeEmprunt
      },
      {
        component: CNavItem,
        name: 'liste des emprunts ',
        to: '/forms/input-group', // Assurez-vous que cette route correspond à votre composant DemandeEmprunt
      },
    ],
  },
];

export default _nav;
