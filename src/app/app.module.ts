import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/products-list/products-list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { ReviewDetailComponent } from './requests/review-detail/review-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LineItemListComponent } from './line-items/line-item-list/line-item-list.component';
import { LineItemDetailComponent } from './line-items/line-item-detail/line-item-detail.component';
import { LineItemEditComponent } from './line-items/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './line-items/line-item-create/line-item-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    UserCreateComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorCreateComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestCreateComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestReviewComponent,
    ReviewDetailComponent,
    LineItemListComponent,
    LineItemDetailComponent,
    LineItemEditComponent,
    LineItemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
