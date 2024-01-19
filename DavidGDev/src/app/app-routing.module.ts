import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechComponent } from './components/tech/tech.component';
import { TrainingComponent } from './components/training/training.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
