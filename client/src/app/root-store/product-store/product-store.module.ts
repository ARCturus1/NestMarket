import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '../../../../node_modules/@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '../../../../node_modules/@ngrx/effects';
import { ProductEffects } from './effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('products', reducer),
        EffectsModule.forFeature([ProductEffects])
    ],
    declarations: []
})
export class ProductStoreModule { }
