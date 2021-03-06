import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community/community.component';
import { LandingComponent } from './landing/landing.component';
import { GuidedComponent } from './guided/guided.component';
import { HowtoComponent } from './howto/howto.component';

const routes: Routes = [
	{
	    path: '',
	    component: LandingComponent
	},
    {
        path: 'guided',
        component: GuidedComponent
    },
    {
        path: 'howto',
        component: HowtoComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}