import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { FeedbackComponent } from './core/pages/feedback/feedback.component';
import { QuizComponent } from './core/pages/quiz/quiz.component';
import { AdminComponent } from './core/pages/admin/admin.component';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'quiz', component: QuizComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'admin', component: AdminComponent },
        ]
    },

    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
