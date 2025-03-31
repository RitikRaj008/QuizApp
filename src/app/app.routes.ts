import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizSubmitComponent } from './components/quiz-submit/quiz-submit.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';

export const routes: Routes = [  // Ensure this is exported
  { path: '', component: HomeComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'quiz-submit/:id', component: QuizSubmitComponent },
  { path: 'quiz-create', component: QuizCreateComponent },
  { path: 'qucdiz-list', component: QuizListComponent },
];
