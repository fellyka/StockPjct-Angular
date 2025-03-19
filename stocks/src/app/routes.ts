import { Routes, RouterModule} from '@angular/router'; //Imports router dependencies
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ManageComponent } from './components/manage/manage.component'

//Defines a route configuration array
const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
];

//Exports the routes for use
export const AppRoutes = RouterModule.forRoot(routes);