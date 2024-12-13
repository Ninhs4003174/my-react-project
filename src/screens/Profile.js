import React from 'react';
import FolderList from '../components/navigation/FolderList';

const profileItems = [
  { primary: 'Resume', secondary: 'Updated Today', icon: 'work' },
  { primary: 'Portfolio', secondary: 'Last Month', icon: 'image' },
];

export default function Profile() {
  return <FolderList items={profileItems} />;
}