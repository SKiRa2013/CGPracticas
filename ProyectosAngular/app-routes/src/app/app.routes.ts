import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    
    {
        path: 'Auth',
        component: AuthPageComponent
    },

    {
        path: 'Sidebar',
        component: SidebarPageComponent
    }
];
