import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyPipe } from './money.pipe';



@NgModule({
    declarations: [
        MoneyPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoneyPipe, // 共享modules: 在foo module的import中声明该 module，即可在foo module下的文件中使用 该module中的pipe
    ]
})
export class AppPipeModule { }
