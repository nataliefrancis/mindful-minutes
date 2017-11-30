import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community/community.component';

const routes: Routes = [
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