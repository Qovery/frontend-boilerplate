import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TechInterviewModule } from "@tech-interview/tech-interview";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: 'welcome',
          loadChildren: async (): Promise<typeof TechInterviewModule> =>
            import(
              '../../../../libs/tech-interview/src/lib/tech-interview.module'
              ).then((m) => m.TechInterviewModule),
        },
        {
          path: '',
          redirectTo: 'welcome',
          pathMatch: 'full',
        },
        {
          path: '**',
          redirectTo: '404',
        },
      ],
      {
        scrollPositionRestoration: 'enabled',
        paramsInheritanceStrategy: 'always',
        relativeLinkResolution: 'legacy',
      },
    ),
  ],
})
export class AppRoutingModule {}
