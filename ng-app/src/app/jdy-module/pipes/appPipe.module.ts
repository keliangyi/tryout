import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyPipe } from './money.pipe';
import { IdentityPipe } from './identity.pipe';



@NgModule({
    declarations: [
        MoneyPipe,
        IdentityPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoneyPipe, // 共享modules: 在foo module的import中声明该 module，即可在foo module下的文件中使用 该module中的pipe
        IdentityPipe,
    ]
})
export class AppPipeModule { }
